<template>
  <header class="navbar">
    <div class="top-nav">
      <button
        class="hamburger"
        @click="toggleMenu"
        :class="{ active: isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-pills" :class="{ open: isMenuOpen }">
        <button
          class="nav-pill"
          @click="handleClickPill"
          :class="{ active: activePill == 'For Learners' }"
        >
          For Learners
        </button>
        <button
          class="nav-pill"
          @click="handleClickPill"
          :class="{ active: activePill == 'For Trainers' }"
        >
          For Trainers
        </button>
        <button
          class="nav-pill"
          :class="{ active: activePill == 'For Companies' }"
          @click="handleClickPill"
        >
          For Companies
        </button>
        <button
          class="nav-pill"
          @click="handleClickPill"
          :class="{ active: activePill == 'For Universities' }"
        >
          For Universities
        </button>
      </div>
    </div>

    <div class="main-nav">
      <div class="main-nav--links">
        <div class="logo" @click="goHome">
          <img src="/logo.png" />
        </div>
        <div class="nav-links">
          <a href="#">Solutions <ChevronDownIcon /></a>
          <a href="#">Plans</a>
          <a href="#">Why Learniverse?</a>
        </div>
      </div>
      <button class="btn-login">Login</button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ChevronDownIcon from "./icons/ChevronDownIcon.vue";

const router = useRouter();
const isMenuOpen = ref(false);
const activePill = ref("For Companies");

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickPill = e => {
  activePill.value = e.target.innerText || "For Companies";
  isMenuOpen.value = false;
};

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.top-nav {
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px 42px;
  background: #031a1b;
  height: 52px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hamburger span {
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.nav-pills {
  display: flex;
  gap: 4px;
  padding: 4px 16px;
}

.nav-pill {
  padding: 2px 16px;
  border: 1px solid transparent;
  background: transparent;
  border-color: #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  font-weight: 500;
  line-height: 20px;
}

.nav-pill.active {
  background: transparent;
  background: white;
  color: #042224;
}

.nav-pill:hover:not(.active) {
  color: rgba(255, 255, 255, 0.662);
}

.main-nav {
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  height: 72px;
}

.main-nav--links {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
  margin-right: 2rem;
  cursor: pointer;
}

.nav-links {
  display: flex;
  vertical-align: middle;
  gap: 32px;
}

.nav-links a {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #16a596;
}

.nav-links a:first-child {
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
}

.nav-links a:first-child svg {
  transform: scale(0.8);
  margin: 1px 0 0 10px;
}

.btn-login {
  padding: 10px 24px;
  border: 2px solid #1a1a1a;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-login:hover {
  background: #1a1a1a;
  color: white;
}

@media (max-width: 768px) {
  .top-nav {
    padding: 8px 16px;
    height: auto;
    min-height: 52px;
  }

  .hamburger {
    display: flex;
    align-self: center;
  }

  .nav-pills {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #031a1b;
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .nav-pills.open {
    max-height: 300px;
    padding: 8px 0;
  }

  .nav-pill {
    padding: 12px 16px;
    font-size: 14px;
    white-space: nowrap;
    border: none;
    border-radius: 0;
    text-align: left;
    width: 100%;
  }

  .nav-pill:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .nav-pill.active {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }

  .main-nav {
    padding: 16px 20px;
    height: auto;
  }

  .logo {
    font-size: 18px;
    margin-right: 1rem;
  }

  .nav-links {
    display: none;
  }

  .btn-login {
    padding: 8px 16px;
    font-size: 14px;
  }

  .chev-down {
    filter: scale(0.5);
  }
}
</style>
