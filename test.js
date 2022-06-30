// function getUser(id) {
//   return {
//     id,
//     email: `user${id}@test.com`,
//   };
// }

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});
