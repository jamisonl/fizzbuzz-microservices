import { Controller, Post, Body, Injectable, Req } from '@nestjs/common';
import { StringMappingService } from './app.service';
import { DivisibilityResult } from './app';

@Controller()
export class StringMappingController {
  constructor(
    private readonly stringMappingService: StringMappingService,
  ) { }

  @Post('string-mapping')
  stringMapping(@Body('divisibility') divisibility: DivisibilityResult, @Req() req) {
    console.log(this.stringMappingService.stringMapping(divisibility))
    // return this.stringMappingService.stringMapping(divisibility);
  }
}
