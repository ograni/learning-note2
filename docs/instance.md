
# Instance  

인스턴스는 뷰로 개발할때 필수 생성 코드입니다.

## 인스턴스 생성 
```js
new Vue()
```

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
  

## JS vs Vue.js 인스턴스 생성 비교

### 기존 자바스크립트

> 생성자 함수를 사용하여 인스턴스를 생성합니다.

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
 > 생성자 함수를 이용하여 logText 함수를 미리 정의해 놓습니다.
 > api,  해당 컴포넌트의 속석들을 미리 정의하고 필요시 가져다 사용 가능합니다.
