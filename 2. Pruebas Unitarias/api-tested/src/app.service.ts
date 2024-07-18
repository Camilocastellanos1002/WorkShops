import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFortune(): number {
    //return 0;
    //return 123456;
    return Math.floor(1000+Math.random()*9000);
  }
}
