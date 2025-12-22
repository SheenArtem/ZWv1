import { InterpretationService } from '../../logic/InterpretationService';
export * from './models';

// Legacy exports can be maintained or removed. For now, we export the Service.
export const service = InterpretationService.getInstance();
