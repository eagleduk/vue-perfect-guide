## Components

- 반복되는 컨텐츠 또는 독립적으로 반응하고자 하는 앱을 만들고자 할 때 사용된다

```html
<div id="app"></div>
```

```javascript
const app = Vue.createApp({});
app.component("first-component", {
  template: `
        <div>
            <button @click="toggleBtn">
                button
            </button>
            <h2 v-if="show"> Hello! </h2>
        </div>
    `,
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleBtn() {
      this.show = !this.show;
    },
  },
});
```
