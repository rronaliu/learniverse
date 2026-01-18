<template>
  <div :class="['orb-ring', size]" />
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: "medium",
    validator: value => ["small", "medium"].includes(value)
  }
});
</script>

<style scoped>
.orb-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffffff08;
  border: 2px solid #d3d0d033;
  z-index: 0;
  pointer-events: none;
}

.orb-ring.medium {
  width: 846px;
  height: 846px;
  opacity: 0.3;
}

.orb-ring.small {
  width: 460px;
  height: 460px;
  opacity: 0.6;
}
</style>
