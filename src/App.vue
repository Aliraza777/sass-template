<template>
  <div id="app">
    <NavBar></NavBar>
    <SubmitContainer></SubmitContainer>
    <HowItWorks></HowItWorks>
    <MonthlyMenu></MonthlyMenu>
    <FeaturedMenu></FeaturedMenu>
    <BenefitsComponent></BenefitsComponent>
    <TestimonialsComponent></TestimonialsComponent>
    <OrderPlacement></OrderPlacement>
    <ContactUs></ContactUs>
    <!-- <HomeView></HomeView> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SubmitContainer from "./components/SubmitContainer.vue";
import HowItWorks from "./components/HowItWorks.vue";
import MonthlyMenu from "./components/MonthlyMenu.vue";
import FeaturedMenu from "./components/FeaturedMenu.vue";
import BenefitsComponent from "./components/BenefitsComponent.vue";
import TestimonialsComponent from "./components/TestimonialsComponent.vue";
import ContactUs from "./components/ContactUs.vue";
// import HomeView from "./views/HomeView.vue";
import OrderPlacement from "./components/OrderPlacement.vue";
export default {
  name: "App",
  components: {
    // HomeView,
    NavBar,
    SubmitContainer,
    HowItWorks,
    MonthlyMenu,
    FeaturedMenu,
    BenefitsComponent,
    TestimonialsComponent,
    OrderPlacement,
    ContactUs,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400&family=Work+Sans:wght@200;300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Work+Sans:wght@200;300;400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Work+Sans:wght@200;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&family=Work+Sans:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap");
@font-face {
  font-family: "Montserrat";
  src: local(Montserrat),
    url("./fonts/Montserrat-VariableFont_wght.ttf") format("truetype");
}
</style>
