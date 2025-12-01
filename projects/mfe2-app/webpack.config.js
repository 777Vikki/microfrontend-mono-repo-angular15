const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2-app',

  exposes: {
    './TodoDetailModule': './projects/mfe2-app/src/app/todo-detail/todo-detail.module.ts',
    './TodoDetailComponent': './projects/mfe2-app/src/app/todo-detail/todo-detail.component.ts', 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
