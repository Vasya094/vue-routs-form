<template>
  <b-card no-body class="mb-1 widget-container">
    <b-card-header
      id="form-toggle"
      v-b-toggle.accordion-1
      @click.stop="() => (down = !down)"
      header-tag="header"
      class="p-1"
      role="tab"
    >
      <div block class="item-header-cont">
        <span class="item-header personal_information"
          >Personal Information</span
        >
        <span class="open-close-arrow">
          <img
            class="arrow"
            v-if="down"
            src="../../public/down-arrow.svg"
            alt="down-arrow"/>
          <img
            v-else
            class="arrow"
            src="../../public/up-arrow.svg"
            alt="up-arrow.svg"
        /></span>
      </div>
    </b-card-header>
    <b-collapse
      id="accordion-1"
      visible
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-form>
          <div class="first-form-row">
            <b-form-group>
              <label class="input-label" for="input-1">First name</label>
              <b-form-input
                id="input-1"
                label="First name"
                v-model="form.fstName"
                type="email"
                placeholder="Enter first name"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label
                label-for="input-2"
                id="input-group-2"
                class="input-label"
                for="input-1"
                >Last name</label
              >
              <b-form-input
                id="input-2"
                v-model="form.lstName"
                placeholder="Enter last name"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="second-form-row">
            <b-form-group>
              <label
                label-for="select-1"
                id="select-group-1"
                class="input-label"
                for="select-1"
                >Contact Type</label
              >
              <b-form-select
                no-caret
                id="select-1"
                v-model="selected"
                class="form-control"
                :options="options"
              >
              </b-form-select>
            </b-form-group>
          </div>
        </b-form>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        fstName: "Samuel",
        lstName: "L Jackson",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      down: false,
      selected: null,
      options: [
        { value: null, text: "Select option" },
        { value: "a", text: "Admin" },
        { value: "b", text: "User" },
        { value: "c", text: "Customer" },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style>
.first-form-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.input-label {
  float: left;
}
.custom-select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: #fff url("../../public/down-arrow.svg") no-repeat right 0.75rem
    center/8px 10px !important;
  background: none;
}
.form-group {
  width: 48%;
}
#form-toggle {
  background-color: #fff !important;
  border-bottom: none !important;
  height: 53px;
  border-radius: 10px;
  cursor: pointer;
}
.open-close-arrow {
  margin-right: 22px;
}
.widget-container {
  border-radius: 10px;
}
.arrow {
  width: 14px;
  height: 14px;
  position: relative;
  left: 42%;
  top: 10px;
}
.item-header-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.personal_information {
  margin-bottom: 3px !important;
}
</style>
