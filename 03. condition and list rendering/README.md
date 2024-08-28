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

#### v-show

- 조건에 따른 DOM 요소를 제어하는 `Vue` 디렉티브
- v-if 와는 다르게 DOM 요소의 **display** 값을 변경하는 디렉티브
- 요소가 자주 보임/숨김 처리가 되는 요소에 대하여 사용
- v-if 로 처리하기에는 DOM 요소가 많을 때에는 성능저하 방지를 위해 대체하여 사용 가능

```javascript
const app = Vue.createApp({
  data() {
    return {
      input: "",
    };
  },
});

app.mount("#app");
```

```html
<div id="app">
  <p>
    <input type="text" v-model="input" />
    <span v-show="input.trim().length === 0">Please Input your name</span>
  </p>
</div>
```

## List Rendering

#### v-for

- 주어진 객체에 대하여 **v-for** 가 정의된 DOM 요소를 반복한다.
- 주어진 객체에 따라 반복되는 변수(객체)가 다르다.

```javascript
const app = Vue.createApp({});

app.mount("#app");
```

```html
<div id="app">
  <h4>배열</h4>
  <p v-for="(value, index) in [1,2,3]" v-bind:key="value">
    [{{ index }}] {{ value }}
  </p>

  <h4>범위</h4>
  <p v-for="(num, index) in 10" :key="num">[{{ index }}] {{ num }}</p>

  <h4>객체</h4>
  <p v-for="(value, key, index) in { name: 'name', age: 14}" :key="value">
    [{{ index }}] {{ key }} : {{ value }}
  </p>

  <h4>문자열</h4>
  <p v-for="(char, index) in 'VueJS'" :key="char">[{{ index }}] {{ char }}</p>
</div>
```

#### :key

- DOM 요소에 대하여 고유한 구별값인 **v-bind:key** 디렉티브 값을 사용하여 반복되는 요소에 대하여 구분을 주어줄 수 있다.
