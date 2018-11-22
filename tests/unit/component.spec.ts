import 'reflect-metadata';

import Vue from 'vue';

import { mount } from '@vue/test-utils';

import Home from '../../samples/views/Home';
import VueTypedi from '../../src';

Vue.use(VueTypedi);

describe('Vue Component', () => {
  it('testModule is injected', () => {
    const wrapper = mount(Home, {});

    const vm: Home = wrapper.vm;

    expect(vm.testService).not.toBeUndefined();
  });
});
