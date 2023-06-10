import { randomBytes } from 'crypto';

class SecurePasswordGenerator {
  private readonly alphaLower = 'abcdefghijklmnopqrstuvwxyz';
  private readonly alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers = '0123456789';
  private readonly symbols = '!@#$%^&*_-+=';

  public generate(length: number, hasNumbers = true, hasSymbols = true): string {
    if (length < 8) {
      throw new Error('Length must be at least 8 to ensure password complexity');
    }

    let password = '';
    password += this.getSecureRandomCharacter(this.alphaLower);
    password += this.getSecureRandomCharacter(this.alphaUpper);
    password += hasNumbers ? this.getSecureRandomCharacter(this.numbers) : '';
    password += hasSymbols ? this.getSecureRandomCharacter(this.symbols) : '';

    const allChars = this.alphaLower + this.alphaUpper + (hasNumbers ? this.numbers : '') + (hasSymbols ? this.symbols : '');
    for (let i = password.length; i < length; i++) {
      password += this.getSecureRandomCharacter(allChars);
    }

    password = this.shuffle(password);

    return password;
  }

  private getSecureRandomCharacter(str: string): string {
    const randomNum = this.getSecureRandomNumber(str.length);
    return str[randomNum];
  }

  private shuffle(str: string): string {
    const array = str.split('');
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = this.getSecureRandomNumber(currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array.join('');
  }

  private getSecureRandomNumber(limit: number): number {
    const byteSize = Math.ceil(Math.log2(limit) / 8);
    let randBytes = parseInt(randomBytes(byteSize).toString('hex'), 16);

    while (randBytes >= limit) {
      randBytes = parseInt(randomBytes(byteSize).toString('hex'), 16);
    }

    return randBytes;
  }
}
