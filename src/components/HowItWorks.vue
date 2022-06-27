<template>
  <div class="container">
    <div class="Main">
      <div>
        <img class="logo" src="../assets/logo.svg" />
      </div>
      <div class="mainText">How it Works</div>
      <div>
        <img class="curly-path" src="../assets/Path-curly.svg" />
      </div>
    </div>
    <div class="Tag">
      <div class="youOrder">
        <img class="orderImg" src="../assets/youorder.svg" />
        <p class="title">You Order</p>
        <p class="subtitle">Diverse menu, easy-peasy ordering</p>
      </div>
      <div class="weCook">
        <img class="cookImg" src="../assets/wecook.svg" />
        <p class="title">We Cook</p>
        <p class="subtitle">Finest chef's, heavenly tasting food.</p>
      </div>
      <div class="weDeliver">
        <img class="deliverImg" src="../assets/wedeliver.svg" />
        <p class="title">We Deliver</p>
        <p class="subtitle">Swift delivery, relentless happiness</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.container
    width: 100%
    height: 632px
    background-color: #ffffff
    .Main
        padding-top: 80px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .logo
            padding: 10px
            width: 35px
            height: 27px
        .mainText
            padding: 10px
            font-size: 30px
            letter-spacing: 4px
            color: #212121
            font-family: "Raleway"
        .curly-path
            padding:10px
            width: 212px
            height: 17px
    .Tag
        padding-top: 60px
        display: flex
        flex-wrap: wrap
        flex-direction: row
        justify-content: space-around
        align-items: center
        position: relative
        top: 0
        left: 0
        .youOrder
            width: 366px
            height: 293px
            border-radius: 40px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .orderImg
                position: absolute
                top: 40px
                left: 80px
                width: 188px
                height: 188px
            .title
                font-size: 24px
                color: #fafbfc
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #fafbfc
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
        .weCook
            width: 366px
            height: 293px
            border-radius: 40px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .cookImg
                position: absolute
                top: 40px
                left: 80px
                width: 188px
                height: 188px
            .title
                font-size: 24px
                color: #fafbfc
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #fafbfc
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
        .weDeliver
            width: 366px
            height: 293px
            border-radius: 40px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .deliverImg
                position: absolute
                top: 40px
                left: 80px
                width: 188px
                height: 188px
            .title
                font-size: 24px
                color: #ffffff
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
@media screen and (max-width: 1150px)
  .container
    width: 100%
    height: 900px
    background-color: #ffffff
    .Main
        padding-top: 40px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .logo
            padding: 5px
            width: 35px
            height: 27px
        .mainText
            padding: 5px
            font-size: 30px
            letter-spacing: 4px
            color: #212121
            font-family: "Raleway"
        .curly-path
            padding:5px
            width: 212px
            height: 17px
    .Tag
        padding-top: 30px
        display: flex
        flex-direction: column
        justify-content: space-around
        align-items: center
        position: relative
        top: 0
        left: 0
        .youOrder
            margin-bottom: 30px
            width: 430px
            height: 180px
            border-radius: 20px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .orderImg
                position: absolute
                top: 30px
                left: 160px
                width: 118px
                height: 118px
            .title
                font-size: 24px
                color: #fafbfc
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #fafbfc
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
        .weCook
            margin-bottom: 30px
            width: 430px
            height: 180px
            border-radius: 20px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .cookImg
                position: absolute
                top: 30px
                left: 160px
                width: 118px
                height: 118px
            .title
                font-size: 24px
                color: #fafbfc
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #fafbfc
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
        .weDeliver
            width: 430px
            height: 180px
            border-radius: 20px
            filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
            background-color: #00ccbb
            border: 3px solid #ffffff
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            .deliverImg
                position: absolute
                top: 30px
                left: 160px
                width: 118px
                height: 118px
            .title
                font-size: 24px
                color: #ffffff
                font-family: "Raleway"
            .subtitle
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Work Sans"
            &:hover
                cursor: pointer
                filter: drop-shadow(0px 10px 11.5px rgba(0,0,0,0.09))
                background-color: #ffffff
                border: 3px solid #ffc400
                .title
                    color: #424142
                .subtitle
                    color: #424142
</style>
