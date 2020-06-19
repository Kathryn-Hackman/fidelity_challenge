import { CipherForm } from './cipher-form';

describe('CipherForm', () => {
  it('should create an instance', () => {
    const inputString = 'Test string';
    const shift = 0;
    expect(new CipherForm(inputString, shift)).toBeTruthy();
  });
});
