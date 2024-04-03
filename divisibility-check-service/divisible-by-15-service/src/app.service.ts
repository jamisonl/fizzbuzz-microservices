import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { DivisibilityResult } from './app';

@Injectable()
export class DivisibilityCheckService {
  private httpService = new HttpService();

  checkDivisibility(number: number): DivisibilityResult {
    const divisibility: DivisibilityResult = {
      number,
      isDivisibleBy15: number % 15 === 0
    };
    return divisibility;
  }
}
