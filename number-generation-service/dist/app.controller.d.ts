import { NumberGenerationService } from './app.service';
export declare class NumberGenerationController {
    private readonly numberGenerationService;
    constructor(numberGenerationService: NumberGenerationService);
    generateNumbers(start: string, end: string): Promise<"Invalid start or end number provided" | "Numbers generated and sent for processing.">;
}
