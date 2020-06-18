import { Controller, Get, Query, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  encrypt(@Query('inputString') inputString, @Query('shift') shift): object {
    return this.appService.encrypt(inputString, shift);
  }
}
