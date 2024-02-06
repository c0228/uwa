const axios = require('axios');
const { expect } = require('chai');

// Replace 'API_URL' with the actual URL of the API endpoint you're testing
const API_URL = 'http://localhost/projects/rw/e-bd-p/timezones/list';

describe('Test Timezones List are loading from Tables', function () {
  it('should return a valid response', async function () {
    try {
      const response = await axios.get(API_URL);

      // Example: Asserting that the response status code is 200
      expect(response.status).to.equal(200);

      // Add more assertions based on the response data, headers, etc.
      // For example:
      // expect(response.data).to.have.property('key', 'value');
      // expect(response.headers['content-type']).to.include('application/json');
    } catch (error) {
      throw new Error(`Test failed: ${error.message}`);
    }
  });
});
