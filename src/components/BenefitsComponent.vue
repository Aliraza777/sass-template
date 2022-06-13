<template>
  <div class="benefitsBody">
    <div class="main">
      <div class="logo">
        <img src="../assets/whiteLogo.svg" />
      </div>
      <div class="title">Benefits</div>
      <div class="curl">
        <img src="../assets/benefits-curl.svg" />
      </div>
      <div class="subtitle">
        <p>
          Our care for you is exactly how we care for ourselves. Constant
          experiencing of unsatisfying lunch delivery services, led to
          itsmylunch. Why not provide you with the ultimate ease of having a
          delicious lunch the way we prefer? The good way? Don’t worry, we’vegot
          you covered.
        </p>
      </div>
    </div>
    <div class="gridBox">
      <div class="eatHealthy">
        <div class="title">Eat Healthy , Live Better</div>
        <div class="subtitle">
          We reach out to great lengths to ensure that each meal is free of
          harmful preservatives, or additives, and that each meal is
          nutrient-dense and seasoned with love and care.
        </div>
      </div>
      <div class="sayNo">
        <div class="title">Say No to Stress</div>
        <div class="subtitle">
          Time is money. Bid farewell to the hassle of deciding what to eat at
          lunch, without wasting any time. Just click and instantly enjoy your
          lunch, time efficiently
        </div>
      </div>
      <div class="diligentDelv">
        <div class="title">Diligent Delivery</div>
        <div class="subtitle">
          Our dedicated delivery team works tirelessly to ensure that our food
          arrives at your door in the safest, speedy and most convenient manner
          possible.
        </div>
      </div>
      <div class="HygieneLov">
        <div class="title">Hygiene Lovers</div>
        <div class="subtitle">
          We offer our Utmost priority to hygiene and packaging. Using air tight
          plastic containers, we emphasize towards avoiding any contamination or
          spilling out of food by the time it gets to you. But don't worry, our
          cooperative support and after sales services are intact and available
          incase of any misfortunes.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.benefitsBody
    width: 100%
    height: 1021px
    filter: drop-shadow(0px 3px 8.5px rgba(0,0,0,0.17))
    background-color: #FFFFFF !important
    background: url('/home/septem/sass-project01/src/assets/background-benefits.png') no-repeat
    center center fixed
    background-size: 100% 100%
    .main
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .logo
            margin-top: 100px
            width: 35px
            height: 27px
            margin-bottom: 20px
        .title
            font-size: 30px
            letter-spacing: 4px
            color: #ffffff
            font-family: "Raleway"
            margin-bottom: 10px
        .curl
            width: 152px
            height: 17px
            margin-bottom: 20px
        .subtitle
            font-size: 17px
            color: #ffffff
            font-weight: 500
            font-family: "Work Sans"
            p
                text-align: center
                margin: 20px
    .gridBox
        display: flex
        flex-direction: row
        justify-content: space-around
        flex-wrap: wrap
        .eatHealthy
            margin-top: 50px
            margin-left: 70px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            width: 380px
            height: 244px
            border-radius: 30px
            filter: drop-shadow(0px 3px 8.5px rgba(0,0,0,0.06))
            background-image: radial-gradient(circle at center, #ffffff 0%, #e9e9e9 100%)
            border: 5px solid #ffffff
            .title
                font-size: 22px
                letter-spacing: 1px
                color: #333333
                font-weight: 600
                font-family: "Work Sans"
                text-align: center
                margin-bottom: 20px
            .subtitle
                margin-right: 10px
                margin-left: 10px
                font-size: 16px
                color: #424142
                font-weight: 400
                font-family: "Open Sans"
            &:hover
                cursor: pointer
                width: 380px
                height: 244px
                border-radius: 30px
                filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.14))
                background-image: none
                background-color: #00ccbb
                border: 5px solid #ffc400
                .title
                    font-size: 22px
                    letter-spacing: 1px
                    color: #fdfdfe
                    font-weight: 700
                    font-family: "Work Sans"
                    text-align: center
                .subtitle
                    font-size: 16px
                    color: #fdfdfe
                    font-weight: 400
                    font-family: "Open Sans"
        .sayNo
            margin-top: 50px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            width: 380px
            height: 244px
            border-radius: 30px
            filter: drop-shadow(0px 3px 8.5px rgba(0,0,0,0.06))
            background-image: radial-gradient(circle at center, #ffffff 0%, #e9e9e9 100%)
            border: 5px solid #ffffff
            .title
                font-size: 22px
                letter-spacing: 1px
                color: #333333
                font-weight: 600
                font-family: "Work Sans"
                text-align: center
                margin-bottom: 20px
            .subtitle
                margin-right: 10px
                margin-left: 10px
                font-size: 16px
                color: #424142
                font-weight: 400
                font-family: "Open Sans"
            &:hover
                cursor: pointer
                width: 380px
                height: 244px
                border-radius: 30px
                filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.14))
                background-image: none
                background-color: #00ccbb
                border: 5px solid #ffc400
                .title
                    font-size: 22px
                    letter-spacing: 1px
                    color: #fdfdfe
                    font-weight: 700
                    font-family: "Work Sans"
                    text-align: center
                .subtitle
                    font-size: 16px
                    color: #fdfdfe
                    font-weight: 400
                    font-family: "Open Sans"
        .diligentDelv
            margin-top: 50px
            margin-right: 70px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            width: 380px
            height: 244px
            border-radius: 30px
            filter: drop-shadow(0px 3px 8.5px rgba(0,0,0,0.06))
            background-image: radial-gradient(circle at center, #ffffff 0%, #e9e9e9 100%)
            border: 5px solid #ffffff
            .title
                font-size: 22px
                letter-spacing: 1px
                color: #333333
                font-weight: 600
                font-family: "Work Sans"
                text-align: center
                margin-bottom: 20px
            .subtitle
                margin-right: 10px
                margin-left: 10px
                font-size: 16px
                color: #424142
                font-weight: 400
                font-family: "Open Sans"
            &:hover
                cursor: pointer
                width: 380px
                height: 244px
                border-radius: 30px
                filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.14))
                background-image: none
                background-color: #00ccbb
                border: 5px solid #ffc400
                .title
                    font-size: 22px
                    letter-spacing: 1px
                    color: #fdfdfe
                    font-weight: 700
                    font-family: "Work Sans"
                    text-align: center
                .subtitle
                    font-size: 16px
                    color: #fdfdfe
                    font-weight: 400
                    font-family: "Open Sans"
        .HygieneLov
            margin-top: 50px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
            width: 1200px
            height: 252px
            border-radius: 30px
            filter: drop-shadow(0px 3px 8.5px rgba(0,0,0,0.06))
            background-image: radial-gradient(circle at center, #ffffff 0%, #e9e9e9 100%)
            border: 5px solid #ffffff
            .title
                font-size: 22px
                letter-spacing: 1px
                color: #333333
                font-weight: 600
                font-family: "Work Sans"
                text-align: center
                margin-bottom: 20px
            .subtitle
                margin-right: 10px
                margin-left: 10px
                font-size: 16px
                color: #424142
                font-weight: 400
                font-family: "Open Sans"
            &:hover
                cursor: pointer
                width: 1200px
                height: 252px
                border-radius: 30px
                filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.14))
                background-image: none
                background-color: #00ccbb
                border: 5px solid #ffc400
                .title
                    font-size: 22px
                    letter-spacing: 1px
                    color: #fdfdfe
                    font-weight: 700
                    font-family: "Work Sans"
                    text-align: center
                .subtitle
                    font-size: 16px
                    color: #fdfdfe
                    font-weight: 400
                    font-family: "Open Sans"

@media screen and (max-width: 1350px)
  .benefitsBody
      width: 100%
      height: 1594px
      .main
          .title
              font-size: 30px
              letter-spacing: 4px
          .subtitle
              width: 429px
              height: 133px
              font-size: 16px
              color: #ffffff
              font-weight: 500
              font-family: "Work Sans"
              text-align: center
      .gridBox
          display: flex
          flex-direction: row
          align-items: center
          justify-content: center
          flex-wrap: wrap
          .eatHealthy
              margin-top: 20px
              margin-right: 10px
              margin-left: 10px
              width: 430px
              height: 244px
              &:hover
                  width: 430px
                  height: 244px
          .sayNo
              margin-top: 20px
              margin-right: 10px
              margin-left: 10px
              width: 430px
              height: 244px
              &:hover
                  width: 430px
                  height: 244px
          .diligentDelv
              margin-top: 20px
              margin-right: 10px
              margin-left: 10px
              width: 430px
              height: 244px
              &:hover
                  width: 430px
                  height: 244px
          .HygieneLov
              margin-top: 20px
              margin-right: 10px
              margin-left: 10px
              width: 430px
              height: 244px
              &:hover
                  width: 430px
                  height: 244px
@media screen and (min-width: 950px)
  .benefitsBody
      width: 100%
      height: 1021px
</style>
