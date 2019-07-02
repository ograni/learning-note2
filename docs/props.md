# props 속성
프롭스 속성은 컴포넌트 간에 데이터를 전달할 수 있는 컴포넌트 통신 방식입니다.

상위 컴포넌트에서 하위 컴포넌트로 내려 보내는 데이터 속성입니다.

> vue-test\vue-camp\1_essentials\components2.html

## props 속성 코드 형식
```js
// 하위 컴포넌트의 내용
var childComponent = {
  props: ['프롭스 속성 명']
}
```
```js
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-bind:프롭스 속성 명="상위 컴포넌트의 data 속성"></child-component>
</div>
```

## props 속성 코드 예시
```js
// 하위 컴포넌트 : childComponent
var childComponent = {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
}

// 상위 컴포넌트 : root 컴포넌트
new Vue({
  el: '#app',
  components: {
    'child-component': childComponent
  },
  data: {
    message: 'hello vue.js'
  }
})
```
```js
<div id="app">
  <child-component v-bind:propsdata="message"></child-component>
  <!-- 위의 출력 결과는 hello vue.js -->
</div>
```
