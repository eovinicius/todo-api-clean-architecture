import { hash, compare } from 'bcrypt';
import { CryptoProvider } from '../../application/providers/crypto-provider';

export class BcryptCryptoProvider implements CryptoProvider {
  async hash(password: string): Promise<string> {
    const passwordHash = await hash(password, 8);
    return passwordHash;
  }
  async compare(password: string, hashedPassword: string): Promise<boolean> {
    if (!(await compare(password, hashedPassword))) return false;
    return true;
  }
}
