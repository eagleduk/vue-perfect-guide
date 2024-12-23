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

## Link router

- `router-link` 태그를 이용하여 링크를 랜더링 해준다.
- 내부 로직에 의하여 `url`변경 후 해당 페이지를 랜더링 해준다.
- `router`를 생성할 때, _linkActiveClass_, _linkExactActiveClass_ 옵션을 통하여 링크 활성화 시의 클래스를 임의로 정의할 수 있다.

```html
<router-link to></router-link>
```

- [프로그래밍 방식 네비게이션](https://router.vuejs.org/guide/essentials/navigation.html#Programmatic-Navigation)

```javascript
this.$router.push();
this.$router.back();
this.$router.forward();
```

## dynamic navigation

- router를 설정할 떄 동적 URL 주소를 입력해 준다.
