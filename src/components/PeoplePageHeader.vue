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
        <div><b-button variant="primary">Edit form</b-button></div>
        <div>
          <span>
            <img
              src="../../public/more.svg"
              id="edit-form-icon"
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
  width: 85vw;
  height: 7vh;
  border-bottom: 1px solid rgb(122, 122, 122);
  box-shadow: inset 0 -1px 0 0 rgba(165, 165, 165, 0.719);
  .flex-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .left-side,
    .right-side {
      display: flex;
      flex-direction: row;
      margin-left: 2%;
      align-self: center;
    }
    .right-side {
      margin-right: 70px;
    }
  }
  #edit-row-icon,
  #edit-form-icon {
    width: 17px;
    margin: 9px 15px 0;
    cursor: pointer;
  }
  #edit-row-text {
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
  }
  #edit-form-icon {
  }
}
</style>
