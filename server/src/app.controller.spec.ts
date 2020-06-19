import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('I love JavaScript!', () => {
      const inputString = 'I love JavaScript!';
      const shift = 0;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe("I love JavaScript!");
    });
    it('Test 2!', () => {
      const inputString = 'Test 2!';
      const shift = 0;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe("Test 2!");
    });
    it(' ', () => {
      const inputString = ' ';
      const shift = 13;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe(" ");
    });
    it(',,,????%%@@!;;;-+&&&[][]{{$$~', () => {
      const inputString = ',,,????%%@@!;;;-+&&&[][]{{$$~';
      const shift = 20;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe(",,,????%%@@!;;;-+&&&[][]{{$$~");
    });
    it('JavaScript', () => {
      const inputString = 'JavaScript';
      const shift = -1;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe("IzuzRbqhos");
    });
    it('JavaScript!', () => {
      const inputString = 'JavaScript!';
      const shift = 27;
      var testVar = appController.encrypt(inputString,shift);
      expect(testVar['result']).toBe("JavaScript!");
    });
  });
});
