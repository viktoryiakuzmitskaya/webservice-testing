const axios = require("axios");
const { expect } = require("chai");

describe("GET /users", async () => {
  it("status code of the obtained response is 200 OK", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    expect(response.status).equals(200);
  });
});
