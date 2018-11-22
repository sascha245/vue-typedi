import { Component, Vue } from 'vue-property-decorator';

import { Inject } from '../../src';
import { TestService } from '../services/TestService';

@Component
export default class Home extends Vue {
  @Inject()
  public testService!: TestService;

  public randomNumber: number = 0;

  public async random() {
    this.randomNumber = this.testService.random(-1000, 1000);
  }
}
