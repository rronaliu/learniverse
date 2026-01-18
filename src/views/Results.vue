<template>
  <div class="results-container">
    <div class="results-content">
      <div class="results-card">
        <h1>Your Score:</h1>

        <div class="score-section">
          <div class="score-badge">
            <span class="badge-icon">🟠</span>
            <span class="badge-text">You are almost ready!</span>
          </div>
        </div>

        <div class="advice-section">
          <h2>General Advice:</h2>
          <ol class="advice-list">
            <li>Work on structuring your answers more clearly.</li>
            <li>Try to provide more specific examples from experience.</li>
            <li>Improve time management during problem-solving questions.</li>
            <li>Be more confident when explaining your thought process.</li>
          </ol>
        </div>

        <button class="btn-share" @click="handleShare">
          Share Results
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChevronRightIcon from "../components/icons/ChevronRightIcon.vue";

const handleShare = () => {
  console.log('Share results')
}
</script>

<style scoped>
.results-container {
  height: calc(100vh - 137px);
  background: linear-gradient(135deg, #1a1a1a 0%, #2d4a4a 100%);
  color: white;
  overflow-y: auto;
}

.results-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.results-card {
  width: 100%;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 48px 0;
}

.score-section {
  margin-bottom: 64px;
}

.score-badge {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 28px;
  font-weight: 600;
}

.badge-icon {
  font-size: 32px;
}

.advice-section {
  margin-bottom: 48px;
}

.advice-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 32px 0;
}

.advice-list {
  list-style: none;
  counter-reset: advice-counter;
  padding: 0;
  margin: 0;
}

.advice-list li {
  counter-increment: advice-counter;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 16px;
  padding-left: 40px;
  position: relative;
}

.advice-list li::before {
  content: counter(advice-counter) ".";
  position: absolute;
  left: 0;
  font-weight: 600;
}

.btn-share {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  color: #1a1a1a;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-share:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .results-content {
    padding: 48px 16px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  .score-section {
    margin-bottom: 48px;
  }

  .score-badge {
    font-size: 22px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .badge-icon {
    font-size: 48px;
  }

  .advice-section {
    margin-bottom: 32px;
  }

  .advice-section h2 {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .advice-list li {
    font-size: 16px;
    padding-left: 32px;
    margin-bottom: 12px;
  }

  .btn-share {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
    font-size: 16px;
  }
}
</style>
