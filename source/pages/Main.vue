<template>
  <article class="Main">
    <slot-machine :slots="slots"></slot-machine>
    <slot-lever :spinning="isSpinning" @click="spin"></slot-lever>
  </article>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import randomIntFactory from "library/random-int-factory";
import SlotWheel from "components/SlotWheel.vue";

import config from "configuration/app.config.yml";

@Component
export default class Main extends Vue {
  isSpinning = false;
  slots = config.slots;

  async spin(): Promise<void> {
    this.$set(this, "isSpinning", true);

    // TODO - handle ref type
    await this.$refs.slotMachine.roll();

    this.$set(this, "isSpinning", false);
  }
}
</script>


<style scoped>
.Main {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
}
</style>
