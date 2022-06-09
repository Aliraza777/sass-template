<template>
  <div id="app">
    <NavBar></NavBar>
    <SubmitContainer></SubmitContainer>
    <HowItWorks></HowItWorks>
    <MonthlyMenu></MonthlyMenu>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubmitContainer from "./components/SubmitContainer.vue";
import HowItWorks from "./components/HowItWorks.vue";
import MonthlyMenu from "./components/MonthlyMenu.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SubmitContainer,
    HowItWorks,
    MonthlyMenu,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Work+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");
@font-face {
  font-family: "Montserrat";
  src: local(Montserrat),
    url("./fonts/Montserrat-VariableFont_wght.ttf") format("truetype");
}
</style>
