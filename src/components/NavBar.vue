<template>
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
            class="fa-phone"
          ></font-awesome-icon>
          <a href="#!">+92 321 4211 214</a>
        </li>
      </ul>
    </nav>
  </div>
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
.nav-container
  margin: 0
  padding: 0
  display: flex
  justify-content: space-between
  width: $content-width
  height: 100px
  filter: drop-shadow(0px 12px 16.5px rgba(0,0,0,0.05))
  background-color: $nav-background
.brand
  padding: 1rem 1rem
  font-size: 19px
  color: #5d5d5d
  font-family: "Rounded"
nav
  float: right
  margin: 0 50px 0 0
  ul
    list-style: none
    margin: 0
    padding: 0
    &.nav-list
      display:flex
      justify-content: center
      background-color: $nav-background
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
        .fa-phone
          color: #ffffff
          margin: 5px 0 5px 0
        a
          font-size: 20px
          letter-spacing: 2px
          color: #ffffff
          font-weight: 700
          font-family: "Montserrat"
          &::before
              transition: 300ms
              height: 3px
              content: ""
              position: absolute
              background-color: $nav-background
              width: 0%
              bottom: 0px
          &:hover::before
              width: 70%
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
@media screen and (max-width: $breakpoint)
  .brand
    height: $nav-height
    width: $nav-height*2
    margin: 10px 0 0 10px
    padding: 0
  .nav-mobile
    display: block
  nav
    width: 100%
    // padding: $nav-height 0 15px
    padding: $nav-height 0 0 0
    margin: 0 0 0 0
    ul
      // display: none
      background-color: $nav-background
      li
        float: none
        &.active
          margin: 0 5px 0 0
          // padding-bottom: 10px
          width: 300px
          height: 80px
          background-color: #00ccbb
          display: flex
          flex-direction: row
          align-content: center
          .fa-phone
            margin: 0 10px 0 0
            color: #ffffff
          a
            color: #ffffff
            &:hover::before
              width: 50%

        a
          padding: 10px 0 0 5px
          line-height: 20px
          &:hover::before
            width: 20%
            padding-left: 30px
            // margin: 0 0 10px 0
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
