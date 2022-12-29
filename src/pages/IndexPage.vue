<template>
  <q-page class="row items-start justify-left q-pa-md q-gutter-sm">
      <div class="col-md-7 col-sm-9 col-xs-11">
        <Suspense>
          <template #default>
            <NoteEditor/>
          </template>
          <template #Fallback>
            LOADING ...
          </template>
        </Suspense>
      </div>
    <div class="col-md-2 col-sm-2 col-xs-11">
      <div class="row items-center">
        <q-input class="col-10" dense outlined v-model="noteStore.code" type="text" label="code" />
        <q-btn outline class="col-10 q-mt-sm q-py-none self-start" size="md" color="positive" label="Update" @click.prevent="noteStore.patchNote()" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useNoteStore } from '../stores/NoteStore'
import NoteEditor from '../components/NoteEditor.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    NoteEditor
  },
  setup () {
    const noteStore = useNoteStore()

    return {
      noteStore
    }
  }
})
</script>
