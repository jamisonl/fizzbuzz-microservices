import { Module } from '@nestjs/common';
import { NumberGenerationController } from './app.controller';
import { NumberGenerationService } from './app.service';

@Module({
  imports: [],
  controllers: [NumberGenerationController],
  providers: [NumberGenerationService],
})
export class AppModule {}
