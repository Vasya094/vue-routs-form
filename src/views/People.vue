<template>
  <div class="home">
    <people-page-header />
    <div class="people-contant">
      <div style="padding: 30px;">
        <drop-down-form />
        <div class="people-item">
          <b-card style="height: 70px;" no-body class="people-item-card mb-1">
            <div>
              <span class="item-header">Contacts</span>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeoplePageHeader from "../components/PeoplePageHeader.vue";
import DropDownForm from "../components/DropDownForm.vue";

export default {
  name: "home",
  components: {
    PeoplePageHeader,
    DropDownForm,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 3,
    };
  },
};
</script>
<style>
.people-contant {
  height: 90%;
  background-color: #fafafa;
}
.people-item {
  height: 5vh;
  margin-top: 30px;
  border-radius: 10px;
}
.people-item-card {
  border-radius: 10px;
  display: flex;
  height: 70px;
  justify-content: center;
}
.home {
  min-width: 100px;
  width: 88%;
}
.item-header {
  float: left;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 10px 10px 20px;
  width: max-content;
}
</style>
