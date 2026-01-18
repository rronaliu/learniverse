<template>
  <div class="interview-container">
    <div class="interview-content">
      <div class="progress-section">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: store.progress + '%' }"
          ></div>
        </div>
        <div class="progress-text">{{ store.progress }}% completed</div>
      </div>
      <div class="voice-interface">
        <div class="voice-orb">
          <div class="orb-ring medium"></div>
          <div class="orb-ring small"></div>
          <div class="orb-glow"></div>
          <div class="orb-core">
            <VoiceWaveIcon />
          </div>
        </div>
        <button
          class="btn-talk"
          @click="toggleRecording"
          :style="store.isFirstQuestion ? 'visibility: hidden' : ''"
          :class="{ recording: isListening }"
        >
          {{ isListening ? "Stop Recording" : "Talk To Answer" }}
        </button>
      </div>

      <div class="question-section">
        <div class="question-header">
          <transition name="fade-slide">
            <h2
              v-if="!store.isFirstQuestion && showQuestionNumber"
              class="question-number"
            >
              Question {{ store.currentQuestionIndex }}:
            </h2>
          </transition>
          <transition name="fade-slide">
            <h2 v-if="showQuestionText" class="question-text">
              {{ store.currentQuestion.question }}
            </h2>
          </transition>
        </div>

        <transition name="fade-slide">
          <div v-if="showAnswer">
            <div class="answer-box" v-if="!store.isFirstQuestion">
              <p>{{ displayAnswer }}</p>
            </div>

            <div class="navigation-buttons">
              <button
                v-if="store.isFirstQuestion"
                class="btn-nav btn-next btn-next--first"
                @click="store.nextQuestion"
              >
                <ChevronRightIcon />
                Continue
              </button>
              <button
                v-if="!store.isFirstQuestion"
                class="btn-nav btn-prev"
                @click="store.previousQuestion"
                :disabled="store.isFirstQuestion"
              >
                <ChevronLeftIcon />
                Previous
              </button>
              <button
                v-if="!store.isFirstQuestion && !store.isLastQuestion"
                class="btn-nav btn-next"
                @click="handleContinue"
              >
                Continue
                <ChevronRightIcon />
              </button>
              <button
                v-else-if="!store.isFirstQuestion"
                class="btn-nav btn-submit"
                @click="goToResults"
              >
                Submit
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { useSpeechRecognition } from "@vueuse/core";
import { useInterviewStore } from "../stores/interview";
import VoiceWaveIcon from "../components/icons/VoiceWaveIcon.vue";
import ChevronLeftIcon from "../components/icons/ChevronLeftIcon.vue";
import ChevronRightIcon from "../components/icons/ChevronRightIcon.vue";

const router = useRouter();
const store = useInterviewStore();

const showQuestionNumber = ref(false);
const showQuestionText = ref(false);
const showAnswer = ref(false);

const { isSupported, isListening, result, start, stop } = useSpeechRecognition({
  continuous: true,
  interimResults: true
});

const displayAnswer = computed(() => {
  if (isListening.value && result.value) {
    store.saveUserAnswer(store.currentQuestionIndex, result.value);
  }
  const question = store.getUserAnswer(store.currentQuestionIndex);
  if (question && question.answer) {
    return question.answer;
  }
  return store.currentQuestion.answer || "";
});

watch(
  () => store.currentQuestionIndex,
  () => {
    if (isListening.value) {
      stop();
    }
    resetAndShowSequentially();
  }
);

const toggleRecording = () => {
  if (!isSupported.value) {
    alert("Speech recognition is not supported in your browser.");
    return;
  }

  if (store.isFirstQuestion) {
    return;
  }

  if (isListening.value) {
    stop();
  } else {
    start();
  }
};

const resetAndShowSequentially = () => {
  showQuestionNumber.value = false;
  showQuestionText.value = false;
  showAnswer.value = false;

  setTimeout(() => {
    showQuestionNumber.value = true;
  }, 0);
  setTimeout(() => {
    showQuestionText.value = true;
  }, 500);
  setTimeout(() => {
    showAnswer.value = true;
  }, 1000);
};

watch(
  () => store.currentQuestionIndex,
  () => {
    resetAndShowSequentially();
  },
  { immediate: true }
);

const handleContinue = () => {
  if (isListening.value) {
    stop();
  }
  store.nextQuestion();
};

const goToResults = () => {
  if (isListening.value) {
    stop();
    if (result.value && !store.isFirstQuestion) {
      store.saveUserAnswer(store.currentQuestionIndex, result.value);
    }
  }
  router.push("/results");
};
</script>

<style scoped>
.interview-container {
  background: linear-gradient(135deg, #0f0f0f 50%, #6fb3b8 100%);
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
}

.interview-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.progress-section {
  position: relative;
  z-index: 10;
  margin-bottom: 40px;
  flex-shrink: 0;
}

.progress-bar {
  width: 100%;
  max-width: 744px;
  margin: 0 auto;
  height: 8px;
  background: #094d52;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #16a596 0%, #4dd4c5 100%);
  transition: width 0.5s ease;
  border-radius: 4px;
}

.progress-text {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.9;
}

.voice-interface {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  margin-left: 20%;
}

.voice-orb {
  position: relative;
  width: 188px;
  height: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orb-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(22, 165, 150, 0.4) 0%,
    transparent 70%
  );
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.orb-core {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #16a596 0%, #4dd4c5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px rgba(22, 165, 150, 0.6);
  z-index: 1;
}

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
  opacity: 30%;
}
.orb-ring.small {
  width: 460px;
  height: 460px;
  opacity: 60%;
}

.btn-talk {
  background: #ffffff;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255);
  color: #0f0f0f;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-talk:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-talk.recording {
  background: #ef4444;
  border-color: #ef4444;
  animation: pulse-red 1.5s ease-in-out infinite;
}

@keyframes pulse-red {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
}

.question-header h2 {
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 8px 0;
  line-height: 38px;
  width: 75%;
}

.answer-box {
  border-radius: 16px;
  padding: 24px 0;
  margin-bottom: 44px;
  width: 90%;
  margin-left: auto;
}

.answer-box p {
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  opacity: 0.95;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.btn-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-prev {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.btn-prev:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
}

.btn-prev:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.btn-next,
.btn-submit {
  background: #fef2f2;
  color: #292d35;
  padding: 8px 16px;
}

.btn-next--first {
  margin-top: 2rem;
}

.btn-next:hover,
.btn-submit:hover {
  background: #128e81;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .interview-content {
    padding: 32px 20px;
  }

  .voice-interface {
    margin-left: 0;
    flex-direction: column;
    gap: 24px;
  }

  .voice-orb {
    width: 160px;
    height: 160px;
  }

  .orb-core {
    width: 100px;
    height: 100px;
  }

  .question-header h2 {
    font-size: 24px;
    line-height: 32px;
    width: 100%;
  }

  .answer-box {
    width: 100%;
    margin-left: 0;
  }

  .answer-box p {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .interview-container {
    height: auto;
    min-height: calc(100vh - 120px);
  }

  .interview-content {
    padding: 24px 16px;
  }

  .progress-section {
    margin-bottom: 32px;
  }

  .progress-text {
    font-size: 14px;
  }

  .voice-interface {
    margin-bottom: 32px;
  }

  .voice-orb {
    width: 140px;
    height: 140px;
  }

  .orb-core {
    width: 90px;
    height: 90px;
  }

  .btn-talk {
    padding: 12px 24px;
    font-size: 14px;
  }

  .question-header h2 {
    font-size: 20px;
    line-height: 28px;
  }

  .answer-box {
    padding: 16px 0;
    margin-bottom: 32px;
  }

  .answer-box p {
    font-size: 15px;
    line-height: 1.6;
  }

  .navigation-buttons {
    flex-wrap: wrap;
    gap: 12px;
  }

  .btn-nav {
    padding: 12px 20px;
    font-size: 14px;
  }

  .btn-prev {
    order: 1;
  }

  .btn-next,
  .btn-submit {
    order: 2;
    flex: 1;
  }
}
</style>
