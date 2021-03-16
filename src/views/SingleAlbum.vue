<template>
  <div class="SingleAlbum">
    <div
      class="SingleAlbum__blur"
      :style="{ 'background-image': 'url(' + albumData.art + ')' }"
    ></div>
    <div class="A"></div>
    {{ albumData }}
  </div>
</template>
<script>
import _ from "lodash";
import { mapGetters } from "vuex";

export default {
  computed: {
    albumData() {
      return _.find(
        this.getDataSet.mapDataSet,
        (o) => o.id === this.$route.params.id
      );
    },
    ...mapGetters(["getDataSet"]),
  },
};
</script>
<style lang="scss" scoped>
.SingleAlbum {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  &__blur {
    position: absolute;
    top: 50%;
    height: 100%;
    width: 100%;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    filter: blur(10px);
    transform:  translate(0%,-50%) scale(1.1);
  }
}
</style>