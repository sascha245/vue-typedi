import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '../../src';
import { MyModule } from '../modules/MyModule';
import { TestService } from '../services/TestService';

@Component
export default class Home extends Vue {
  @Inject()
  public testService!: TestService;

  @Inject('token')
  public token!: string;

  @Inject('myModule')
  public myModule!: MyModule;

  public randomNumber: number = 0;

  public async random() {
    this.randomNumber = this.testService.random(-1000, 1000);
  }
}
