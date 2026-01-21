<script lang="ts" setup>
import { ref, computed } from "vue";
import { paintings } from "@data/app-data";
import { loadImg } from "@composables/app";
import { useRoute, useRouter } from "vue-router";
import { useElementSize } from "@vueuse/core";
import FullSizeImage from "./FullSizeImage.vue";
import PictureItem from "./PictureItem.vue";
import SlideFooter from "./SlideFooter.vue";

const router = useRouter();
const currentRoute = useRoute();

const show = ref(false);
const el = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);

const stopSlideshow = ref(false);

const { height } = useElementSize(title);
const { width } = useElementSize(el);

// 영어 이름을 한국어 이름으로 매핑
const nameMapping: Record<string, string> = {
  "Starry Night": "별이 빛나는 밤",
  "The Storm on the Sea of Galilee": "갈릴리 바다의 폭풍",
  "Lady with an Ermine": "담비를 안은 여인",
  "The Boy in the Red Vest": "빨간 조끼를 입은 소년",
  "Girl with a Pearl Earring": "진주 귀걸이를 한 소녀",
  "The Great Wave off Kanagawa": "가나가와 해변의 큰 파도",
  "The Night Café": "밤의 카페",
  "Arnolfini Portrait": "아르놀피니 부부의 초상",
  "Guernica": "게르니카",
  "Van Gogh self-portrait": "반 고흐 자화상",
  "Mona Lisa": "모나리자",
  "Penitent Magdalene": "회개하는 막달레나",
  "The Sleeping Gypsy": "잠자는 집시",
  "The Basket of Apples": "사과 바구니",
  "The Swing": "그네",
};

const decodedName = computed(() => {
  const name = currentRoute.params.name;
  if (typeof name === 'string') {
    const decoded = decodeURIComponent(name);
    // 영어 이름이면 한국어 이름으로 변환
    return nameMapping[decoded] || decoded;
  }
  return name;
});

const item = computed(() =>
  paintings.find((x) => x.name === decodedName.value)
);
const itemIndex = computed(() =>
  paintings.findIndex((x) => x.name === decodedName.value)
);
const isWider = computed(() => width.value > 1349);
const isSmaller = computed(() => width.value < 656);

const hideScroll = () => (document.body.style.overflow = "hidden");
const showScroll = () => (document.body.style.overflow = "auto");

const changeSlide = (index: number) => {
  show.value = false;
  stopSlideshow.value = false;
  showScroll();
  if (itemIndex.value < 14 || index === 0) {
    const painting =
      index === 0
        ? paintings[itemIndex.value - 1]
        : paintings[itemIndex.value + 1];
    router.push({
      name: "Painting",
      params: { name: painting.name },
    });
  } else {
    router.push({
      name: "Home",
    });
  }
};
</script>

<template>
  <div class="main-container" style="padding-bottom: 0">
    <header>
      <LogoIcon />
      <button class="btn btn1" @click="stopSlideshow = true">
        Stop slideshow
      </button>
    </header>
    <section class="slide" ref="el">
      <div class="left-container">
        <div class="picture-container">
          <PictureItem
            :name="item?.name"
            :imageLarge="item?.images?.large"
            :imageSmall="item?.images?.small"
            @open-full-size-image="
              show = true;
              hideScroll();
            "
          />
          <div class="picture-title" :class="item?.class" ref="title">
            <h1>{{ item?.name }}</h1>
            <p class="subhead">{{ item?.artist }}</p>
          </div>
        </div>
        <img
          :src="loadImg(item?.images?.artist)"
          :alt="`${item?.artist} picture`"
          :width="isSmaller ? '64' : '128'"
          :height="isSmaller ? '64' : '128'"
          class="h-fit"
          :style="
            isSmaller
              ? 'margin-top: 0'
              : !isWider
              ? `margin-top: ${height}px`
              : 'margin-top: auto'
          "
        />
      </div>
      <div class="right-container">
        <div class="description-container">
          <div class="display-text">{{ item?.year }}</div>
          <p>{{ item?.description }}</p>
        </div>
        <a class="btn btn2" target="_blank" :href="item?.source"
          >Go to source</a
        >
      </div>
    </section>
  </div>
  <SlideFooter
    :name="item?.name"
    :artist="item?.artist"
    :stop="stopSlideshow"
    @change-slide="changeSlide"
  />
  <FullSizeImage
    :name="item?.name"
    :show="show"
    :image="item?.images?.gallery"
    @close-full-size-image="
      show = false;
      showScroll();
    "
  />
</template>
