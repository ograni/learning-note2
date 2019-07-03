# axios

뷰에서 권고하는 HTTP 통신 라이브러리.

## 엑시오스 설치
엑시오스를 설치하는 방법은 두가지가 있습니다.

### CDN 방식
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
### NPM 방식
```sh
npm install axios
```

## 엑시오스 사용방법

라이브러리를 설치하고 나면 axios라는 변수에 접근할 수 있게 됩니다. 

axios 변수를 이용하여 아래와 같이 HTTP GET 요청을 날리는 코드를 작성합니다.

```html
<div id="app">
    <button v-on:click="fetchUser">get user</button>
    <div>{{user}}</div>
</div>
```
```js
new Vue({
    el:'#app',
    data:{
        user:{}
    },
    methods:{
        fetchUser:function(){
            console.log('호출전',this);
            var vm = this;
            var url ='https://jsonplaceholder.typicode.com/todos/1'
            axios
                .get(url)
                .then(function(response){
                    //데이터 호출에 성공했을 때
                    console.log(response.data);
                    console.log('호출후',this)
                    vm.user=response.data
                    
                })
                .catch(function(error){
                    //데이터 호출에 실패했을때
                    console.log(error)
                })
        },
    },
});
```
get user 버튼을 클릭했을때 지정된 사용자 정보를 가져옵니다.

호출전, 호출후 this는 서로 다릅니다. 같은 this를 사용하기 위해 this를 변수로 담아서 사용합니다.

