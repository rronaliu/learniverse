<template>
  <svg
    width="60"
    height="60"
    viewBox="0 0 273 278"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      class="bar bar-1"
      x="0"
      y="138.527"
      width="27.5059"
      height="136.525"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-2"
      x="40.973"
      y="82.4219"
      width="27.5059"
      height="192.63"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-3"
      x="81.9453"
      y="117.012"
      width="27.5059"
      height="158.04"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-4"
      x="122.918"
      y="33.0078"
      width="27.5059"
      height="242.044"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-5"
      x="163.891"
      y="138.527"
      width="27.5059"
      height="136.525"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-6"
      x="204.863"
      y="75.0098"
      width="27.5059"
      height="200.042"
      rx="13.7529"
      fill="white"
    />
    <rect
      class="bar bar-7"
      x="245.836"
      y="138.527"
      width="27.5059"
      height="136.525"
      rx="13.7529"
      fill="white"
    />
  </svg>
</template>

<style scoped>
.bar {
  transform-origin: bottom;
  animation: bounce infinite ease-in-out;
}

.bar-1 {
  animation-duration: 2.1s;
  animation-delay: 0.3s;
}
.bar-2 {
  animation-duration: 2.8s;
  animation-delay: 0s;
}
.bar-3 {
  animation-duration: 2.4s;
  animation-delay: 0.8s;
}
.bar-4 {
  animation-duration: 3.5s;
  animation-delay: 0.2s;
}
.bar-5 {
  animation-duration: 2.6s;
  animation-delay: 1.1s;
}
.bar-6 {
  animation-duration: 1.8s;
  animation-delay: 0.5s;
}
.bar-7 {
  animation-duration: 3.1s;
  animation-delay: 0.7s;
}

@keyframes bounce {
  0%,
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
  30% {
    transform: scaleY(0.4);
    opacity: 0.8;
  }
  60% {
    transform: scaleY(0.8);
  }
  80% {
    transform: scaleY(0.5);
  }
}
</style>
