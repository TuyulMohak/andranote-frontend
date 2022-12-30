import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Notify } from 'quasar'
const axios = require('axios')

export const useNoteStore = defineStore('noteStore', {
  state: () => ({
    note: ref({}),
    code: ref(''),
    notebody: ref('WAIT MASI LOADINGG ...'),
    isLoading: ref(false)
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getNote () {
      await axios.get('https://heliotrope-smart-hair.glitch.me/note').then((res) => {
        this.notebody = res.data.notebody
        // console.log(res.data.notebody)
      }).catch((err) => {
        alert(err)
      })
    },
    async patchNote () {
      this.isLoading = true

      const notif = Notify.create({
        spinner: this.isLoading,
        group: false,
        message: 'Please wait...',
        position: 'top'
      })

      await axios.patch('https://heliotrope-smart-hair.glitch.me/note', {
        notebody: this.notebody,
        code: this.code
      }).then(res => {
        notif({
          spinner: false,
          icon: 'done',
          message: 'GREAT, UPDATED',
          position: 'top',
          color: 'positive'
        })
        console.log(res)
        console.log(this.notebody, this.code)
      })
        .catch(err => alert(err.message))
    }
  }
})
