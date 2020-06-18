import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  encrypt(@Query('inputString') inputString, @Query('shift') shift): string {
    return this.appService.encrypt(inputString, shift);
  }
}
