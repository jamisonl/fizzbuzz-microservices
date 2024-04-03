import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class NumberGenerationService {
  private httpService = new HttpService();

  constructor() { }

  async generateAndSendNumbers(start: number, end: number): Promise<void> {
    for (let number = start; number <= end; number++) {
      const response = this.httpService.post('http://localhost:3001/check-divisibility', {
        number,
      });

      try {
        await lastValueFrom(response);
      } catch (error) {
        console.error(`Error sending number ${number}:`, error);
      }
    }
  }
}
