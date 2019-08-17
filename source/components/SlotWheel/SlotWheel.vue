<template>
  <section
    class="SlotWheel"
    v-bind:class="{ 'SlotWheel--set': isSpinning === false, 'SlotWheel--tick': hasTicked === true }"
    v-bind:style="{ 'animation-duration': tickDuration + 'ms' }"
    @animationend="_clearTick"
  >
    <div class="SlotWheel__value">{{ displayValue }}</div>
    <h2 class="SlotWheel__name">{{ name }}</h2>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// TODO - imports
import ShuffleQueue from "/library/ShuffleQueue";
import randomIntFactory from "/library/randomIntFactory";

import config from "configuration/app.config.yml";

@Component({
  props: {
    name: String,
    options: Array
  }
})
export default class SlotWheel extends Vue {
  startingSlotVelocityMS = config.startingSlotVelocityMS;
  finalTickInterval = config.finalTickInterval;
  displayValue = "--";
  hasTicked = null;
  isSpinning = null;
  queue = new ShuffleQueue<string>(this.$props.options);
  randomFinalTickInterval = randomIntFactory(
    this.finalTickInterval.max,
    this.finalTickInterval.min
  );
  randomStartingVelocity = randomIntFactory(
    this.startingSlotVelocityMS.max,
    this.startingSlotVelocityMS.min
  );
  tickDuration = null;

  roll() {
    this.$set(this, "isSpinning", true);

    const startingVelocity = this.randomStartingVelocity();
    const finalTickInterval = this.randomFinalTickInterval();

    let nextTimeout = startingVelocity;

    return new Promise(resolve => {
      this._tick({ startingVelocity, finalTickInterval, nextTimeout }, resolve);
    });
  }

  _tick({ nextTimeout, startingVelocity, finalTickInterval }, resolve) {
    this.$set(this, "displayValue", this.$data.queue.pick());

    nextTimeout *= config.frictionCoeffecient;

    if (nextTimeout > finalTickInterval) {
      this.$set(this, "isSpinning", false);
      resolve();
    } else {
      this.$set(this, "tickDuration", nextTimeout / 2);
      this.$set(this, "hasTicked", true);

      setTimeout(this._tick, nextTimeout);
    }
  }

  _clearTick() {
    this.$set(this, "hasTicked", false);
  }
}
</script>

<style scoped>
.SlotWheel {
  height: 10em;
  border: 1px solid var(--black-color);
  padding: var(--vert-padding) var(--horiz-padding);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transition: background-color 350ms ease-out;

  will-change: background-color;
}

.SlotWheel--tick {
  animation-name: tick;
}

@keyframes tick {
  from {
    background-color: var(--tick-color);
  }
  to {
    background-color: transparent;
  }
}

.SlotWheel--tick > .SlotWheel__value {
  will-change: color;
}

.SlotWheel--set {
  background: var(--set-color);
}

.SlotWheel--set > .SlotWheel__value {
  color: var(--set-text-color);
}

.SlotWheel__value {
  text-align: center;
  font-size: var(--title-size);

  transition: color 350ms ease-out;
}

.SlotWheel__name {
  font-size: var(--footnote-size);
  text-transform: uppercase;

  color: var(--type-text-color);
}
</style>
