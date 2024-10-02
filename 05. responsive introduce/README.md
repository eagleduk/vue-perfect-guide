### [proxy](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

- 한 객체에 대한 기본 작업을 가로채고 재정의 할 수 있다.
- VueJS 에서 값이 변하고 적용하는 과정에서 프록시를 사용한다.

```javascript
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // world
```
