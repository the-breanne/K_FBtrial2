<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Task</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="task.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="task.description" required>
                </div>

                <div class="form-group">
                    <label>Priority</label>
                    <input type="text" class="form-control" v-model="task.priority" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Task</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { db } from '../firebaseDb'

export default {
  data () {
    return {
      task: {
      }
    }
  },
  created () {
    let dbRef = db.collection('tasks').doc(this.$route.params.id)
    dbRef.get().then((doc) => {
      this.task = doc.data()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    onUpdateForm (event) {
      event.preventDefault()
      db.collection('tasks').doc(this.$route.params.id)
        .update(this.task).then(() => {
          console.log('Task successfully updated!')
          this.$router.push('/list')
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
