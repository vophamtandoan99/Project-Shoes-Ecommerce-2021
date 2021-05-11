<template>
  <card>
    <h4 slot="header" class="card-title">Edit Profile</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Username"
            placeholder="Username"
            v-model="user.username"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="number"
            label="Phone"
            placeholder="Phone"
            v-model="user.phone"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Address"
            placeholder="Address"
            v-model="user.address"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="date"
            label="dateofbirth"
            placeholder="Dateofbirth"
            v-model="user.dateofbirth"
          >
          </base-input>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="updateProfile()"
        >
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import Card from "src/components/Cards/Card.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Swal from "sweetalert2";
Vue.use(VueAxios, axios);
export default {
  components: {
    Card
  },
  data() {
    return {
      isUser:null,
      user: {
        username: "",
        phone: null,
        address: "",
        dateofbirth: ""
      }
    };
  },
  created() {
    // this.getItem();
        let token = JSON.parse(window.localStorage.getItem('auth'));
    
    console.log(token.id);
    this.getItem(token.id);
  },
  methods: {
    // updateProfile() {
    //   alert("Your data: " + JSON.stringify(this.user));
    // },
    getItem(id) {
      this.isUser = id;
      var self = this;
      Vue.axios
        .get("http://127.0.0.1:8000/api/userprofile/" + this.isUser)
        .then(function(resp) {
          self.user.username = resp.data.data.name;
          self.user.dateofbirth = resp.data.data.dateofbirth;
          self.user.address = resp.data.data.address;
          self.user.phone = resp.data.data.phone;
          console.log("Data:", resp.data.data);
        })
        .catch(function(error) {
          console.log("Loi:", error);
        });
    },
    updateProfile() {
      axios
        .put("http://127.0.0.1:8000/api/userprofile/" + this.isUser , this.user)
        .then(res => {
          console.log(res.data.data);
          this.getItem();
          console.log("thành công");
          Swal.fire("Đã sửa!", "Sửa profile thành công.", "success");
        })
        .catch(function(error) {
          Swal.fire("Failed!", "Lỗi không sửa profile được", "warning");
        });
    }
  }
};
</script>
<style></style>