import { InterpretationService } from '../src/logic/InterpretationService';

describe('InterpretationService', () => {
    const service = InterpretationService.getInstance();

    test('should retrieve major star interpretation', () => {
        const result = service.getMajorStarInterpretation('紫微', '命宮');
        expect(result).toBeDefined();
        expect(result?.summary).toContain('帝座入命');
    });

    test('should retrieve auxiliary star interpretation', () => {
        const result = service.getAuxiliaryStarInterpretation('文昌', '命宮');
        expect(result).toBeDefined();
        expect(result?.summary).toContain('文采風流');
    });

    test('should fallback to "其他" for auxiliary star if palace not found', () => {
        // Assuming '其他' exists for 文昌 and we ask for a random palace like 'UnknownPalace'
        // Actually the logic is `star[palaceName] || star['其他']`. If palaceName not in key, it uses 其他.
        // But 文昌 has defined palaces.
        const result = service.getAuxiliaryStarInterpretation('文昌', 'NonExistentPalace');
        expect(result).toBeDefined();
        expect(result?.summary).toBe('吉星加會');
    });

    test('should retrieve sihua interpretation', () => {
        const result = service.getSiHuaInterpretation('廉貞', 'Lu');
        expect(result).toBeDefined();
        expect(result?.summary).toContain('威權與桃花並進');
    });

    test('should retrieve god star interpretation', () => {
        const result = service.getGodStarInterpretation('長生', '命宮');
        expect(result).toBeDefined();
        expect(result?.summary).toContain('生機勃勃');
    });

    test('should return null for unknown star', () => {
        const result = service.getMajorStarInterpretation('UnknownStar', '命宮');
        expect(result).toBeNull();
    });
});
