<template>
  <div class="body">
    <div class="container">
      <span class="toggleimg"
        ><img class="toggle" src="../assets/dish-image.png"
      /></span>
      <div class="textData">
        <div class="boldText">
          No Luck having quality lunch at work ? Say no more, We've got your
          back.
        </div>
        <div class="curlyPath">
          <img src="../assets/Path-curly.svg" />
        </div>
        <div class="subtitle">
          We create and deliver delectable meals for you, made from scratch with
          fresh,healthy and locally grown ingredieants.
        </div>
        <button class="submitBtn">
          <a href="#order-form" class="btn">Submit</a>
        </button>
      </div>
      <div class="dishImage">
        <img src="../assets/dish-image.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.body
    width: 100%
    height: 632px
    background-color: #00ccbb
    .container
      width: 100%
      height: 632px
      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: center
      padding-left: 40px
      .textData
        .boldText
          position: absolute
          width: 656px
          height: 196px
          font-size: 45px
          color: #ffffff
          font-weight: 700
          font-family: "Work Sans"
        .curlyPath
          margin-top: 180px
        .subtitle
          margin-top: 20px
          position: absolute
          width: 662px
          height: 55px
          font-size: 18px
          line-height: 25px
          color: #ffffff
          font-weight: 600
          font-family: "Montserrat"
        .submitBtn
          margin-top: 130px
          width: 163px
          height: 48px
          border-radius: 11px
          filter: drop-shadow(0px 30px 20px rgba(0,0,0,0.13))
          background-color: #ffffff
          border: 2px solid #ffc400
          text-align: center
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          &:hover
              cursor: pointer
          .btn
            text-decoration: none
            text-transform: uppercase
            font-size: 16px
            letter-spacing: 1px
            color: #707070
            font-weight: 700
            font-family: "Montserrat"

      .dishImage
        position: absolute
        top: 8%
        right: 0
        padding-right: 80px
@media screen and (max-width: 799px)
  .body
    width: 100%
    height: 700px
    .container
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: start
      .toggleimg
        .toggle
          margin-left: -30px
          position: static
          right: 25%
          top: 20%
          width: 70%
      .textData
        .boldText
          width: 350px
          height: 123px
          font-size: 30px
          color: #ffffff
          font-weight: 700
          font-family: "Work Sans"
        .curlyPath
        .subtitle
          width: 350px
          height: 79px
          font-size: 16px
          line-height: 25px
          color: #ffffff
          font-weight: 600
          font-family: "Montserrat"
        .submitBtn
          margin-top: 130px
          width: 163px
          height: 48px
          border-radius: 11px
          filter: drop-shadow(0px 30px 20px rgba(0,0,0,0.13))
          background-color: #ffffff
          border: 2px solid #ffc400
          text-align: center
          display: flex
          flex-direction: row
          justify-content: center
          align-items: center
          .btn
            text-decoration: none
            text-transform: uppercase
            font-size: 16px
            letter-spacing: 1px
            color: #707070
            font-weight: 700
            font-family: "Montserrat"
            &:hover
              cursor: pointer
      .dishImage
        display: none
@media(min-width: 799px)
  .body
    .container
      .toggleimg
        display: none
@media screen and (max-width: 1250px)
  .body
    .container
      .dishImage
        display: none
</style>
