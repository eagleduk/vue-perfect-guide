## Form

- `v-model` 에 바인딩된 input 태그에는 각 타입에 일치하는 타입으로 자동으로 변환해 준다.
- `v-model` 에 수식어*Modifiers*(lazy, number, trim)를 사용하여 옵션을 부여할 수 있다.
- 단일 그룹의 checkbox 는 배열 형태로 값을 정의해야 체크된 값들을 받을 수 있다. 태그별 값이 다르게 정의되어야 한다.
- 단일 그룹의 radio 는 문자열 형태로 값을 정의해야 선택된 값을 받을 수 있다. 태그별 값이 다르게 정의되어야 한다.
- 단일 checkbox 는 값을 정의할 떄 `boolean` 값으로 정의하면 true/false 값을 받을 수 있다.
