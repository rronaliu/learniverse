<template>
  <header class="navbar">
    <div class="top-nav">
      <button class="nav-pill">For Learners</button>
      <button class="nav-pill">For Trainers</button>
      <button class="nav-pill active">For Companies</button>
      <button class="nav-pill">For Universities</button>
    </div>

    <div class="main-nav">
      <div class="main-nav--links">
        <div class="logo">
          <LogoIcon />
          <span>learniverse</span>
        </div>
        <div class="nav-links">
          <a href="#">Solutions</a>
          <a href="#">Plans</a>
          <a href="#">Why Learniverse?</a>
        </div>
      </div>
      <button class="btn-login">Login</button>
    </div>
  </header>
</template>

<script setup>
import LogoIcon from "./icons/LogoIcon.vue";
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
  display: flex;
  gap: 8px;
  padding: 8px 42px;
  background: #031a1b;
  height: 52px;
}

.nav-pill {
  padding: 4px 16px;
  border: 1px solid transparent;
  background: transparent;
  border-color: #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  font-weight: 600;
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
}

.nav-links {
  display: flex;
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
</style>
