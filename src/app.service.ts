import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  encrypt(inputString, shift): string {
    var encryptedString = '';
    while(shift > 26) {
      shift -= 26;
    }
    for (var i=0;i<inputString.length;i++) {
      if (inputString.charAt(i).match(/[a-z]/i)) {
        var input_ascii_code = inputString.charCodeAt(i);
        var encrypted_ascii_code = input_ascii_code + shift;
        if (encrypted_ascii_code > 122) {
          var wrap_around_code = encrypted_ascii_code - 122;
          encrypted_ascii_code = 96 + wrap_around_code;
        }
        encryptedString += String.fromCharCode(encrypted_ascii_code);
      }
      else if (inputString.charAt(i).match(/[A-Z]/i)) {
        var input_ascii_code = inputString.charCodeAt(i);
        var encrypted_ascii_code = input_ascii_code + shift;
        if (encrypted_ascii_code > 90) {
          var wrap_around_code = encrypted_ascii_code - 90;
          encrypted_ascii_code = 64 + wrap_around_code;
        }
        encryptedString += String.fromCharCode(encrypted_ascii_code);
      }
      else {
        encryptedString += inputString.charAt(i);
      }
    }
    return encryptedString;
  }
}
