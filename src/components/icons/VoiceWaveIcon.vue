<template>
  <svg width="60" height="60" viewBox="0 0 273 278" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect class="bar bar-1" x="0" y="138.527" width="27.5059" height="136.525" rx="13.7529" fill="white"/>
    <rect class="bar bar-2" x="40.973" y="82.4219" width="27.5059" height="192.63" rx="13.7529" fill="white"/>
    <rect class="bar bar-3" x="81.9453" y="117.012" width="27.5059" height="158.04" rx="13.7529" fill="white"/>
    <rect class="bar bar-4" x="122.918" y="33.0078" width="27.5059" height="242.044" rx="13.7529" fill="white"/>
    <rect class="bar bar-5" x="163.891" y="138.527" width="27.5059" height="136.525" rx="13.7529" fill="white"/>
    <rect class="bar bar-6" x="204.863" y="75.0098" width="27.5059" height="200.042" rx="13.7529" fill="white"/>
    <rect class="bar bar-7" x="245.836" y="138.527" width="27.5059" height="136.525" rx="13.7529" fill="white"/>
  </svg>
</template>

<style scoped>
.bar {
  animation: wave 1.5s ease-in-out infinite;
  transform-origin: center;
}

.bar-1 { animation-delay: 0s; }
.bar-2 { animation-delay: 0.1s; }
.bar-3 { animation-delay: 0.2s; }
.bar-4 { animation-delay: 0.3s; }
.bar-5 { animation-delay: 0.4s; }
.bar-6 { animation-delay: 0.5s; }
.bar-7 { animation-delay: 0.6s; }

@keyframes wave {
  0%, 100% {
    transform: scaleY(1);
    opacity: 1;
  }
  50% {
    transform: scaleY(0.6);
    opacity: 0.7;
  }
}
</style>
