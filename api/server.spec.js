const supertest = require("supertest");
const server = require("./server.js");

describe("server", () => {
  //asynchronous test need to either RETURN the promise
  describe("GET/", () => {
    it("responds with 200 ok", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
    //or use async await
    it("responds with 200 ok", async () => {
      await supertest(server)
        .get("/")
        .expect("Content-Type", /json/i);
    });
    //testing for shape of something
    it("responds {api: 'up'}", async () => {
      await supertest(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });
});
