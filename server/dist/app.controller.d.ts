import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    allEncryptedStringsSoFar: Array<string>;
    encrypt(inputString: any, shift: any): object;
}
