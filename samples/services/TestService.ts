import { Service } from 'typedi';

@Service()
export class TestService {
  public random(min, max) {
    const diff = max - min;
    return Math.random() * diff + min;
  }
}
