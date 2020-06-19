export class CipherForm {
    constructor(
        public inputString: string,
        public shift: number,
        public encryptedString?: string,
        public allEncryptedStrings?: Array<string>,
    ) { }
}
