<template>
  <div>
    <div>
      <div class="side-bar-header">
        <!-- <span
          ><img src="../../public/logo.png" id="logo" alt="up-arrow.svg"
        /></span>
        <span id="TANGLE">TANGLE</span> -->
        <div>
          <img
            id="main-logo-img"
            src="../../public/main-logo.png"
            alt="down-arrow"
          />
        </div>
        <div style="margin-top: -12px;">
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
          <div class="members">4 members</div>
        </div>
      </div>
    </div>
    <hr />

    <div>
      <b-navbar id="side-bar" toggleable="lg" type="dark" variant="white">
        <b-navbar-nav class="pages-links">
          <b-nav-item to="/people"
            ><span class="link-span">People</span></b-nav-item
          >
          <b-nav-item to="/companies"
            ><span class="link-span">Companies</span></b-nav-item
          >
        </b-navbar-nav>
      </b-navbar>
      <div class="second-container">
        <b-card id="new-page" no-body class="text-center">
          <div id="new-page-btn">
            <span class="new-page"
              ><span>
                <img
                  class="new-page-plus"
                  id="plus"
                  src="../../public/plus.svg"
                  alt="up-arrow.svg"
              /></span>
              <span class="new-page-text">New page</span></span
            >
          </div>
        </b-card>
      </div>
    </div>
    <hr id="second-hr" />

    <div>
      <div class="third-container">
        <b-card id="tangle-option" no-body class="text-center">
          <div class="Tangle Tangle-header">
            <span class="work-space">Tangle options</span>
          </div>
          <div class="Tangle">
            <span class="new-page"
              ><span>
                <img
                  src="../../public/splitting.svg"
                  id="dash-icon"
                  alt="up-arrow.svg"/></span
              ><span style="vertical-align: middle;">Dashboard</span></span
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
  margin-top: -4px;
}
#side-bar {
  padding: 0;
  margin-top: 15px;
}
#new-page {
  background-color: #f6f9fe;
  width: 88%;
  margin-left: 3px;
  border-radius: 8px;
  height: 38px;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
}
.pages-links {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  width: 100%;
  justify-content: space-around;
  height: 82px;
}
#nav a {
  font-weight: 500;
  height: 42px;
  color: #2c3e50;
}
#plus {
  width: 13px;
  height: 13px;
  margin-right: 20px;
}
.new-page {
  color: #99a7b4;
}
.second-container {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
.side-bar-header {
  margin: 25px 21px 30px 21px;
  display: flex;
  justify-content: space-between;
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
  width: 40px;
  height: 40px;
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
  margin-left: 8%;
  height: 40px;
  justify-content: space-between;
  flex-direction: column;
  font-size: 14px;
  align-items: start;
  align-self: center;
}
.work-space {
  font-weight: bolder;
  margin: top;
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
#new-page-btn {
  margin-left: 14px;
}
#tangle-option {
  height: 29vh;
  margin: 0 6%;
  border-radius: 8px;
  background-color: #f6f9fe;
}
.Tangle {
  margin: 10px;
  text-align: justify;
  margin-left: 20px;
  font-size: 14px;
}
#logo {
  width: 44px;
}
#menu {
  margin-right: 10px;
  cursor: pointer;
}
.members {
  line-height: normal;
  font-size: 13px;
}
#second-hr {
  margin: 20px 0;
}
.Tangle-header {
  margin-top: 18px;
}
.new-page-text {
  font-size: 14px;
  -webkit-text-stroke-width: thin;
}
.link-span {
  position: relative;
  top: 2px;
}
#main-logo-img {
  width: 164px;
  height: 37px;
}
</style>
