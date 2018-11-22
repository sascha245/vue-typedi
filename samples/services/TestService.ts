import { Inject, Service } from '../../src';
import { AnotherService } from './AnotherService';

@Service()
export class TestService {
  @Inject()
  public anotherService!: AnotherService;

  public random(min, max) {
    const diff = max - min;
    return Math.random() * diff + min;
  }
}
