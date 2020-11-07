// test("a placeholder test", () => {
//     expect(2+2).toBe(4)
// })

const supertest = require("supertest")
const server = require("../server")

test("GET /", async ()=> {
    const res = await supertest(server).get("/")
    //console.log(res)
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")   //datatype for application data
    expect(res.body.message).toBe("Welcome to our API")  
})