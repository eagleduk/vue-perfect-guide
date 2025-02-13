## Load Components

1. 전역 컴포넌트

   - VueJS 의 메인 함수에서 사용
   - 애플리케이션을 로드할 때 참조되는 컴포넌트들을 한번에 읽어온다.
   - 프로젝트 내의 모든 컴포넌트에서 사용 가능하다.

2. 로컬 컴포넌트

   - 컴포넌트를 사용하고자 하는 컴포넌트에서 사용
   - 컴포넌트가 필요할 때에만 사용할 수 있기 때문에 퍼모먼스에 유리하다.
   - 불러온 컴포넌트에서만 사용 가능하다.

## Scoped Style

- Vue 컴포넌트에서 적용된 스타일은 전역적인 스타일로 취급된다.
- `<style scoped>` 옵션을 추가하면 해당 스타일이 있는 Vue Component Template 에서만 적용이 된다.

## Slot

- 특정 태그를 재 사용하기 위한 VueJS의 기능
- 데이터가 아닌 HTML 태그 및 VueJS 기능을 옮겨 사용하기 위한 기능
- slot에 이름을 지정하여 여러개의 slot을 원하는 위치에 랜더링할 수 있다.
- slot Component 마다 `default` slot은 하나만 가질 수 있다.
- `v-slot` 은 `#` 축약어로 사용 가능하다.
- 지정된 이름을 사용하지 않는 slot에 대하여 기본 값을 부여할 수 있다.
- slot을 사용하여 데이터를 다시 전달 받을 수 있다.

## dynamic component

- `component` 태그를 이용하여 랜더링 하고자 하는 컴포넌트를 간단하게 불러올 수 있다. 단, 그리고자 하는 컴포넌트 명이어야 한다.
- `keep-alive` 태그를 사용하여 동적 컴포넌트의 상태를 캐쉬에 저장하고 이어서 사용할 수 있다.

## teleport

- Vue 내장 태그인 `teleport` 를 사용하여 내부의 요소를 원하는 위치로 옮길 수 있다.

> [!TIP]
>
> [Style-Guide](https://v2.vuejs.org/v2/style-guide/)
