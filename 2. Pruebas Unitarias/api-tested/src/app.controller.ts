import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //creacion de un nuevo endpoint
  @Get('/fortune')
  getFortune(): number {
    return this.appService.getFortune();
  }
  //creacion de un nuevo endpoint
  @Get('/fortune')
  getFortuneStr(): string {
    return this.getFortune().toString();
  }

}
