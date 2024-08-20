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
