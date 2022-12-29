<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" bordered>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-green-10"
          size="xl"
        />

        <q-toolbar-title class="text-green-10 text-bold">
          AndraNote
        </q-toolbar-title>

        <div class="text-green-10">v1.0</div>
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <div class = "column q-gutter-md q-pa-md text-center" style="height:100vh">
        <div class="row text-h5 text-bold text-light-green">
          Made by <div class="text-green-10 text-h3 text-bold text-left">Muhammad Rivandra</div>
        </div>
        <q-separator class="row"/>
        <div class="text-body row text-grey-8 q-pt-md text-left" style="height:50vh">
          WhatsApp Web on Low end device with slow internet is a torture. Sometimes I just need to send links or some text from laptop to phone and vice versa real fast with minimum loading time, so this note app is created.
        </div>
        <div class="row" >
          <div class="text-left text-grey-9">
            <div class="text-bold text-green-10">Copyright</div> Muhammad Rivandra 2022
          </div>
        </div>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
