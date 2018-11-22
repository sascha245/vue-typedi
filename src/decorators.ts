import Container, { Token } from 'typedi';
import { createDecorator } from 'vue-class-component';

import { setInjection } from './utils';

type InjectType = ((type?: any) => Function) | string | Token<any>;

export function Inject(type?: (type?: any) => Function): Function;
export function Inject(serviceName?: string): Function;
export function Inject(token: Token<any>): Function;

export function Inject(typeOrName?: InjectType) {
  return (target: any, propertyName: string, index?: number) => {
    let identifier: any;
    if (typeof typeOrName === 'string') {
      identifier = typeOrName;
    } else if (typeOrName instanceof Token) {
      identifier = typeOrName;
    } else {
      identifier = (Reflect as any).getMetadata('design:type', target, propertyName);
    }

    const value = Container.get<any>(identifier);
    const decorator = createDecorator(options => {
      setInjection(options, propertyName, value);
    });
    decorator(target, propertyName, index!);
  };
}

export function Injectable() {
  return <T extends { new (...args: any[]): {} }>(target: T) => {
    const handlers = Container.handlers.filter(handler => handler.object.constructor === target);
    handlers.forEach(handler => {
      if (handler.propertyName) {
        target.prototype[handler.propertyName] = handler.value(Container.of(undefined));
      }
    });
  };
}
