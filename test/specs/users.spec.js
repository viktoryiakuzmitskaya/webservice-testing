const { expect, assert } = require("chai");
const environment = require("../../environments").JSONPlaceholder;
const getUsersTestData = require("../../data/getUsers");
const sendRequest = require("../utils/sendRequest");

describe("GET users", async () => {
  getUsersTestData.map((data) => {
    const config = {
      method: data.method,
      url: environment.uri + data.path,
    };
    it("Response status code is 200", async () => {
      const response = await sendRequest(config);
      expect(response.status).to.equal(200);
    });

    it("Response 'content-type header' is present and its value is 'application/json; charset=utf-8'", async () => {
      const response = await sendRequest(config);
      expect(response.headers).to.include({
        "content-type": "application/json; charset=utf-8",
      });
    });

    it("Content of the response body is the array of 10 users", async () => {
      const response = await sendRequest(config);
      const usersList = response.data;
      assert.isArray(usersList);
      assert.strictEqual(usersList.length, 10);
    });
  });
});
