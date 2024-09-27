<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>

<template>
  <v-app>

    <v-navigation-drawer expand-on-hover rail image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark">
      <!-- When using the rail prop, the drawer will shrink (default 56px) 
      and hide everything inside of v-list except the first element. -->
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" subtitle="zixuan.peng@gmail.com"
          title="Peng's"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-dots-grid" title="Works" value="myworks" to="/works"></v-list-item>
        <v-list-item prepend-icon="mdi-camera" title="Photos" value="myphotos" to="/photos"></v-list-item>
        <v-list-item prepend-icon="mdi-ideogram-cjk-variant" title="Essays" value="myessays" to="/essays"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
