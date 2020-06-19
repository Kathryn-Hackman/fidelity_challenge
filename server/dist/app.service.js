"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    encrypt(inputString, shift) {
        shift = parseInt(shift);
        var encryptedString = '';
        while (shift > 26) {
            shift -= 26;
        }
        while (shift < -26) {
            shift += 26;
        }
        var countForwards = true;
        if (shift < 0) {
            countForwards = false;
        }
        for (let i = 0; i < inputString.length; i++) {
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
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map