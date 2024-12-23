## Routing

```shell
npm install vue-router
```

## Set router

- `HTML5` 모드에서는 history 를 [_createWebHistory_](https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode) 로 지정한다.

```javascript

createRouter({
  history: createWebHistory(),
  routes: [
    { path, component },
    ...
  ],
}

```
