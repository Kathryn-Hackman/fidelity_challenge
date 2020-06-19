import { Controller, Get, Query, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService)
    { }
  public allEncryptedStringsSoFar: Array<string> = [];
  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  encrypt(@Query('inputString') inputString, @Query('shift') shift): object {
    var currentEncryptedString = this.appService.encrypt(inputString, shift);
    this.allEncryptedStringsSoFar.push(currentEncryptedString);
    return {result:currentEncryptedString, all:this.allEncryptedStringsSoFar}
  }
}
