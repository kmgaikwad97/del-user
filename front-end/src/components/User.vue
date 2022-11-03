<template>
  <div>
    <div class="container">
      <div class="user-data">
        <table
          id="tableflow"
          class="tableflow table table-bordered table-secondary table-striped"
        >
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in user" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td v-text="user.name"></td>
              <td v-text="user.age"></td>
              <td v-text="user.city"></td>
              <td v-text="user.phone"></td>
              <td v-text="user.status"></td>
              <td>
                <!-- <button
                  @click="deletedata(user._id)"
                  class="btnred btn btn-danger"
                > -->
                <button
                  @click="deletedata(user._id)"
                  class="btnred btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      user: "",
    };
  },
  async mounted() {
    this.getAll();
  },
  methods: {
    async getAll() {
      const result = await axios.get("http://localhost:3001/user");
      console.log("result", result.data);
      this.user = result.data;
    },
    async deletedata(id) {

      this.$store.dispatch("deleteUser",this.deleteUserData)

      // console.log("id", id);
      // let result = await axios.delete("http://localhost:3001/user/" + id);
      // this.getAll();

      // console.log(result);
    },
  },
};
</script>

<style>
</style>
