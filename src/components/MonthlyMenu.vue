<template>
  <div>
    <div class="container">
      <div class="Main">
        <div>
          <img class="logo" src="../assets/whiteLogo.svg" />
        </div>
        <div class="mainText">Monthly Based Menu</div>
        <div>
          <img class="curly-path" src="../assets/Path.svg" />
        </div>
        <div class="submitBtn">
          <div class="btn">6000.00/Month</div>
        </div>
      </div>
      <div class="weeks">
        <div class="weekname">
          <div class="week0"></div>
          <div class="week1">week1</div>
          <div class="week2">week2</div>
          <div class="week3">week3</div>
          <div class="week4">week4</div>
        </div>
        <div class="days">
          <div class="monday">
            <div class="title">
              <div class="day">Monday</div>
              <div class="curl"><img src="../assets/Path_days.svg" /></div>
            </div>
            <div class="dishes">
              <div class="dish1">
                <div class="dishImg">
                  <img src="../assets/manchorian.svg" />
                </div>
                <div class="dishname">Chicken Manchurian</div>
              </div>
              <div class="dish2">
                <div class="dishImg">
                  <img src="../assets/manchorian.svg" />
                </div>
                <div class="dishname">Chicken Chilli Dry</div>
              </div>
              <div class="dish3">
                <div class="dishImg">
                  <img src="../assets/manchorian.svg" />
                </div>
                <div class="dishname">Black Pepper Chicken</div>
              </div>
              <div class="dish4">
                <div class="dishImg">
                  <img src="../assets/manchorian.svg" />
                </div>
                <div class="dishname">Chicken Manchurian</div>
              </div>
            </div>
          </div>
          <div class="tuesday">
            <div class="title">
              <div class="day">Tuesday</div>
              <div class="curl"><img src="../assets/Path_days.svg" /></div>
            </div>
            <div class="dishes">
              <div class="dish1">
                <div class="dishImg">
                  <img src="../assets/curry-pakora.svg" />
                </div>
                <div class="dishname">Curry Pakora</div>
              </div>
              <div class="dish2">
                <div class="dishImg">
                  <img src="../assets/curry-pakora.svg" />
                </div>
                <div class="dishname">Palak Paneer</div>
              </div>
              <div class="dish3">
                <div class="dishImg">
                  <img src="../assets/curry-pakora.svg" />
                </div>
                <div class="dishname">Daal Maash</div>
              </div>
              <div class="dish4">
                <div class="dishImg">
                  <img src="../assets/curry-pakora.svg" />
                </div>
                <div class="dishname">Palak Paneer</div>
              </div>
            </div>
          </div>
          <div class="wednesday">
            <div class="title">
              <div class="day">Wednesday</div>
              <div class="curl"><img src="../assets/Path_days.svg" /></div>
            </div>
            <div class="dishes">
              <div class="dish1">
                <div class="dishImg">
                  <img src="../assets/chickenhaleem.svg" />
                </div>
                <div class="dishname">Chicken Haleem</div>
              </div>
              <div class="dish2">
                <div class="dishImg">
                  <img src="../assets/chickenhaleem.svg" />
                </div>
                <div class="dishname">Alo / Chicken Paratha</div>
              </div>
              <div class="dish3">
                <div class="dishImg">
                  <img src="../assets/chickenhaleem.svg" />
                </div>
                <div class="dishname">BBQ</div>
              </div>
              <div class="dish4">
                <div class="dishImg">
                  <img src="../assets/chickenhaleem.svg" />
                </div>
                <div class="dishname">Alo / Chicken Paratha</div>
              </div>
            </div>
          </div>
          <div class="thursday">
            <div class="title">
              <div class="day">Thursday</div>
              <div class="curl"><img src="../assets/Path_days.svg" /></div>
            </div>
            <div class="dishes">
              <div class="dish1">
                <div class="dishImg">
                  <img src="../assets/chickenkarahi.svg" />
                </div>
                <div class="dishname">Chicken Karhai</div>
              </div>
              <div class="dish2">
                <div class="dishImg">
                  <img src="../assets/chickenkarahi.svg" />
                </div>
                <div class="dishname">Black Pepper Karhai</div>
              </div>
              <div class="dish3">
                <div class="dishImg">
                  <img src="../assets/chickenkarahi.svg" />
                </div>
                <div class="dishname">Anda Kofta</div>
              </div>
              <div class="dish4">
                <div class="dishImg">
                  <img src="../assets/chickenkarahi.svg" />
                </div>
                <div class="dishname">Chicken Korma</div>
              </div>
            </div>
          </div>
          <div class="friday">
            <div class="title">
              <div class="day">Friday</div>
              <div class="curl"><img src="../assets/Path_days.svg" /></div>
            </div>
            <div class="dishes">
              <div class="dish1">
                <div class="dishImg">
                  <img src="../assets/chickenbiryani.png" />
                </div>
                <div class="dishname">Chicken Briyani</div>
              </div>
              <div class="dish2">
                <div class="dishImg">
                  <img src="../assets/chickenbiryani.png" />
                </div>
                <div class="dishname">Chicken Pulao</div>
              </div>
              <div class="dish3">
                <div class="dishImg">
                  <img src="../assets/chickenbiryani.png" />
                </div>
                <div class="dishname">Chicken Briyani</div>
              </div>
              <div class="dish4">
                <div class="dishImg">
                  <img src="../assets/chickenbiryani.png" />
                </div>
                <div class="dishname">Chicken Daal Chana with Rice</div>
              </div>
            </div>
          </div>
        </div>
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
    height: 1219px
    filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.16))
    background: url('/home/septem/sass-project01/src/assets/backgroud.png') no-repeat
    center center fixed
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
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
            color: #ffffff
            font-family: "Raleway"
        .curly-path
            padding:10px
            width: 314px
            height: 17px
        .submitBtn
            width: 268px
            height: 57px
            border-radius: 11px
            filter: drop-shadow(0px 15px 11.5px rgba(0,0,0,0.16))
            background-color: #ffc400
            border: 3px solid #ffffff
            .btn
                margin-top: 15px
                text-align: center
                font-size: 23px
                letter-spacing: 3px
                color: #ffffff
                font-weight: 400
                font-family: "Rubik"
                &:hover
                    cursor: pointer
    .weeks
        margin-top: 60px
        .weekname
            text-transform: capitalize
            display: flex
            flex-direction: row
            justify-content: space-around
            align-items: center
            font-size: 33px
            letter-spacing: 1px
            color: #ffffff
            font-family: "Raleway"
        .days
            .monday
                margin-top: 60px
                display: flex
                flex-direction: row
                justify-content: space-around
                align-items: center
                .title
                    margin-left: 25px
                    margin-right: 25px
                    .day
                        font-size: 18px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .curl
                        width: 69px
                        height: 8px
                .dishes
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: center
                    .dish1
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish2
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 11px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish3
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 10px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish4
                        margin-left: 25px
                        margin-right: 25px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
            .tuesday
                display: flex
                flex-direction: row
                justify-content: space-around
                align-items: center
                margin-top: 60px
                .title
                    margin-left: 25px
                    margin-right: 25px
                    .day
                        font-size: 18px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .curl
                        width: 69px
                        height: 8px
                .dishes
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: center
                    .dish1
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish2
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 11px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish3
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 10px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish4
                        margin-left: 25px
                        margin-right: 25px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px

            .wednesday
                margin-top: 60px
                display: flex
                flex-direction: row
                justify-content: space-around
                align-items: center
                .title
                    margin-left: 25px
                    margin-right: 25px
                    .day
                        font-size: 18px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .curl
                        width: 69px
                        height: 8px
                .dishes
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: center
                    .dish1
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish2
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 11px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish3
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 10px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish4
                        margin-left: 25px
                        margin-right: 25px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
            .thursday
                display: flex
                flex-direction: row
                justify-content: space-around
                align-items: center
                margin-top: 60px
                .title
                    margin-left: 25px
                    margin-right: 25px
                    .day
                        font-size: 18px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .curl
                        width: 69px
                        height: 8px
                .dishes
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: center
                    .dish1
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish2
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 11px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish3
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 10px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish4
                        margin-left: 25px
                        margin-right: 25px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
            .friday
                display: flex
                flex-direction: row
                justify-content: space-around
                align-items: center
                margin-top: 60px
                .title
                    margin-left: 25px
                    margin-right: 25px
                    .day
                        font-size: 18px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .curl
                        width: 69px
                        height: 8px
                .dishes
                    display: flex
                    flex-direction: row
                    justify-content: space-between
                    align-items: center
                    .dish1
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish2
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 11px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish3
                        margin-left: 30px
                        margin-right: 30px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #37b2a4
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 10px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
                    .dish4
                        margin-left: 25px
                        margin-right: 25px
                        width: 230px
                        height: 79px
                        border-radius: 10px
                        filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                        background-color: #ffffff
                        border: 3px solid #ffc400
                        position: relative
                        top: 0
                        left: 0
                        .dishname
                            margin-top: 15px
                            padding: 30px
                            text-align: center
                            font-size: 16px
                            color: #000000
                            font-family: "Raleway"
                        .dishImg
                            position: absolute
                            top: -20px
                            left: 85px
</style>
