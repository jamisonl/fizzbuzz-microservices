import { Module } from '@nestjs/common';
import { DivisibilityCheckController } from './app.controller';
import { DivisibilityCheckService } from './app.service';


@Module({
  imports: [],
  controllers: [DivisibilityCheckController],
  providers: [DivisibilityCheckService],
})
export class AppModule { }
