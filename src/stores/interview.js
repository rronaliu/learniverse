import { defineStore } from "pinia";

export const useInterviewStore = defineStore("interview", {
  state: () => ({
    currentQuestionIndex: 0,
    questions: [
      {
        id: 0,
        question:
          "Hi there! Welcome to your Field Marketing Interview Prep session. Ready to get started?"
      },
      {
        id: 1,
        question:
          "Tell me about yourself and your experience in field marketing.",
        answer:
          "I've worked in field marketing for 5 years, managing local campaigns, brand activations, and events that connect directly with customers. I enjoy the mix of creativity and logistics, from planning and vendor coordination to engaging with audiences in person. My focus is on creating experiences that drive measurable leads and strengthen brand loyalty."
      },
      {
        id: 2,
        question:
          "How do you measure the success of a field marketing campaign?",
        answer:
          "Success depends on the campaign’s goal. For awareness campaigns, I track engagement, attendance, and social mentions. For lead generation, I look at lead volume, quality, and conversion rate. I also compare post-event sales data and customer feedback to measure overall impact."
      },
      {
        id: 3,
        question: "What's your approach to planning a field marketing event?",
        answer:
          "I start by defining the objective and target audience. Then I build a plan around location, timing, partnerships, and messaging. I coordinate closely with sales to ensure our field goals align with pipeline targets. Finally, I prepare detailed timelines, vendor checklists, and a feedback plan for post-event analysis."
      }
    ],
    showModal: false
  }),
  getters: {
    currentQuestion: state => state.questions[state.currentQuestionIndex],
    progress: state =>
      Math.round(
        (state.currentQuestionIndex / (state.questions.length - 1)) * 100
      ),
    isFirstQuestion: state => state.currentQuestionIndex === 0,
    isLastQuestion: state =>
      state.currentQuestionIndex === state.questions.length - 1
  },
  actions: {
    nextQuestion() {
      if (!this.isLastQuestion) {
        this.currentQuestionIndex++;
      }
    },
    previousQuestion() {
      if (!this.isFirstQuestion) {
        this.currentQuestionIndex--;
      }
    },
    resetInterview() {
      this.currentQuestionIndex = 0;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
});
