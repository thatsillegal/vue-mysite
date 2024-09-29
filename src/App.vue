<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <v-app>

    <v-navigation-drawer expand-on-hover rail>
      <!-- When using the rail prop, the drawer will shrink (default 56px) 
      and hide everything inside of v-list except the first element. -->
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="zixuan.peng@gmail.com"
          title="Peng's"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-circle-outline" title="Home" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-dots-grid" title="Works" value="myworks" to="/works"></v-list-item>
        <v-list-item prepend-icon="mdi-camera" title="Photos" value="myphotos" to="/photos"></v-list-item>
        <v-list-item prepend-icon="mdi-ideogram-cjk-variant" title="Essays" value="myessays" to="/essays"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex flex-column">
      <router-view />
    </v-main>

    <v-footer class="d-flex flex-column" app>
      <div class="elevation-2 d-flex w-100 align-center px-4">
        <div> Mariposa de sueño, te pareces a mi alma,
          y te pareces a la palabra melancolía.</div>
        <v-spacer></v-spacer>
        <v-btn
          icon="mdi-facebook"
          size="small"
          class="mx-4"
          variant="plain"
        ></v-btn>
        <v-btn
          icon="mdi-twitter"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
        <v-btn
          icon="mdi-linkedin"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
        <v-btn
          icon="mdi-instagram"
          class="mx-4"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </v-footer>

  </v-app>
</template>

<style>
</style>
