## mount

- `VueJS`의 기능을 사용하고자 하는 DOM Element에만 직접적으로 마운트 한다.
- HTML에서 여러개의 `VueJS`를 마운트 가능
- 마운트 별로 사용할 수 있는 함수 및 데이터를 나눌 수 있다.

```Javascript
const app = Vue.createApp();

app.mount(<DOM Element>);
```
