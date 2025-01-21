## transition

- `vueJS`에서 제공하는 애니메이션을 위한 컴포넌트(transition)
- 일반 DOM 요소가 지워질 때에는 요소가 없기 때문에 지워지는 애니메이션을 부여하기가 까다롭다. (ex. <dialog>)
- `transition` 내의 컴포넌트가 그려질때와 그려지지 않을때를 구분해 주어야 한다.
- 컴포넌트가 _mount_ 될 때에는 'v-enter-from', 'v-enter-active', 'v-enter-to', _unmount_ 될 때에는 'v-leave-from', 'v-leave-active', 'v-leave-to' 클래스를 사용한다.
- `transition`의 속성을 이용하여 기본 애니메이션 클래스의 접두사를 변경할 수 있다. _name=XXX_ 'XXX-enter-from', 'XXX-enter-active'...
- `transition`의 속성을 이용하여 기본 제공 클래스의 이름을 변경할 수 있다. 'enter-from-class', 'enter-active-class' ... 'leave-to-class'
- `transition`은 하나의 자식만 가질 수 있다.  
   : 단 여러 자식 요소가 있더라도 보여지는 요소가 하나라는 정확히 인식이 가능하더면 사용할 수 있다.
- 'mode' 속성을 사용하여 더욱 부드러운 변환 효과를 부여할 수 있다.
- `transition`에는 부여되는 클래스와 같이 이벤트가 존재한다. '
  - beforeEnter : 변환 효과 적용이 시작할 때 호출
  - enter : 변환 효과 적용이 수행중일 때 호출, 다음 이벤트 수행을 위한 Parameter(`done`) 존재
  - afterEnter : 변환 효과 적용이 종료되었을 때 호출
  - beforeLeave : 변환 효과 삭제가 시작할 때 호출
  - leave : 변환 효과 삭제가 수행중일 때 호출, 다음 이벤트 수행을 위한 Parameter(`done`) 존재
  - afterLeave : 변환 효과 삭제가 종료되었을 때 호출
  - enter-cancelled : 변환 효과 적용이 취소될 때 호출
  - leave-cancelled : 변환 효과 삭제가 취소될 떄 호출
  - 이벤트 만으로 변환 효과를 적용하고자 할 때에는, `vueJS`가 부여하는 css 클래스를 비활성화 하면 성능이 향상된다(:css="false")
