## Composition API

- 한개의 프로젝트 네애서 data(), watcher, method, computed 를 하나의 파일로 설정
- `vue` 패키지의 _ref_, _reactive_ 함수를 사용하여 필요 데이터, 함수를 반환한다.

  - ref는 주로 단일 데이터, reactive는 주로 객체 데이터를 관리한다.

    > isRef, isReactive, toRefs 를 사용하여 데이터의 변화, reactive 값을 ref 값처럼 사용할 수 있게 만들 수 있다.

- `setup(props, context)` 를 사용하여 정의된 파라메터와 이벤트를 사용할 수 있다.

- Lifecycle
  1. beforeCreate, created => **_Not Needed_**
  2. beforeMount, mounted => onBeforeMount, onMounted
  3. beforeUpdate, updated => onBeforeUpdate, onUpdated
  4. beforeUnmount, unmounted => onBeforeUnmount, onUnmounted
