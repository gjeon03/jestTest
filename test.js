let var1;
describe("문법 테스트", () => {
  beforeAll(() => {
    var1 = 0;
    console.log(`beforeAll => var1:${var1}`);
  });
  afterAll(() => {
    var1 = -1;
    console.log(`afterAll => var1:${var1}`);
  });
  beforeEach(() => {
    console.log(`beforeEach => var1:${var1}`);
  });
  afterEach(() => {
    console.log(`afterEach => var1:${var1}`);
  });
  test("문법 예제 test111", () => {
    var1 = var1 + 1;
    expect(var1).toBe(1);
  });
  test("문법 예제 test222", () => {
    var1 = var1 + 1;
    expect(var1).toBe(2);
  });
  test("문법 예제 test333", () => {
    var1 = var1 + 1;
    expect(var1).toBe(3);
  });
});
