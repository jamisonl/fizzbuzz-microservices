import { Controller, Get, Query } from '@nestjs/common';
import { NumberGenerationService } from './app.service';

@Controller()
export class NumberGenerationController {
  constructor(
    private readonly numberGenerationService: NumberGenerationService,
  ) {}

  @Get('generate-numbers')
  async generateNumbers(
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    const startNum = parseInt(start, 10) || 1;
    const endNum = parseInt(end, 10) || 100;

    if (isNaN(startNum) || isNaN(endNum)) {
      return 'Invalid start or end number provided';
    }

    await this.numberGenerationService.generateAndSendNumbers(startNum, endNum);
    return 'Numbers generated and sent for processing.';
  }
}
