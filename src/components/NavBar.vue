<!-- <template>
  <nav class="navBar">
    <input type="checkbox" id="navBarToggle">
    <div class="brand">
      <img class="brand-icon" src="../assets/logo.svg" />
      <span>Its my Lunch</span>
    </div>
    <div class="navBar-links" id="myTopnav">
      <ul class="navigation">
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>
          <a href="#" class="active">
            <div class="activeInfo">
              <font-awesome-icon icon="fas fa-phone"></font-awesome-icon>
              <span>+92 321 4211 214</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav"
          ><font-awesome-icon icon="fas fa-bars"></font-awesome-icon
        ></i>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleMobileNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>
<style lang="sass">
.navBar
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1rem
  width: 100%
  height: 100px
  filter: drop-shadow(0px 12px 16.5px rgba(0, 0, 0, 0.05))
  background-color: #ffffff
  .brand
    font-size: 19px
    color: #5d5d5d
    font-family: "Rounded"
  .navBar-links
    .icon
      display: none
    ul
      display: flex
      .navigation
        float: right
      li
        display: flex
        align-items: center
        list-style: none
        text-transform: uppercase
        padding: 16px
        a
          text-decoration: none
          font-size: 14px
          letter-spacing: 1px
          color: #6d6d6d
          font-weight: 500
          font-family: "Montserrat"
        .active
          width: 180px
          height: 100px
          background-color: #00ccbb
          .activeInfo
            padding-top: 20px
            display: flex
            flex-direction: column
            font-size: 20px
            letter-spacing: 2px
            color: #ffffff
            background-color: #00ccbb
            font-weight: 700
            font-family: "Montserrat"
          &:hover
            text-decoration-line: underline
            text-decoration-thickness: 3px
            text-decoration-color: #00ccbb
  // @media (max-width: 660px)
  //   .navBar-links
  //     .navigation
  //       display: none
  //     .icon
  //       display: block
  //   .icon
  //     float: right
  //     i
  //       font-size: 30px
  //       color: #00ccbb
  // @media screen and (max-width: 600px)
  //   .navBar-links
  //     .navigation
  //       display: none
  //     .icon
  //       display: block
  //     .icon
  //       float: right
  //       i
  //         font-size: 30px
  //         color: #00ccbb
  @media screen and (max-width: 600px)
  // .navBar-links.responsive
  //   position: relative
  //   .icon
  //     position: absolute
  //     right: 0
  //     top: 0
  // .navBar-links.responsive
  //   a
  //   float: none
  //   display: block
  //   text-align: left
</style> -->

<template>
  <section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <img src="../assets/logo.svg" />
        <span>Its my lunch</span>
      </div>
      <nav>
        <div class="nav-mobile">
          <a id="nav-toggle" href="#!"><span></span> </a>
        </div>
        <ul class="nav-list">
          <li><a href="#!">Menu</a></li>
          <li><a href="#!">Contact us</a></li>
          <li class="active">
            <font-awesome-icon
              icon="fas fa-phone"
              style="color: white"
            ></font-awesome-icon>
            <a href="#!">+92 321 4211 214</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import * as jQuery from "jquery";
(function ($) {
  $(function () {
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);
export default {};
</script>

<style lang="sass" scoped>
$content-width: 100%
$breakpoint: 799px
$nav-height: 70px
$nav-background: #ffffff
$nav-font-color: #6d6d6d
$link-hover-color: #00ccbb
.navigation
  height: 100
  background: $nav-background
.nav-container
  display: flex
  justify-content: space-between
  width: 100%
  height: 100px
  filter: drop-shadow(0px 12px 16.5px rgba(0,0,0,0.05))
  background-color: #ffffff
.brand
  padding: 1rem 1rem
  font-size: 19px
  color: #5d5d5d
  font-family: "Rounded"
nav
  float: right
  ul
    list-style: none
    margin: 0
    padding: 0
    &.nav-list
      display:flex
      justify-content: center
      background-color: #00ccbb
    li
      margin-top: 40px
      float: left
      position: relative
      padding: 10px 20px 10px 20px
      &.active
        margin: 0
        width: 180px
        height: 80px
        background-color: #00ccbb
        display: flex
        flex-direction: column
        align-items: center
        a
          font-size: 20px
          letter-spacing: 2px
          color: #ffffff
          font-weight: 700
          font-family: "Montserrat"
      a
        text-transform: uppercase
        display: block
        font-size: 14px
        letter-spacing: 1px
        color: #6d6d6d
        font-weight: 500
        font-family: "Montserrat"
        text-decoration: none
        &::before
          transition: 300ms
          height: 3px
          content: ""
          position: absolute
          background-color: $link-hover-color
          width: 0%
          bottom: 0px
        &:hover::before
          width: 70%
      ul
        li
          min-width: 190px
          a
            padding: 15px
            line-height: 20px
.nav-mobile
  display: none
  position: absolute
  top: 0
  right: 0
  background: $nav-background
  height: $nav-height
  width: $nav-height
@media only screen and (max-width: $breakpoint)
  .nav-mobile
    display: block
  nav
    width: 100%
    padding: $nav-height 0 15px
    ul
      display: none
      li
        float: none
        a
          padding: 15px
          line-height: 20px
          &:hover::before
            width: 20%
            padding-left: 30px
#nav-toggle
  position: absolute
  left: 10px
  top: 40px
  cursor: pointer
  padding: 10px 35px 16px 0px
  span
    cursor: pointer
    border-radius: 1px
    height: 5px
    width: 35px
    background: $link-hover-color
    position: absolute
    display: block
    content: ""
    transition: all 300ms ease-in-out
  span:before
    cursor: pointer
    border-radius: 1px
    height: 5px
    width: 35px
    background: $link-hover-color
    position: absolute
    display: block
    content: ""
    transition: all 300ms ease-in-out
  span:after
    cursor: pointer
    border-radius: 1px
    height: 5px
    width: 35px
    background: $link-hover-color
    position: absolute
    display: block
    content: ""
    transition: all 300ms ease-in-out
  span:before
    top: -10px
  span:after
    bottom: -10px
  .active
    span
      background-color: transparent
      &:after
        top: 0
      &:before
        top: 0
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)
@media screen and (min-width: $breakpoint)
  .nav-list
    display: block !important
</style>
