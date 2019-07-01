
# Instance  

인스턴스는 뷰로 개발할때 필수 생성 코드입니다.

## 인스턴스 생성 
인스턴스는 아래와 같이 생성 가능합니다.
```js
new Vue()
```

인스턴스는 아래와 같이 사용 가능합니다.
```js
<div id="app">
    <h1>인스턴스</h1>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el:'#app', 
    })
</script>
```
>라이브서버로 확인해서 vue에서 root가 생성된걸 확인.
>root가 있다는건 인스턴스가 생성 되었다는 의미입니다.
  
## 인스턴스 속성
```
new Vue({
    el:,
    template:,
    data:,
    methods:,
    created:,
    watch:,
})
```
- el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)
- template : 화면에 표시할 요소 (HTML, CSS 등)
- data : 뷰의 반응성(Reactivity)가 반영된 데이터 속성
- methods : 화면의 동작과 이벤트 로직을 제어하는 메서드
- created : 뷰의 라이프 사이클과 관련된 속성
- watch : data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

## JS vs Vue.js 인스턴스 생성 비교

### 기존 자바스크립트

생성자 함수를 사용하여 인스턴스를 생성합니다.

```js

> function  Person(name, job){
  	this.name  =  name;
	this.job  =  job;
 }

> var  p  =  new  Person('홍길동',  '직장인')

> p
► Person{name:"홍길동", job:"직장인"}

```
### vue.js 방식
생성자 함수를 이용하여 logText 함수를 미리 정의해 놓습니다.

```js
> function Vue(){
    	this.logText = function(){
	    	console.log('hello vue');
    	}
  }

> var vm = new Vue();

> vm.logText(); 
► hello vue

```
> api,  해당 컴포넌트의 속석들을 미리 정의하고 필요시 가져다 사용 가능합니다.
