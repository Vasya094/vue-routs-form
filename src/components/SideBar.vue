<template>
  <div>
    <div>
      <div class="side-bar-header">
        <span
          ><img src="../../public/logo.png" id="logo" alt="up-arrow.svg"
        /></span>
        <span id="TANGLE">TANGLE</span>
        <div>
          <img
            class="arrow left-arrow"
            src="../../public/left-arrow.svg"
            alt="up-arrow.svg"
          />
          <img
            class="arrow"
            id="menu"
            src="../../public/lines.svg"
            alt="up-arrow.svg"
          />
        </div>
      </div>
      <div class="down-side-bar-header">
        <div class="WN-cont"><span id="WN">WN</span></div>
        <div class="down-side-bar-right">
          <div class="work-space">Workspace name</div>
          <div>4 members</div>
        </div>
      </div>
    </div>
    <hr />

    <div>
      <b-navbar id="side-bar" toggleable="lg" type="dark" variant="white">
        <b-navbar-nav class="pages-links">
          <b-nav-item to="/people">People</b-nav-item>
          <b-nav-item to="/companies">Companies</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <div class="second-container">
        <b-card id="new-page" no-body class="text-center">
          <div>
            <span class="new-page"
              ><span>
                <img
                  class="new-page-plus"
                  id="plus"
                  src="../../public/plus.svg"
                  alt="up-arrow.svg"/></span
              >New page</span
            >
          </div>
        </b-card>
      </div>
    </div>
    <hr />

    <div>
      <div class="third-container">
        <b-card id="tangle-option" no-body class="text-center">
          <div class="Tangle">
            <span class="work-space">Tangle options</span>
          </div>
          <div class="Tangle">
            <span class="new-page"
              ><span>
                <img
                  src="../../public/splitting.svg"
                  id="dash-icon"
                  alt="up-arrow.svg"/></span
              >Dashboard</span
            >
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  background-color: #6197f9;
  color: white;
}
.nav-item {
  text-align: initial;
}
#side-bar {
  padding: 0;
  margin-top: 15px;
}
#new-page {
  background-color: #f7f9fd;
  width: 80%;
  cursor: pointer;
}
.pages-links {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  width: 100%;
}
#nav a {
  font-weight: 500;
  color: #2c3e50;
}
#plus {
  width: 10px;
  height: 10px;
  margin-right: 20px;
}
.new-page {
  color: #99a7b4;
}
.second-container {
  display: flex;
  justify-content: center;
}
.side-bar-header {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-content: stretch;
}
#TANGLE {
  color: #13131d;
  font-size: 24px;
  font-weight: 800;
  align-self: end;
  width: 45%;
  text-align: start;
}
#WN {
  color: white;
}
.WN-cont {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgb(108, 116, 233);
  background: linear-gradient(
    145deg,
    rgba(108, 116, 233, 1) 0%,
    rgba(125, 219, 238, 1) 100%
  );
}
.down-side-bar-header {
  display: flex;
  flex-direction: row;
  margin: 20px 30px 20px 17px;
}
.left-arrow {
  height: 12px;
  cursor: pointer;
}
.down-side-bar-right {
  display: flex;
  margin-left: 7%;
  flex-direction: column;
  font-size: 14px;
  align-items: start;
  align-self: center;
}
.work-space {
  font-weight: bolder;
}
.third-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#dash-icon {
  width: 13px;
  height: 13px;
  margin-right: 10px;
}
#tangle-option {
  height: 29vh;
  margin: 0 9%;
  background-color: #f7f9fd;
}
.Tangle {
  margin: 10px;
  text-align: justify;
  margin-left: 30px;
}
#logo {
  width: 44px;
}
#menu {
  margin-right: 10px;
}
</style>
