<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="pessoa.idade1" label="Idade 1" />
        </v-col>

        <v-col>
          <v-text-field v-model="pessoa.idade2" label="Idade 2" />
        </v-col>

        <v-col>
          <v-btn @click="calcularMedia()">Calc</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      pessoa: {}
    };
  },

  methods: {
    calcularMedia() {
      axios
        .post("http://localhost:3000/media", this.pessoa)
        .then(response => {
          window.alert(response.data.media);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
