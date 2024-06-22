const chai = require("chai");
const supertest = require("supertest");

const chaiJsonSchema = require("chai-json-schema");
const readJsonSchma = require("../helper/helper");

const baseURL = "https://reqres.in";

chai.use(chaiJsonSchema);
const should = chai.should;

describe("reqres.in API Test", () => {
  it("TC1 - GET Single User", async () => {
    const schema = readJsonSchma("get_single_user_schema.json");

    const response = await supertest(baseURL).get("/api/users/2");

    console.log(response.body);
    should(response.status === 200);
    should(response.body.id === 2);
    should(response.body.email === "janet");
    should(response.body.first_name === "janet");
    should(response.body.last_name === "weaver");

    should(response.body === schema);
  });

  it("TC2 - POST Register Successful", async () => {
    const body = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    const response = await supertest(baseURL).post("/api/register").send(body);
  });

  it("TC3 - DELETE ", async () => {
    const response = await supertest(baseURL).delete("/api/users/2");

    console.log(response.body);
    // should(response.status===200)
    // should(response.body.id===2)
    // should(response.body.email==='janet')
    // should(response.body.first_name==='janet')
    //should(response.body.last_name==='weaver')
  });

  it("TC4 - PUT ", async () => {
    const response = await supertest(baseURL).put("/api/users/2");

    console.log(response.body);
    // should(response.status===200)
    // should(response.body.id===2)
    // should(response.body.email==='janet')
    // should(response.body.first_name==='janet')
    // should(response.body.last_name==='weaver')
  });
});
