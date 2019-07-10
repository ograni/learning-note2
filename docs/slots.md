# slots.md

슬롯은 컴포넌트의 재사용성을 높혀주는 기능입니다.

특정 컴포넌트에 등록한 하위 컴포넌트의 마크업을 확장하거나 재정의가 가능합니다.

![샘플이미지](/learning-note2/slots.jpg "슬롯샘플이미지")

> 위 샘플 이미지를 slots으로 구현하는 예제를 살펴보겠습니다.

## slots 컴포넌트 구현 - 하위컴포넌트
```js
<template>
  <div>
    // 이미지 영역
    <div>
      <slot name="image"></slot>
    </div>
    // 텍스트 영역
    <div>
      <h4>
        <slot name="heading"></slot>
      </h4>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
```

## 상위컴포넌트 구현

```js
<template>
  <div>
    // 포토카드 1 
    <div>
      <photo-card>
        <img slot="image" src="{이미지1}">
        <template slot="heading">
          Slot Card 1
        </template>
        <p>Slot 1 text</p>
      </photo-card>
    </div>

    // 포토카드 2
    <div>
      <photo-card>
        <img slot="image" src="{이미지2}">
        <template slot="heading">
          Slot Card 2
        </template>
        <p>Slot 2 text</p>
      </photo-card>
    </div>
  </div>
</template>
<script>
    import PhotoCard from '{ 하위컴포넌트 경로명 }';

    export default {
        components: {
            PhotoCard
        },
    }
</script>
```