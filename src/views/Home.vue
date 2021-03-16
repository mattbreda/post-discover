<template>
  <div class="Home">
    <div class="Home__mosaic" v-if="mosaicList && mosaicList.length > 0">
      <img
        class="mosaic-element"
        v-for="path in mosaicList"
        :key="path"
        :src="path"
      />
      <div @click="showQuestions = !showQuestions">Explore</div>
      <StartingQuestions
        v-if="showQuestions"
        :questions="getDataSet.rootData.startQuestions"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import StartingQuestions from "@/components/StartingQuestions";
export default {
  data() {
    return {
      showQuestions: false,
    };
  },
  components: {
    StartingQuestions,
  },
  computed: {
    mosaicList() {
      return this.fetchingData
        ? null
        : this.getDataSet.mapDataSet.map((el) => el.art);
    },
    ...mapGetters(["getDataSet", "fetchingData"]),
  },
};
</script>
<style lang="scss" scoped>
.Home {
  height: 100vh;
  width: 100vw;
  &__mosaic {
    height: 100%;
    width: 100%;
    position: relative;
    .mosaic-element {
      height: calc(100% / 4);
    }
  }
}
</style>