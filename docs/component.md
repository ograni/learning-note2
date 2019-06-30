# Components

## 컴포넌트 생성
컴포넌트를 생성하는 방식은 아래와 같습니다.
```js
Vue.component('컴포넌트 이름', {
  // 컴포넌트 내용
});
```

## 컴포넌트 사용
위의 코드를 참고하여 'app-header' 컴포넌트를 만들어 보겠습니다.
```js
Vue.component('app-header', {
  template: '<h1>Header Component</h1>'
});
```

생성된 컴포넌트를 아래와 같이 컴포넌트 태그를 추가하여 사용합니다.
```js
<div id="app">
  <app-header></app-header>
</div>
```

## 전역, 지역 컴포넌트
> 컴포넌트 생성에는 전역, 지역 두 가지 방법이 있습니다.
> 실제 서비스 구현시엔 전역은 사용하지 않습니다.

전역 컴포넌트 생성 방법입니다.
```js
// 전역 컴포넌트 등록
Vue.component('app-header', {
  template: '<h1>Header Component</h1>'
});
```

지역 컴포넌트 생성 방법입니다.
```js
var appHeader = {
  template: '<h1>Header Component</h1>'
}

new Vue({
  components: {
    'app-header': appHeader
  }
})
```