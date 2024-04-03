import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DivisibilityResult } from './app';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DivisibilityCheckService {
  private httpService = new HttpService();

  async checkDivisibility(number: number): Promise<void> {
    const isDivisibleBy3Res = await lastValueFrom(this.httpService.post('http://localhost:3002/check-divisibility-by-3', { number }))
    const isDivisibleBy5Res = await lastValueFrom(this.httpService.post('http://localhost:3003/check-divisibility-by-5', { number }))
    const isDivisibleBy15Res = await lastValueFrom(this.httpService.post('http://localhost:3004/check-divisibility-by-15', { number }))
    const isDivisibleBy3 = isDivisibleBy3Res.data.isDivisibleBy3;
    const isDivisibleBy5 = isDivisibleBy5Res.data.isDivisibleBy5;
    const isDivisibleBy15 = isDivisibleBy15Res.data.isDivisibleBy15;
    console.log(isDivisibleBy3)
    const divisibility = {
      number,
      isDivisibleBy3,
      isDivisibleBy5,
      isDivisibleBy15,
    };
    const response = this.httpService.post('http://localhost:3005/string-mapping', { divisibility })
    try {
      await lastValueFrom(response);
    } catch (error) {
      console.error(`Error sending number ${number}:`, error);
    }
  }
}
