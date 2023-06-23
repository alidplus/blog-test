const assert = require('assert');
const app = require('../../src/app');

describe('\'blogs\' service', () => {
  it('registered the service', () => {
    const service = app.service('blogs');

    assert.ok(service, 'Registered the service');
  });
});
