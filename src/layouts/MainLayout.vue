<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> FlexiChef </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Početna",
    caption: "Glavna stranica",
    icon: "home",
    link: "/",
  },
  {
    title: "Lista recepata",
    caption: "Svi recepti",
    icon: "menu_book",
    link: "/lista_recepata",
  },
  {
    title: "Favourites",
    caption: "Omiljeni recepti",
    icon: "favorite",
    link: "/favourites",
  },
  {
    title: "Pretraživanje",
    caption: "Traži recepte",
    icon: "search",
    link: "/pretraga_korisnika",
  },
  {
    title: "Detalji recepta",
    caption: "Detalji recepta",
    icon: "info",
    link: "/detalji_recepta",
  },
  {
    title: "Profil",
    caption: "Profil korisnika",
    icon: "person",
    link: "/profil",
  },
  {
    title: "Pretraga korisnika",
    caption: "Pretraživanje korisnika",
    icon: "person_search",
    link: "/pretraga_korisnika",
  },
  {
    title: "Login",
    caption: "Prijava",
    icon: "person_search",
    link: "/login",
  },
  {
    title: "Login",
    caption: "Prijava",
    icon: "person_add",
    link: "/pretraga_korisnika",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
