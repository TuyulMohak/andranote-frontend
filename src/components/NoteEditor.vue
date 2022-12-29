<template>
  <div>
    <q-editor
      max-height="65vh"
      min-height="65vh"
      v-model="noteStore.notebody"
      :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
    />
    <!-- <q-btn color="primary" label="UPDATE" @click="noteStore.patchNote()" /> -->
  </div>
  <!-- <pre>{{noteBody}}</pre> -->
</template>

<script>
import { onMounted } from 'vue'
import { useNoteStore } from '../stores/NoteStore'

export default {
  async setup () {
    const noteStore = useNoteStore()
    // const noteBody = ref('')

    onMounted(async () => {
      await noteStore.getNote()
      // noteBody.value = await noteStore.note.value.notebody
    })
    return {
      noteStore
      // noteBody
    }
  }
}
</script>
