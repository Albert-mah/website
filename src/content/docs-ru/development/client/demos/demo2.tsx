import {
  Application,
  Plugin,
  SchemaComponent,
  SchemaComponentProvider,
} from '@nocobase/client';
import React from 'react';

const Hello = () => <h1>Привет NocoBase</h1>;

const HelloPage = () => {
  return (
    <SchemaComponent
      schema={{
        name: 'hello',
        type: 'void',
        'x-component': 'Hello',
      }}
    />
  );
};

class PluginHello extends Plugin {
  async load() {
    this.app.addProvider(SchemaComponentProvider, {
      components: this.app.components,
      scopes: this.app.scopes,
    });
    this.app.addComponents({ Hello });
    this.router.add('hello', {
      path: '/',
      Component: HelloPage,
    });
  }
}

const app = new Application({
  router: {
    type: 'memory',
  },
  plugins: [PluginHello],
});

export default app.getRootComponent();
