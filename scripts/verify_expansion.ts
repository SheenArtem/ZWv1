import { InterpretationService } from '../src/logic/InterpretationService';

async function verifyExpansion() {
    console.log('Verifying Expansion Data...');
    const service = InterpretationService.getInstance();

    // 1. Verify Misc Star (TianGuan in Career)
    const misc = service.getMiscStarInterpretation('天官', '官祿宮');
    if (misc && misc.summary.includes('官運亨通')) {
        console.log('✅ Misc Star (天官-官祿) loaded correctly.');
    } else {
        console.error('❌ Misc Star (天官-官祿) failed:', misc);
    }

    // 2. Verify SiHua General
    const sihuaGen = service.getSiHuaInterpretation('廉貞', 'Lu');
    if (sihuaGen && sihuaGen.summary.includes('威權')) {
        console.log('✅ SiHua General (廉貞-祿) loaded correctly.');
    } else {
        console.error('❌ SiHua General (廉貞-祿) failed:', sihuaGen);
    }

    // 3. Verify SiHua Palace (New Feature)
    const sihuaPalace = service.getSiHuaInterpretation('廉貞', 'Lu', '夫妻宮');
    if (sihuaPalace && sihuaPalace.summary.includes('配偶有成')) {
        console.log('✅ SiHua Palace (廉貞-祿-夫妻) loaded correctly.');
    } else {
        console.error('❌ SiHua Palace (廉貞-祿-夫妻) failed:', sihuaPalace);
    }
}

verifyExpansion().catch(console.error);
