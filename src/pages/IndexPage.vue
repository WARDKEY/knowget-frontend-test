<!-- src/pages/IndexPage.vue -->
<template>
  <q-page class="main-page" :style="mainPageStyle">
    <div class="content-container">
      <div class="text-content">
        <h1 class="main-title">
          노숙인<br />
          통합 일자리<br />
          지식관리시스템
        </h1>
        <br />
        <br />
        <p class="main-subtitle">
          함께가면 멀리갈 수 있습니다.<br />
          모두의 일상을 지키는 첫 걸음,<br />
          너겟이 함께합니다.
        </p>
      </div>
      <div class="video-container">
        <video
          class="main-video"
          autoplay
          loop
          muted
          playsinline
          src="icons/mainhands.mp4"
        />
      </div>
    </div>
  </q-page>
</template>
<script setup>
const mainPageStyle = {
  background: "url('icons/main-background.png') no-repeat center center",
  backgroundSize: 'cover',
};
defineOptions({
  name: 'IndexPage',
});
</script>
<style scoped>
.main-page {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.content-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  color: white;
  z-index: 1;
}
.text-content {
  width: 40%;
}
.main-title {
  font-size: 4rem;
  line-height: 1.2;
  font-family: 'Noto Serif KR', serif;
  text-align: left;
  margin: 0;
}
.main-subtitle {
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: 'Noto Serif KR', serif;
  margin-top: 20px;
}
.video-container {
  width: 50%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  border-radius: 10px;
}
</style>
