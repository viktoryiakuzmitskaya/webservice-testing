const axios = require("axios");
const { expect, assert } = require("chai");

describe("GET /users", async () => {
  it("Response status code is 200", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    expect(response.status).to.equal(200);
  });

  it("Response 'content-type header' is present and its value is 'application/json; charset=utf-8'", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    expect(response.headers).to.include({"content-type":"application/json; charset=utf-8"});
  });

  it("Content of the response body is the array of 10 users", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response.data);
    assert.isArray(response.data);
    assert.strictEqual(response.data.length, 10);
  });
});
