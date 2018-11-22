# vue-typedi

Use [typedi](http://github.com/pleerock/typedi) injections in Vue components

## Usage

1. Install module:

`npm install vue-typedi --save`

2. Install reflect-metadata package:

`npm install reflect-metadata --save`

and import it somewhere in the global place of your app before any service declaration or import (for example in app.ts):

`import "reflect-metadata";`

3. Enabled following settings in tsconfig.json:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

4. Use the module:
```ts
import Vue from 'vue'
import VueTypedi from 'vue-typedi'

Vue.use(VueTypedi);
```

## Example

```ts

import { Container, Inject } from 'vue-typedi';
import MyService from '...';

@Component
export default class MyComponent extends Vue {

  @Inject()
  public myService!: MyService;
}

```

## Decorators

- `@Inject()` only targets and works in Vue components. If you wish to inject a service somewhere else, use the `@Inject` provided by typedi.

- `@Injectable()` implements a feature missing in typedi, that will inject the service in the classes prototype. This allows us to automatically inject services in non service classes.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
