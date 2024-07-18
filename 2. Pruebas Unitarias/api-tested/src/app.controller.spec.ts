import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule } from './app.module';

describe('AppController', () => {
  let appController: AppController;

  let appService: AppService;


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('Test fortune', () => {
    //primer test
    it('Validate type of return equal number', () => {
      expect(typeof appController.getFortune()).toBe('number'); //pregunto que expero el typo number
    });
    //segundo test creado
    it('Validate size of fortune number == 4 digits', () => {
      expect(appController.getFortune().toString().length).toBe(4); //pregunto que espero la longitud sea de 4
    });
    //3er test
    it('Validate size of fortune number == 4 digits', () => {
      expect(appController.getFortune().toString().length).toBeLessThanOrEqual(4); //pregunto que espero la longitud sea menor o igual a 4
    });
    //4to test
    it('Validate random', () => {
      const v1: number = appController.getFortune();
      const v2: number = appController.getFortune();
      expect(v1).not.toBe(v2);
    });


  });

  describe('Test fortune string', () => {
    it('Validate type of return equal string', () => {
      jest.spyOn(appService,'getFortune').mockReturnValue(4455);
      expect(typeof appController.getFortuneStr()).toBe('string'); //pregunto que expero el typo number
    });
  });
  
});
