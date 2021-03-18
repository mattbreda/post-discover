<template>
  <div class="SingleAlbum">
    <div
      class="SingleAlbum__blurredbg"
      :style="{
        backgroundImage: 'url(' + albumData.art + ')',
      }"
    ></div>
    <button class="back" @click="goBack">go back</button>
    <!-- <img :src="'/assets/artworks/' + albumData.artwork" /> -->
    <div class="SingleAlbum__info">
      <img class="artwork" :src="albumData.art" />
      <span class="artist">{{ albumData.artist }}</span>
      <span class="album">{{ albumData.album }}</span>
      <span
        v-if="albumData.questions.length > 0"
        class="SingleAlbum__button"
        @click="toggelModal"
        >I want something...</span
      >
    </div>
    <!-- <div
      class="SingleAlbum__spotify"
      v-if="albumData.spotify"
      @mouseover="iframeWidth = 300"
      @mouseleave="iframeWidth = 80"
    >
      <iframe
        :src="albumData.spotify"
        :width="iframeWidth"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        class="spotify-iframe"
      ></iframe>
    </div> -->
    <transition name="fade" mode="out-in">
      <div class="SingleAlbum__more" v-if="modalOpen">
        <div class="SingleAlbum__more__bg"></div>
        <div class="SingleAlbum__more__close" @click="toggelModal">X</div>
        <div class="SingleAlbum__more__options">
          <span
            class="option"
            v-for="el in albumData.questions"
            :key="el.text"
            @click="goTo(el.id)"
            v-html="el.text"
          ></span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import _ from "lodash";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      iframeWidth: 80,
      modalOpen: false,
    };
  },
  computed: {
    albumData() {
      return _.find(
        this.getDataSet.mapDataSet,
        (o) => o.id === this.$route.params.id
      );
    },
    ...mapGetters(["getDataSet", "getLastAlbum"]),
  },
  methods: {
    goTo(val) {
      this.modalOpen ? (this.modalOpen = false) : (this.modalOpen = true);
      this.setLastAlbum(this.$route.params.id);
      this.$router.push({
        name: "album",
        params: { id: val },
      });
    },
    goBack() {
      this.$router.push({
        name: "album",
        params: { id: this.albumData.parent },
      });
    },
    toggelModal() {
      return (this.modalOpen = !this.modalOpen);
    },
    ...mapActions(["setLastAlbum"]),
  },
};
</script>
<style lang="scss" scoped>
.SingleAlbum {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .back {
    border-radius: 18px;
    border: 1px solid rgb(240, 255, 240);
    color: honeydew;
    font-weight: 500;
    position: absolute;
    top: 20px;
    left: 20px;
    height: 38px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    cursor: pointer;
    z-index: 110;
    background-color: transparent;
    &:hover {
      background-color: rgba(240, 255, 240, 0.85);
      border: 1px solid transparent;
      color: rgba(0, 0, 0, 0.85);
      transition: all 0.5s;
    }
  }
  &__blurredbg {
    height: 100%;
    width: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: blur(10px);
    transform: scale(1.1);
  }
  &__button {
    padding: 10px;
    border-radius: 18px;
    border: 1px solid rgb(240, 255, 240);
    color: honeydew;
    font-weight: 300;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      background-color: rgba(240, 255, 240, 0.7);
      border: 1px solid transparent;
      color: rgba(0, 0, 0, 0.8);
      transition: all 0.5s;
    }
  }
  &__info {
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    .artist {
      font-size: 2rem;
      color: honeydew;
      font-weight: 300;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    .album {
      font-size: 1.5rem;
      color: honeydew;
      font-weight: 300;
    }
    .artwork {
      height: 50%;
      -webkit-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 1);
      -moz-box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 1);
      box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 1);
    }
  }
  &__more {
    width: 100%;
    height: 100%;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    justify-content: center;
    top: 0;
    left: 0;
    &__bg {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.85);
    }
    &__close {
      border-radius: 50%;
      border: 1px solid rgb(240, 255, 240);
      color: honeydew;
      font-weight: 500;
      position: absolute;
      top: 20px;
      right: 20px;
      height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        background-color: rgba(240, 255, 240, 0.85);
        border: 1px solid transparent;
        color: rgba(0, 0, 0, 0.85);
        transition: all 0.5s;
      }
    }
    &__intro {
      color: honeydew;
      font-weight: 300;
    }
    &__options {
      display: flex;
      flex-direction: column;
      z-index: 300;
      align-items: center;
      justify-content: center;
      .option {
        padding: 10px;
        border-radius: 18px;
        border: 1px solid rgb(240, 255, 240);
        color: honeydew;
        font-weight: 500;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
          background-color: rgba(240, 255, 240, 0.85);
          border: 1px solid transparent;
          color: rgba(0, 0, 0, 0.85);
          transition: all 0.5s;
        }
      }
    }
  }
  &__spotify {
    position: absolute;
    z-index: 100;
    top: 10px;
    right: 10px;
  }
  .spotify-iframe {
    transition: width 0.5s;
  }
}
</style>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>