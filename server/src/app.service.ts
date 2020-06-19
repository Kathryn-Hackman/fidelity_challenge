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
    // boolean var to indicate whether inputted shift integer is negative or not
    var countForwards: boolean = true;
    if (shift < 0) {
      countForwards = false;
    }
    for (let i=0;i<inputString.length;i++) {

      if (inputString.charAt(i).match(/[a-z]+/)) {
        // the character is a lowercase alphabet letter
        var input_ascii_code = inputString.charCodeAt(i);
        if (countForwards) {
            var encrypted_ascii_code = input_ascii_code + shift;
            if (encrypted_ascii_code > 122) {
                // if the shift added caused the ascii code to be greater than 122 (the ascii code for lowercase z), it is necessary to wrap around to the beginning of the lowercase alphabet
                var wrap_around_code = encrypted_ascii_code - 122;
                // 96 is the ascii code one below that of lowercase a
                encrypted_ascii_code = 96 + wrap_around_code;
            }
        }
        else {
          encrypted_ascii_code = input_ascii_code + shift;
          if (encrypted_ascii_code < 97) {
            // if the shift added caused the ascii code to be less than 97 (the ascii code for lowercase a), it is necessary to wrap around to the end of the lowercase alphabet
            wrap_around_code = 97 - encrypted_ascii_code;
            // 123 is the ascii code one above that of lowercase z
            encrypted_ascii_code = 123 - wrap_around_code;
          }
        }
        encryptedString += String.fromCharCode(encrypted_ascii_code);
      }

      else if (inputString.charAt(i).match(/[A-Z]+/)) {
        // the character is an uppercase alphabet letter
        var input_ascii_code = inputString.charCodeAt(i);
        if (countForwards) {
        var encrypted_ascii_code = input_ascii_code + shift;
        if (encrypted_ascii_code > 90) {
          // if the shift added caused the ascii code to be greater than 90 (the ascii code for uppercase Z), it is necessary to wrap around to the beginning of the uppercase alphabet
          var wrap_around_code = encrypted_ascii_code - 90;
          // 64 is the ascii code one below that of uppercase A
          encrypted_ascii_code = 64 + wrap_around_code;
        }
      }
        else {
            encrypted_ascii_code = input_ascii_code + shift;
            if (encrypted_ascii_code < 65) {
              // if the shift added caused the ascii code to be less than 65 (the ascii code for uppercase A), it is necessary to wrap around to the end of the uppercase alphabet
              wrap_around_code = 65 - encrypted_ascii_code;
              // 91 is the ascii code one above that of uppercase Z
              encrypted_ascii_code = 91 - wrap_around_code;
        }
      }
        // append the encrypted character to the encrypted result string which will be returned
        encryptedString += String.fromCharCode(encrypted_ascii_code);
      }

      else {
        // the character is neither an upper or lower case alphabet letter, and therefore remains unchanged.
        encryptedString += inputString.charAt(i);
      }
    }
    return encryptedString;
  }
}
