<template>
  <div class="results-container">
    <div class="results-content">
      <div class="results-card">
        <h1>Your Score:</h1>

        <div class="score-section">
          <div class="score-badge">
            <span class="badge-icon"></span>
            <span class="badge-text">You are almost ready!</span>
          </div>
        </div>
        <OrbRing size="medium" />
        <OrbRing size="small" />
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
          <ArrowUpRight />
        </button>
      </div>
    </div>

    <Modal
      :show="showModal"
      title="Your Interview Answers"
      confirm-text="Close"
      @close="toggleModal"
      @confirm="toggleModal"
    >
      <div class="answers-list">
        <div
          v-for="question in answeredQuestions"
          :key="question.id"
          class="answer-item"
        >
          <h4>Question {{ question.id }}:</h4>
          <p class="question-text">{{ question.question }}</p>
          <p class="user-answer">{{ question.answer }}</p>
        </div>
        <p v-if="answeredQuestions.length === 0" class="no-answers">
          No answers recorded yet.
        </p>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useInterviewStore } from "../stores/interview";
import Modal from "../components/Modal.vue";
import ArrowUpRight from "../components/icons/ArrowUpRight.vue";
import OrbRing from "../components/OrbRing.vue";

const store = useInterviewStore();
const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleShare = () => {
  toggleModal();
};

const answeredQuestions = computed(() => {
  return store.questions.filter(q => q.id !== 0 && q.answer);
});
</script>

<style scoped>
.results-container {
  height: calc(100vh - 120px);
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
  width: 15.81px;
  height: 15.81px;
  border-radius: 50%;
  background-color: #feac4e;
  box-shadow: 0px 0px 12.7px 0px #f28c4d;
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
  font-size: 24px;
  line-height: 32px;
  padding-left: 40px;
  position: relative;
}

.advice-list li::before {
  content: counter(advice-counter) ".";
  position: absolute;
  left: 0;
  font-weight: 400;
}

.btn-share {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6rem;
  background: white;
  color: #1a1a1a;
  border: none;
  padding: 8px 16px;
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

.answers-list {
  max-height: 400px;
  overflow-y: auto;
}

.answer-item {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e0e0e0;
}

.answer-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.answer-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.question-text {
  font-size: 14px;
  color: #666;
  margin: 0 0 12px 0;
  font-style: italic;
}

.user-answer {
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.no-answers {
  text-align: center;
  color: #999;
  font-size: 16px;
  padding: 20px 0;
  margin: 0;
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
