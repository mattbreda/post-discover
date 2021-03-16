<template>
  <div class="StartingQuestions">
    <div
      v-for="question in questions"
      :key="question.question"
      @click="clickOnQuestion(question.id)"
    >
      {{ question.question }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questions: { type: Array },
  },
  methods: {
    clickOnQuestion(val) {
      this.$router.push({
        name: "album",
        params: { id: val },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.StartingQuestions {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  color: white;
}
</style>