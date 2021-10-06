<template>
  <div class="header-container">
    <div class="flex-cont">
      <div class="left-side">
        <div>
          <span>
            <img
              src="../../public/return.svg"
              id="edit-row-icon"
              alt="up-arrow.svg"
          /></span>
        </div>
        <div id="edit-row-text">Edit row</div>
      </div>
      <div class="right-side">
        <div><b-button class="edit-form-btn">Edit form</b-button></div>
        <div>
          <span>
            <img
              src="../../public/more.svg"
              id="edit-form-icon"
              class="dotted-menu"
              alt="up-arrow.svg"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: red;
}

.header-container {
  width: 100%;
  height: 8vh;
  min-height: 80px;
  border-bottom: 1px solid rgba(172, 172, 172, 0.376);
  box-shadow: inset 0 -1px 0 0 rgba(182, 182, 182, 0.335);
  .flex-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 113%;

    .left-side,
    .right-side {
      display: flex;
      flex-direction: row;
      margin-left: 2%;
      align-self: center;
    }
    .right-side {
      margin-right: 20px;
    }
  }
  #edit-row-icon,
  #edit-form-icon {
    width: 17px;
    margin: 8px 15px 0;
    cursor: pointer;
  }
  .dotted-menu {
    margin-top: 12px !important;
  }
  #edit-row-text {
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }

  .edit-form-btn {
    background-color: #6197f9;
    border: none;
    height: 40px;
    border-radius: 8px;

    &:hover {
      background-color: #6196f9bb;
    }
  }
}
</style>
