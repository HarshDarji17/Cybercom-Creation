<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-1">
              All Questions
            </h1>
            <v-spacer /><n-link to="/admin/questions/create">
              <v-btn small color="grey darken-2" dark>
                All
              </v-btn>
            </n-link>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="questions"
              :items-per-page="5"
              class="elevation-1"
            >
              <template #items="props">
                <td class="text-xs-right">
                  {{ props.item.question }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.option1 }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.option2 }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.option3 }}
                </td>
                <td class="text-xs-right">
                  {{ props.item.option4 }}
                </td>
                <td class="text-xs-center">
                  <v-icon>home</v-icon>
                </td>
              </template>
            </v-data-table>
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
      headers: [

        { text: 'Question', value: 'question' },
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
        { text: 'Option 4', value: 'option4' },
        { text: 'Correct', value: 'correct' }
      ],
      questions: [

      ]
    }
  },

  created () {
    this.fetchQuestions()
  },

  methods: {
    fetchQuestions () {
      this.$axios
        .get('https://nuxt-quiz-33911-default-rtdb.firebaseio.com/quiz/questions.json')
        // eslint-disable-next-line no-console
        // eslint-disable-next-line no-return-assign
        .then(res =>

          (this.questions = Object.keys(res.data).map((key, index) => {
            res.data[key].id = key
            // eslint-disable-next-line no-console
            console.log(res.data[key])

            return res.data[key]
          }))
        )
    }
  }
}
</script>

<style>

</style>
