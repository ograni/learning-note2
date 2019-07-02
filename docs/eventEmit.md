# event emit 속성

이벤트 발생은 컴포넌트의 통신 방법 중 하위 컴포넌트에서 상위 컴포넌트로 통신하는 방식입니다.

## 이벤트 발생 코드 형식

하위 컴포넌트 메서드나 라이프 사이클 훅과 같은 곳에 아래와 같이 코드를 추가합니다.

```js
// 하위 컴포넌트의 내용
this.$emit('이벤트 명');
```

해당 이벤트를 수신하기 위해 상위 컴포넌트의 템플릿에 아래와 같이 구현합니다.

```js
<!-- 상위 컴포넌트의 템플릿 -->
<div id="app">
  <child-component v-on:이벤트 명="상위 컴포넌트의 실행할 메서드 명 또는 연산"></child-component>
</div>
```

## 이벤트 코드 예시 

```html
<div id="app">
    <app-header v-bind:propsdata="str"></app-header>
    <app-content v-on:modify="changeStr"></app-content>        
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    Vue.component('app-content', {
        template:'<div>content <button v-on:click="clickEvent">click me</button></div>',
        methods:{
            clickEvent(){
                console.log('clicked');
                this.$emit('modify');
            }
        },
    });
    new Vue({
        el: "#app",
        data:{
            str : 'homerun'
        },
        components:{
            'app-header' : {
                props: ['propsdata'],
                template:'<h1>{{ propsdata }}</h1>'
            }
        },
        methods:{
            changeStr(){
                this.str = 'hi??'
            }
        }
    })
</script>
```

