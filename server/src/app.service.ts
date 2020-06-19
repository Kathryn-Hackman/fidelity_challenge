import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  encrypt(inputString, shift): string {
    shift = parseInt(shift);
    var encryptedString = '';
    while(shift > 26) {
      shift -= 26;
    }
    while(shift < -26) {
      shift += 26;
    }
    var countForwards: boolean = true;
    if (shift < 0) {
      countForwards = false;
    }
    for (let i=0;i<inputString.length;i++) {
      if (inputString.charAt(i).match(/[a-z]+/)) {
        var input_ascii_code = inputString.charCodeAt(i);
        if (countForwards) {
            var encrypted_ascii_code = input_ascii_code + shift;
            if (encrypted_ascii_code > 122) {
                var wrap_around_code = encrypted_ascii_code - 122;
                encrypted_ascii_code = 96 + wrap_around_code;
            }
        }
        else {
          encrypted_ascii_code = input_ascii_code + shift;
          if (encrypted_ascii_code < 97) {
            wrap_around_code = 97 - encrypted_ascii_code;
            encrypted_ascii_code = 123 - wrap_around_code;
          }
        }
        encryptedString += String.fromCharCode(encrypted_ascii_code);
      }
      else if (inputString.charAt(i).match(/[A-Z]+/)) {
        var input_ascii_code = inputString.charCodeAt(i);
        if (countForwards) {
        var encrypted_ascii_code = input_ascii_code + shift;
        if (encrypted_ascii_code > 90) {
          var wrap_around_code = encrypted_ascii_code - 90;
          encrypted_ascii_code = 64 + wrap_around_code;
        }
      }
        else {
            encrypted_ascii_code = input_ascii_code + shift;
            if (encrypted_ascii_code < 65) {
            wrap_around_code = 65 - encrypted_ascii_code;
            encrypted_ascii_code = 91 - wrap_around_code;
        }
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
