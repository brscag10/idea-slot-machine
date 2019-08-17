<template>
  <button
    class="SlotLever"
    @click="spin"
    :disabled="isSpinning"
  >{{ isSpinning ? "Spinning..." : "Spin!" }}</button>
</template>

<script lang="ts">
export default {
  props: {
    isSpinning: Boolean
  },
  methods: {
    spin() {
      this.$emit("spin");
    }
  }
};
</script>

<style scoped>
.SlotLever {
  font-size: var(--paragraph-size);
  padding: var(--vert-padding) var(--horiz-padding);

  color: var(--white-color);
  background: var(--black-color);

  cursor: pointer;
}

.SlotLever[disabled] {
  background: var(--gray-color);

  cursor: not-allowed;
}
</style>
