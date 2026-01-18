<template>
  <div class="setup-container">
    <div class="sidebar">
      <div class="sidebar-header">
        <h3>Set up your Job Interview Prep to start practicing smarter</h3>
        <div class="time-badge">
          <ClockIcon />
          Less then 3 min
        </div>
      </div>

      <div class="steps">
        <div class="step completed">
          <div class="step-icon">✓</div>
          <div class="step-content">
            <h4>Paste your job posting link</h4>
            <p>We'll extract key information about the role and company.</p>
          </div>
        </div>

        <div class="step completed">
          <div class="step-icon">✓</div>
          <div class="step-content">
            <h4>Set your focus areas</h4>
            <p>
              Choose what you'd like to practice, soft skills, technical, or
              tricky questions.
            </p>
          </div>
        </div>

        <div class="step completed">
          <div class="step-icon">✓</div>
          <div class="step-content">
            <h4>Get your interview scenarios</h4>
            <p>
              We'll generate realistic practice interviews tailored to the
              position.
            </p>
          </div>
        </div>

        <div class="step">
          <div class="step-icon">✓</div>
          <div class="step-content">
            <h4>Start your first session</h4>
            <p>
              Run the scenario, get instant feedback, and track your progress.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="content-wrapper">
        <h1>Prepare for your next job interview with confidence</h1>
        <p class="subtitle">
          Paste a public job posting link below and we'll create personalized
          interview scenarios based on the role, helping you practice, get
          feedback, and track your progress over time.
        </p>
        <p class="note">
          If we can't open the link you shared,
          <strong
            >you'll be asked to copy and paste the job description
            manually</strong
          >
          so we can continue without interruption.
        </p>

        <div class="form-section">
          <label>Enter a publicly available job link to get started</label>
          <div class="input-wrapper">
            <LinkIcon />
            <input
              type="text"
              placeholder="Paste link here"
              class="job-link-input"
            />
          </div>

          <button class="btn-generate" @click="startInterview">
            Generate Interview Scenarios
          </button>
        </div>
      </div>
    </div>

    <Modal
      :show="store.showModal"
      title="Missing Data"
      confirm-text="Yes Continue"
      @close="store.toggleModal"
      @confirm="handleModalConfirm"
    >
      <p>
        We couldn't retrieve the data from the link you shared. Could you please
        <strong>copy and paste the job description text instead?</strong>
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useInterviewStore } from "../stores/interview";
import Modal from "../components/Modal.vue";
import ClockIcon from "../components/icons/ClockIcon.vue";
import LinkIcon from "../components/icons/LinkIcon.vue";

const router = useRouter();
const store = useInterviewStore();

const startInterview = () => {
  store.toggleModal();
};

const handleModalConfirm = () => {
  store.toggleModal();
  store.resetInterview();
  router.push("/interview");
};
</script>

<style scoped>
.setup-container {
  display: flex;
  height: calc(100vh - 137px);
}

.sidebar {
  width: 30%;
  background: #f9f9f9;
  padding: 48px 32px;
  border-right: 1px solid #e0e0e0;
}

.sidebar-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  line-height: 1.4;
}

.time-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
}

.steps {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.step {
  display: flex;
  gap: 16px;
  position: relative;
  opacity: 0.4;
}

.step.completed {
  opacity: 1;
}

.step:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 18px;
  top: 40px;
  width: 2px;
  height: calc(100% + 16px);
  background: #e0e0e0;
}

.step-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1a1a1a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  z-index: 1;
}

.step-content h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.step-content p {
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 48px;
}

.content-wrapper {
  width: 70%;
}

h1 {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 24px 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.note {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 32px 0;
}

.form-section {
  background: white;
  width: 80%;
}

.form-section label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.input-wrapper svg {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.job-link-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.job-link-input:focus {
  outline: none;
  border-color: #16a596;
}

.btn-generate {
  width: 50%;
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-generate:hover {
  background: #333;
}

@media (max-width: 1024px) {
  .setup-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 32px 24px;
  }

  .main-content {
    padding: 32px 24px;
  }

  .content-wrapper {
    width: 100%;
  }

  .form-section {
    width: 100%;
  }

  h1 {
    font-size: 32px;
  }

  .subtitle {
    font-size: 18px;
  }

  .btn-generate {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .sidebar {
    padding: 24px 16px;
  }

  .sidebar-header h3 {
    font-size: 18px;
  }

  .time-badge {
    font-size: 14px;
    padding: 6px 12px;
  }

  .steps {
    margin-top: 32px;
    gap: 24px;
  }

  .step-content h4 {
    font-size: 14px;
  }

  .step-content p {
    font-size: 14px;
  }

  .main-content {
    padding: 24px 16px;
  }

  h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
  }

  .note {
    font-size: 14px;
  }
}
</style>
