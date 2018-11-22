import { install } from './install';

export {
  Container,
  ContainerInstance,
  Handler,
  ObjectType,
  Service,
  ServiceIdentifier,
  ServiceMetadata,
  ServiceOptions,
  Token
} from 'typedi';

export * from './decorators';

export default {
  install
};
