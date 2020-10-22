<template>
  <div>
    <v-card class="mt-5">
      <v-card>
        <v-data-table :headers="headers" :items="dataList"></v-data-table>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "~/plugins/FirebaseConfig.js";
export default {
  data: function () {
    return {
      dataList: [],
      time: "",
      headers: [
        {
          text: "Items",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Price", value: "price" },
        { text: "Status", value: "status" },
        { text: "ID", value: "itemId" },
      ],
    };
  },
  methods: {
    getData() {
      db.collection("Items")
        // .where('status', '==', 'WantToBuy')
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.dataList = data;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>
