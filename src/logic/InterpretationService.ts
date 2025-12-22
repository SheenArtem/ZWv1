import { StarDatabase, SiHuaDatabase, InterpretationContent, SiHuaType } from '../data/interpretations/models';
import majorStarsData from '../data/interpretations/stars/major.json';
import auxiliaryStarsData from '../data/interpretations/stars/auxiliary.json';
import sihuaData from '../data/interpretations/stars/sihua.json';
import godsData from '../data/interpretations/stars/gods.json';
import miscData from '../data/interpretations/stars/misc.json';

export class InterpretationService {
    private static instance: InterpretationService;

    private majorStars: StarDatabase;
    private auxiliaryStars: StarDatabase;
    private sihuaStars: SiHuaDatabase;
    private godStars: StarDatabase;
    private miscStars: StarDatabase;

    private constructor() {
        this.majorStars = majorStarsData as unknown as StarDatabase;
        this.auxiliaryStars = auxiliaryStarsData as unknown as StarDatabase;
        this.sihuaStars = sihuaData as unknown as SiHuaDatabase;
        this.godStars = godsData as unknown as StarDatabase;
        this.miscStars = miscData as unknown as StarDatabase;
    }

    public static getInstance(): InterpretationService {
        if (!InterpretationService.instance) {
            InterpretationService.instance = new InterpretationService();
        }
        return InterpretationService.instance;
    }

    public getMajorStarInterpretation(starName: string, palaceName: string): InterpretationContent | null {
        const star = this.majorStars[starName];
        if (!star) return null;
        return star[palaceName] || null;
    }

    public getAuxiliaryStarInterpretation(starName: string, palaceName: string): InterpretationContent | null {
        const star = this.auxiliaryStars[starName];
        if (!star) return null;
        return star[palaceName] || star['其他'] || null;
    }

    public getSiHuaInterpretation(starName: string, type: SiHuaType, palaceName?: string): InterpretationContent | null {
        const star = this.sihuaStars[starName];
        if (!star) return null;

        const typeContent = star[type];
        if (!typeContent) return null;

        // If palaceName is provided, try to find specific palace interpretation
        if (palaceName && typeContent.palaces && typeContent.palaces[palaceName]) {
            // Merge general summary with palace specific (or just return palace specific)
            // Returning palace specific is usually better for "Interpretation" view
            return typeContent.palaces[palaceName];
        }

        // Fallback to general type interpretation (removing the 'palaces' key from return if needed, but it's optional in InterpretationContent so standard logic ignores it)
        return typeContent;
    }

    public getGodStarInterpretation(starName: string, palaceName: string): InterpretationContent | null {
        const star = this.godStars[starName];
        if (!star) return null;
        return star[palaceName] || null;
    }

    public getMiscStarInterpretation(starName: string, palaceName: string): InterpretationContent | null {
        const star = this.miscStars[starName];
        if (!star) return null;
        return star[palaceName] || null;
    }

    // Combined getter if consumer doesn't know type (though they usually should)
    public getInterpretation(starName: string, palaceName: string): InterpretationContent | null {
        return this.getMajorStarInterpretation(starName, palaceName) ||
            this.getAuxiliaryStarInterpretation(starName, palaceName) ||
            this.getGodStarInterpretation(starName, palaceName) ||
            this.getMiscStarInterpretation(starName, palaceName);
    }
}
