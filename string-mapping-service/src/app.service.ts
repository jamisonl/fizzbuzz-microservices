import { Injectable } from '@nestjs/common';
import { DivisibilityResult } from './app';

@Injectable()
export class StringMappingService {
  stringMapping(divisibility: DivisibilityResult): string {
    if (divisibility.isDivisibleBy15) {
      return `${divisibility.number} FizzBuzz`
    }
    else if (divisibility.isDivisibleBy3) {
      return `${divisibility.number} Fizz`
    }
    else if (divisibility.isDivisibleBy5) {
      return `${divisibility.number} Buzz`
    }
    else {
      return `${divisibility.number}`
    }
  }
}
