<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const showNav = ref(false);

const router = useRouter();
const route = useRoute();

function menuAction(path) {
  router.push(path);
  showNav.value = false;
}

const computedRoute = computed(() => route.path);

function isRouteActive(path) {
  return computedRoute.value === path;
}
</script>

<template>
  <nav class="navbar is-size-5" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-lab-name" @click="menuAction('/')">
        <!-- <img src="../assets/treeicon-big.png" alt="logo" /> -->
        <div v-if="route.path != '/'" class="content is-size-4 label">
          ELM Lab
        </div>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': showNav }"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showNav }"
    >
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <a
          class="navbar-item is-tab"
          @click="menuAction('/')"
          :class="{ 'is-selected': isRouteActive('/') }"
        >
          Home
        </a>

        <a
          class="navbar-item is-tab"
          @click="menuAction('/about')"
          :class="{ 'is-selected': isRouteActive('/about') }"
        >
          About
        </a>

        <a
          class="navbar-item is-tab"
          @click="menuAction('/people')"
          :class="{ 'is-selected': isRouteActive('/people') }"
        >
          People
        </a>

        <a
          class="navbar-item is-tab"
          @click="menuAction('/publications')"
          :class="{ 'is-selected': isRouteActive('/publications') }"
        >
          Publications
        </a>
        <a
          class="navbar-item is-tab"
          @click="menuAction('/forparents')"
          :class="{ 'is-selected': isRouteActive('/forparents') }"
        >
          For Parents
        </a>
        <a
          class="navbar-item is-tab"
          @click="menuAction('/join')"
          :class="{ 'is-selected': isRouteActive('/join') }"
        >
          Join the Lab
        </a>

        <!-- <a class="navbar-item is-tab" @click="menuAction('/contact')" :class="{ 'is-selected': isRouteActive('/contact') }" >
        Contact
      </a> -->
      </div>
    </div>
  </nav>

  <div class="container1"></div>
  <div class="container2"></div>

  <!-- <section v-if="route.path != '/'" class="hero">
  <img class="image" src="../assets/pattern_line.png" alt="banner" />
</section> -->
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar-item {
  padding: 0.5rem 1rem;
}
.is-tab:hover {
  color: var(--link-color);
  border-bottom: var(--link-color) 0px solid;
  border-top: var(--link-color) 0px solid;
}

.is-lab-name:hover {
  color: var(--link-color);
}

.navbar-item.is-selected {
  border-bottom: var(--main-green) 2px solid;
  border-top: var(--main-green) 2px solid;
}

.label {
  color: var(--main-green);
  font-weight: bold;
}
</style>
