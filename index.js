/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spin-button',

  included(app) {
    this._super.included && this._super.included.apply(this, arguments);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('node_modules/spin.js/spin.js');
      this.import('vendor/spinner.js', {
        exports: {
          spinner: ['default'],
        },
      });
    }
  },
};
