## Condition Rendering

#### v-if, v-else-if, v-else

- 조건에 따른 DOM 요소를 제어하는 `Vue` 디렉티브
- **v-else-if**, **v-else** 요소를 사용하고자 할 때에는 **v-if** 를 사용하는 DOM과 이웃이어야 한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount("#app");
```

```html
<div id="app">
  <p>
    {{ counter }}
    <span v-if="counter === 0"></span>
    <span v-else-if="counter === 1">counter</span>
    <span v-else>counters</span>
  </p>
</div>
```
