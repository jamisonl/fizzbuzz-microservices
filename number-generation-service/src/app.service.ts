import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberGenerationService {
  private httpService = new HttpService();
  constructor() {}

  async generateAndSendNumbers(start: number, end: number): Promise<void> {
    for (let number = start; number <= end; number++) {
      console.log(number);
      await this.httpService.post('http://divisibility-check-service/number', {
        number,
      });
    }
  }
}
