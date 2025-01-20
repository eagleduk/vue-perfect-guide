## transition

- `vueJS`에서 제공하는 애니메이션을 위한 컴포넌트(transition)
- 일반 DOM 요소가 지워질 때에는 요소가 없기 때문에 지워지는 애니메이션을 부여하기가 까다롭다. (ex. <dialog>)
- `transition` 내의 컴포넌트가 그려질때와 그려지지 않을때를 구분해 주어야 한다.
- 컴포넌트가 _mount_ 될 때에는 'v-enter-from', 'v-enter-active', 'v-enter-to', _unmount_ 될 때에는 'v-leave-from', 'v-leave-active', 'v-leave-to' 클래스를 사용한다.
- `transition`의 속성을 이용하여 기본 애니메이션 클래스의 접두사를 변경할 수 있다. _name=XXX_ 'XXX-enter-from', 'XXX-enter-active'...
- `transition`의 속성을 이용하여 기본 제공 클래스의 이름을 변경할 수 있다. 'enter-from-class', 'enter-active-class' ... 'leave-to-class'
- `transition`은 하나의 자식만 가질 수 있다.
