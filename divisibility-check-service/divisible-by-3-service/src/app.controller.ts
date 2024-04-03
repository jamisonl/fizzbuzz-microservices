import { Controller, Post, Body, Injectable, Req } from '@nestjs/common';
import { DivisibilityCheckService } from './app.service';

@Controller()
export class DivisibilityCheckController {
  constructor(
    private readonly divisibilityCheckService: DivisibilityCheckService,
  ) { }

  @Post('check-divisibility-by-3')
  checkDivisibility(@Body('number') number: number, @Req() req) {
    return this.divisibilityCheckService.checkDivisibility(number);
  }
}
