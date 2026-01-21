<script lang="ts" setup>
import { paintings } from "@data/app-data";
import { useRouter } from "vue-router";
import GalleryImage from "./GalleryImage.vue";

const router = useRouter();

const startSlideShow = () => {
  router.push({ name: "Painting", params: { name: paintings[0].name } });
};

const handlePaintingClick = (name: string) => {
  router.push({ name: "Painting", params: { name } });
};
</script>

<template>
  <main class="main-container">
    <header>
      <LogoIcon />
      <button class="btn btn1" @click="startSlideShow">Start slideshow</button>
    </header>
    <section class="gallery mt-6 sm:mt-10">
      <GalleryImage
        v-for="(painting, index) in paintings"
        :key="index"
        :src="painting?.images?.thumbnail"
        :alt="painting.name"
        :title="painting.name"
        :artist="painting.artist"
        @click="handlePaintingClick(painting.name)"
      />
    </section>
    <footer>
      <div class="text-center mt-4">
        <span class="font-semibold text-black">
          &copy;CodeBridgeAI
        </span>
      </div>
    </footer>
  </main>
</template>
