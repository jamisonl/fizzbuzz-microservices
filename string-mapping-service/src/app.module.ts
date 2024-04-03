import { Module } from '@nestjs/common';
import { StringMappingController } from './app.controller';
import { StringMappingService } from './app.service';


@Module({
  imports: [],
  controllers: [StringMappingController],
  providers: [StringMappingService],
})
export class AppModule { }
