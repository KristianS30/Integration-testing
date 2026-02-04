const request = require("supertest");
const app = require("../app");

test("GET /api/hex-to-rgb/FF0000", async () => {
  const res = await request(app).get("/api/hex-to-rgb/FF0000");

  expect(res.statusCode).toBe(200);
  expect(res.body.rgb).toEqual({ r: 255, g: 0, b: 0 });
});

test("invalid hex returns 400", async () => {
  const res = await request(app).get("/api/hex-to-rgb/ZZZZZZ");

  expect(res.statusCode).toBe(400);
});
