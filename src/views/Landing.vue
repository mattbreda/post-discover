<template>
<div class="Landing">
    <h1>Landing  fetchingData:{{fetchingData}}</h1>

    <button  @click="$router.push({ name: 'home' })">Enter</button>
</div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
    ...mapGetters(["fetchingData"])
  },
}
</script>
<style lang="scss" scoped>

</style>