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

## Pass URL Parameter

1. watch

   - watcher 를 이용하여 URL Route 가 변경되는 순간을 포착하여 컴포넌트를 새로 그린다.
   - 단, URL Route가 아닌 방식으로 컴포넌트 재 사용 불가

2. Prop

   - router를 생성할 때, `props` 옵션을 설정하여 동적 URL 값을 컴포넌트의 props로 받을 수 있다.

## Redirect

1. `redirect`: 강제로 다른 URL로 이동시킨다.
2. `alias`: URL 주소에 대하여, 다른 주소를 별칭으로 사용한다.

## Catch All Route

- vue 에서 제공하는 정규식을 사용하여 정의된 URL이 아닌 경우에 대하여 처리한다.

## Nested Routes

- router 생성 시, `children` 옵션으로 중첩된 라우트를 설정할 수 있다.
- 단, 부모 컴포넌트에서 `<router-view>` 태그가 있어야 자식 컴포넌트를 랜더링할 수 있다.

## Named Routes

- 각 route 의 URL 마다 이름을 부여하여 URL, params를 사용하여 Parameter를 사용할 수 있다.
- URL path 를 변경해도 이름이 변경되지 않으면 동작하는데 있어 무리가 없다.
