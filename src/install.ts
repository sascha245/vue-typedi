import { getInjections } from './utils';

export function install(vue: any) {
  vue.mixin({
    beforeCreate() {
      const injections = getInjections(this.$options);
      if (injections) {
        injections.forEach((value, propertyName) => {
          this[propertyName] = value();
        });
      }
    }
  });
}
