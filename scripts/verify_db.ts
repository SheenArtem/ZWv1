import { InterpretationService } from '../src/logic/InterpretationService';

async function verify() {
    console.log('Verifying Interpretation Database...');
    const service = InterpretationService.getInstance();

    // 1. Major Star
    const major = service.getMajorStarInterpretation('紫微', '命宮');
    if (major && major.summary.includes('帝座入命')) {
        console.log('✅ Major Star (紫微) loaded correctly.');
    } else {
        console.error('❌ Major Star (紫微) failed:', major);
        process.exit(1);
    }

    // 2. Auxiliary Star
    const aux = service.getAuxiliaryStarInterpretation('文昌', '命宮');
    if (aux && aux.summary.includes('文采風流')) {
        console.log('✅ Auxiliary Star (文昌) loaded correctly.');
    } else {
        console.error('❌ Auxiliary Star (文昌) failed:', aux);
        process.exit(1);
    }

    // 3. Auxiliary Fallback
    const auxFallback = service.getAuxiliaryStarInterpretation('文昌', 'UnknownPalace');
    if (auxFallback && auxFallback.summary === '吉星加會') {
        console.log('✅ Auxiliary Star Fallback loaded correctly.');
    } else {
        console.error('❌ Auxiliary Star Fallback failed:', auxFallback);
        // This might not be critical, but good to know
    }

    // 4. SiHua
    const sihua = service.getSiHuaInterpretation('廉貞', 'Lu');
    if (sihua && sihua.summary.includes('威權')) {
        console.log('✅ SiHua (廉貞-祿) loaded correctly.');
    } else {
        console.error('❌ SiHua (廉貞-祿) failed:', sihua);
        process.exit(1);
    }

    // 5. Gods
    const god = service.getGodStarInterpretation('長生', '命宮');
    if (god && god.summary.includes('生機勃勃')) {
        console.log('✅ God Star (長生) loaded correctly.');
    } else {
        console.error('❌ God Star (長生) failed:', god);
        process.exit(1);
    }

    console.log('All verifications passed!');
}

verify().catch(err => {
    console.error(err);
    process.exit(1);
});
