## Vue

- 선언형 접근방식
  : 목표를 정의하고 콘텐츠의 템플릿을 정의하면 중간 단계는 신경 쓸 필요가 없다.

## mount

- `VueJS`의 기능을 사용하고자 하는 DOM Element에만 직접적으로 마운트 한다.
- HTML에서 여러개의 `VueJS`를 마운트 가능
- 마운트 별로 사용할 수 있는 함수 및 데이터를 나눌 수 있다.

```javascript
const app = Vue.createApp();

app.mount("#app");
```

```html
<div id="app"></div>
```

## 데이터 바인딩

- `VueJS`를 생성시 App에서 관리하는 데이터를 정의한다.
- `Vue` 예약어인 _data_ 함수를 사용한다.
- HTML에서 사용시 **{{ }}** 내부에 정의한 데이터 명을 사용한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
    };
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
</div>
```

## v-bind

- **{{ }}** 로 데이터를 사용할 때에는 HTML 태그에서만 사용 가능하다.
- `DOM Element`의 속성에 데이터를 바인딩할 때에는 **v-bind** 기능을 사용하여 속성을 제어한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
    };
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
</div>
```

## methods

- `VueJS`를 생성시 App에서 관리하는 메소드를 정의한다.
- `Vue` 예약어인 _methods_ 키값을 사용한다.
- HTML에서 사용시 **{{ }}** 내부에 정의한 Method를 사용한다.
- **{{ }}** 내부에서는 간단한 Javascript 함수를 사용할 수 있다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
</div>
```

## Use Data

- `Vue` App내에서 정의한 데이터를 사용하고자 할 때, **this** 키워드를 사용한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
</div>
```

## v-html

- HTML 태그로 이루어진 데이터를 출력할 때 사용한다.
- 해당 데이터가 `DOM Element`라는 것을 알려준다.
- 크로스 사이트 스크립팅 공격에 대한 방어 기능이 되지 않아 보안 위협이 발생하기 때문에 기본적으로 사용을 자제해야 한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
      tag: "<h2>Hello World!</h2>",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
  <p v-html="tag" />
</div>
```

## 이벤트 바인딩

- 데이터 바인딩과 비슷하게 `v-on:[이벤트 타입]` 형식으로 사용
- 직접적으로 `Vue`App의 데이터에 접근가능하다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
      tag: "<h2>Hello World!</h2>",
      counter: 0,
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
  <p v-html="tag" />
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <p>{{ counter }}</p>
</div>
```

- `Vue`App 의 method 형식으로도 가능하다.
- method의 이름만 가르켜도, 함수를 넣어도 동작 가능하다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
      tag: "<h2>Hello World!</h2>",
      counter: 0,
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
  <p v-html="tag" />
  <button v-on:click="increment">Increase</button>
  <button v-on:click="decrement()">Decrease</button>
  <p>{{ counter }}</p>
</div>
```

- `Vue`App 메소드에 인수를 활용할 때에는 method 이름을 가르키는 방식이 아닌 함수를 수행하는 방식의 바인딩을 사용한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
      tag: "<h2>Hello World!</h2>",
      counter: 0,
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
  <p v-html="tag" />
  <button v-on:click="increment(10)">Increase</button>
  <button v-on:click="decrement(5)">Decrease</button>
  <p>{{ counter }}</p>
</div>
```

- 이벤트객체를 method에 전달하고자 할 때에는 method명을 입력하면 `Vue`에서 자동으로 `event`객체를 전달하고, 인수 값을 전달할 때에는 `$event` 예약어를 사용한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      course: "Vue JS Composition",
      link: "https://vuejs.org/",
      tag: "<h2>Hello World!</h2>",
      counter: 0,
      firstname: "",
      fullname: "",
    };
  },
  methods: {
    nowDate() {
      return new Date().toDateString();
    },
    formatCourse() {
      return "Finished " + this.course + "!!";
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
    setFirstName(event) {
      this.firstname = event.target.value;
    },
    setFullName(event, firstname) {
      this.fullname = firstname + " " + event.target.value;
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <h1>{{ course }}</h1>
  <a v-bind:href="link"> more Vue. </a>
  <p>{{ nowDate() }}</p>
  <p>{{ new Date() }}</p>
  <p>{{ formatCourse() }}</p>
  <p v-html="tag" />
  <button v-on:click="increment(10)">Increase</button>
  <button v-on:click="decrement(5)">Decrease</button>
  <p>{{ counter }}</p>
  <input type="text" v-on:input="setFirstName" />
  <p>{{ firstname }}</p>
  <input type="text" v-on:input="setFullName($event, firstname)" />
  <p>{{ fullname }}</p>
</div>
```

## 이벤트 수식어

- `v-on` 디렉티브를 `@`로 대체 가능하다.
- 주로 사용하는 [DOM 이벤트](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers), [Key 이벤트](https://vuejs.org/guide/essentials/event-handling.html#key-aliases), [Mouse 이벤트](https://vuejs.org/guide/essentials/event-handling.html#mouse-button-modifiers) 등의 **shortcut** 을 사용할 수 있다.

```javascript
const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    submitForm() {
      alert("Form Submit!");
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <form @submit.prevent="submitForm">
    <button>submit</button>
  </form>
</div>
```

## v-once

- `Vue`의 기능을 한번만 수행하도록 제한한다.

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <p v-once>Inital Counter: {{ counter }}</p>
  <button v-on:click="increment(10)">Increase</button>
  <button v-on:click="decrement(5)">Decrease</button>
  <p>Current Counter: {{ counter }}</p>
</div>
```

## 양방향 바인딩

- `input`과 같이 데이터와 이벤트를 모두 바인딩하는 경우 `v-model`로 `v-on:input`과 `v-bind:value`를 대체할 수 있다.

  > [!NOTE]
  >
  > - text, textarea의 경우 _v-bind:value_, _v-on:input_
  >
  > - checkbox, radio의 경우 _v-bind:checked_, _v-on:change_
  >
  > - select의 경우 _v-bind:value_, _v-on:change_

```javascript
const app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
  },
});

app.mount("#app");
```

```html
<div id="app">
  <input type="text" v-bind:input="name" v-on:input="setName" />
  <input type="text" v-model="name" />
</div>
```
