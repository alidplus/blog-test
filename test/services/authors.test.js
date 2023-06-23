const assert = require('assert');
const app = require('../../src/app');

describe('\'authors\' service', () => {
  it('registered the service', () => {
    const service = app.service('authors');

    assert.ok(service, 'Registered the service');
  });
});
