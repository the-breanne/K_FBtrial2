<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Task</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="task.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="task.description" required>
                </div>

                <div class="form-group">
                    <label>Amount</label>
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
export default {
  data () {
    return {
      task: {
        name: ‘’,            
        description: ‘’,
        priority : ‘’, 
        }
    }
  },
 methods: {
    onFormSubmit (event) {
      event.preventDefault()
      db.collection('tasks').add(this.task).then(() => {
        alert('Task successfully created!')
        this.task.name = ''
        this.task.description = ''
        this.task.priority = ''
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

