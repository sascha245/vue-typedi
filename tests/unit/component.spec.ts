import 'reflect-metadata';

import Vue from 'vue';

import { mount } from '@vue/test-utils';

import Home from '../../samples/views/Home';
import VueTypedi, { Container } from '../../src';

Vue.use(VueTypedi);

Container.set('token', 'myToken');

describe('Vue Component', () => {
  it('testModule is injected', () => {
    const wrapper = mount(Home, {});

    const vm: Home = wrapper.vm;

    expect(vm.testService).not.toBeUndefined();
  });

  it('anotherModule is injected', () => {
    const wrapper = mount(Home, {});

    const vm: Home = wrapper.vm;

    expect(vm.testService).not.toBeUndefined();
    expect(vm.testService.anotherService).not.toBeUndefined();
  });
});
