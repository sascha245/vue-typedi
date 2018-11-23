import { Container, Inject, Injectable } from '../../src';
import { AnotherService } from '../services/AnotherService';

@Injectable()
export class MyModule {
  @Inject()
  public anotherService!: AnotherService;
}

Container.set('myModule', new MyModule());
