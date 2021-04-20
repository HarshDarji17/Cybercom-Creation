/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <v-container>
    <v-layout>
      <v-flex xs8 offset-xs2 class="change">
        <v-card>
          <v-card-title>
            <h1 class="display-1">
              Add Question
            </h1>
            <v-spacer />
            <n-link to="/admin/questions">
              <v-btn small color="grey darken-2" dark>
                All Question
              </v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <form @submit.prevent="store">
              <v-text-field v-model="quiz.question" label="question" solo />
              <v-text-field v-model="quiz.option1" label="Option1" solo />
              <v-text-field v-model="quiz.option2" label="Option2" solo />
              <v-text-field v-model="quiz.option3" label="Option3" solo />
              <v-text-field v-model="quiz.option4" label="Option4" solo />

              <v-flex>
                <v-radio-group v-model="correct" row>
                  <p class="mr-4">
                    Choose Correct Answer
                  </p>
                  <v-radio class="ml-4" :value="quiz.option1" label="option 1" />
                  <v-spacer />
                  <v-radio class="ml-4" :value="quiz.option2" label="option 2" />
                  <v-spacer />
                  <v-radio class="ml-4" :value="quiz.option3" label="option 3" />
                  <v-spacer />
                  <v-radio class="ml-4" :value="quiz.option4" label="option 4" />
                </v-radio-group>
                <v-btn class="indigo" block dark type="submit">
                  Add
                </v-btn>
              </v-flex>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      quiz: {
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: ''
      },
      correct: ''
    }
  },
  methods: {
    store () {
      this.$axios.post('https://nuxt-quiz-33911-default-rtdb.firebaseio.com/quiz/questions.json', this.quiz)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data)

          this.storeAnswer(res.data.name)
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err.response.data)
        })
    },
    storeAnswer (id) {
      this.$axios.post('https://nuxt-quiz-33911-default-rtdb.firebaseio.com/quiz/answers.json', {
        question_id: id,
        answer: this.correct
      })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err.response.data)
        })
    }
  }

}
</script>

<style>
.change{
    margin-left:170px;
    margin-top:50px;
}
</style>
