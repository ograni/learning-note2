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
> 지역 컴포넌트를 사용하면 vue개발자 도구에서 구조를 쉽게 파악 할 수 있습니다.
> 전역 컴포넌트는 api나 플러그인 같이 전역으로 사용될때만 사용합니다.
> git test

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