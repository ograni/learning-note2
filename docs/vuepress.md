
# VuePress 설정

  

학습노트 작성하기 위해 Vuepress 사용법 익히기.

  

## 사이트 배포하기 절차

  

1. 깃허브 계정 생성

2. 깃허브 새 리포지토리 생성 (.gitignore 생성)

3. 생성한 리포지토리 클론

  

```

git clone '새 리포지토리 클론 주소'

```

  

4. 클론한 프로젝트 위치로 이동

5. 프로젝트에서 `docs` 폴더 생성

6. npm 설치
```

npm init -y

```

>npm init 명령어를 사용하면 프로젝트에 대한 여러 가지 정보를 입력하도록 요구받는다. 이때 입력된 정보를 바탕으로 npm은 package.json 파일을 생성한다. 일단 기본 설정값으로 생성된 package.json 파일을 수정하는 방법이 더 편리할 수 있으므로 npm init 명령어에 `--yes` 또는 `-y` 옵션을 추가한다. 그러면 기본 설정값으로 package.json 파일을 생성한다.

7. vuepress 설치
````

npm install -D vuepress

````

8. `package.json`  파일의 내용을 아래와 같이 수정
```json
{
  ...
  "scripts": {
    "doc": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  ...
}
```
9. `docs` 폴더에서 `README.md` 파일 생성하고 아래 내용을 임시로 추가
```
# Vue.js 정복 캠프 학습 노트!!
```
10. 클론된 프로젝트 폴더 밑에 deploy.sh 파일을 추가하고 아래 내용을 삽입.
```
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f <뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소> master:gh-pages

cd -
```
> '뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소' 꼭 변경

11.  프로젝트 폴더의 위치에서  `sh deploy.sh`를 실행하여 사이트 배포

> `sh`라는 명령어는 윈도우 기본 명령어 프롬프트 창에서 먹지 않습니다. 
> 따라서  [cmder](https://cmder.net/)이라는 콘솔 프로그램을 설치해서 실행하거나 git bash와 같은 별도의 콘솔창 필요.