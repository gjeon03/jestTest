## 자주 사용되는 Matcher

### **toBe()**

숫자나 문자와 같은 객체가 아닌 기본형(primitive) 값을 비교할 때 사용

### **toEqual()**

객체를 테스트

### **toBeTruthy(), toBeFalsy()**

true, false가 boolean 타입에 한정되지 않는다.

예) 1 = true, 0 = false

- **toBeTruthy()**

  검증 대상이 규칙에 따라 true 로 간주되면 테스트 통과

- **toBeFalsy()**

  검증 대상이 규칙에 따라 false 로 간주되면 테스트 통과

### **toHaveLength(), toContain()**

- **toHaveLength()**

  배열의 길이를 체크할 때 사용됨.

- **toContain()**

  특정 원소가 배열에 들어있는지 테스트 할 때 사용됨

### **toMatch()**

단순히 `toBe()`를 사용해서 문자열이 정확히 일치하는지를 체크하기도 하지만, 종종 정규식 기반의 테스트가 필요할 때 사용한다.

### **toThrow()**

예외 발생 여부를 테스트해야할 때 사용

인자도 받는데 문자열을 넘기면 예외 메세지를 비교하고 정규식을 넘기면 정규식 체크를 해준다.

---

## describe, beforeAll, afterAll, beforeEach, afterEach 사용법

- describe

  안에 있는 모든 테스트를 테스트 하겠다.

- beforeAll

  test들이 모두 다 시작하기 전에 실행되는 부분을 의미

- afterAll

  test들이 모두 실행되고 난 후에 실행되는 부분

- beforeEach

  각 test들이 실행되기 전에 실행되는 부분을 의미

- afterEach

  각 test들이 실행된 이후 실행되는 부분을 의미

#### Reference

- https://www.daleseo.com/jest-basic/
- https://blog.naver.com/PostView.nhn?blogId=username1103&logNo=222391189854
