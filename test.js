// function getUser(id) {
//   return {
//     id,
//     email: `user${id}@test.com`,
//   };
// }

test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});
