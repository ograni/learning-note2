# vue-cli

Vue CLI 는 커맨드라인 인터페이스 기반의 Vue 프로젝트 생성 도구입니다.

Vue 애플리케이션을 개발할 때 기본적인 폴더 구조, 라이브러리 등을 설정해줍다.
 

## 설치
```sh
npm i -g @vue/cli // vue-cli 3.x
npm i -g vue-cli // vue-cli 2.x
```

 
## 프로젝트 생성

프로젝트를 생성할때 2.x 버전에서는 eslint, unit test, night watch 등등 낯선것들에 대해 선택을 해야만 했는데, 3.x 에서는 default (babel, eslint) 를 선택하면 가장 기본적인 설정으로 프로젝트가 생성됩니다.
```sh
vue create '프로젝트 명' // vue-cli 3.X
vue init webpack '프로젝트 명' // vue-cli 2.X
```
:::tip
옵션은 나중에 언제든지 추가할 수 있습니다.
:::
  

## 로컬 서버 실행
```sh
npm run serve // vue-cli 3.x
npm run dev // vue-cli 2.x
```

  
## node_modules

vue-cli 3.x - vue create를 통한 프로젝트 생성 단계에서 함께 설치됩니다.
  
vue-cli 2.x - 프로젝트 생성 후 npm install을 통해 설치합니다.
    

 ## 웹팩 설정 파일
```
vue-cli 3.x 노출 X
vue-cli 2.x 노출 O
```    

2.x에서는 webpack.config.js 파일이 루트 디렉토리에 있습니다.

3.x에서는 없기 때문에 설정을 추가하기 위해서는 루트 디렉토리에 vue.config.js 파일을 설정하고 내용을 작성해줍니다.

[vue-cli 3.x vue.config.js](https://cli.vuejs.org/guide/webpack.html#simple-configuration)
```sh
vue.config.js
	module.exports = {
		// 여기에 옵션을 작성해준다.
}
```
  

## 프로젝트 구성

```
vue-cli 3.x 플러그인 기반으로 기능 추가
vue-cli 2.x github의 템플릿 다운로드
```
    
2.x 에서는 simple, webpack, webpack-simple, pwa 등 템플릿 리스트 중 하나를 선택해서 프로젝트를 구성했다면, 3.x 에서는 프로젝트에 플러그인 기반으로 원하는 설정 추가합니다.

  

## ES6 이해도

```
vue-cli 3.x 필요 O
vue-cli 2.x 필요 X
```
:::tip
3.x 에서는 ES6 기본 문법 뿐만아니라 축약 문법 또한 알고 있어야 합니다.
:::