## Mixin

- 컴포넌트 끼리 동일한 스크립트를 작성해야 할 때, 하나의 파일로 합칠 수 있다.
- `data(), method, computed, watch` 에서만 사용 가능하다.
- 사용되는 컴포넌트에 또 다른 `data(), method, computed, watch` 가 존재할 경우, 병합 또는 컴포넌트의 옵션으로 대체된다.
- 전역 *Mixin*을 사용하여 관리를 할 수 있다.
