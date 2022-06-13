<template>
  <div class="FeaturedContainer">
    <div class="Main">
      <div class="logo">
        <img src="../assets/logo.svg" />
      </div>
      <div class="Title">Our Featured Menu</div>
      <div class="curl">
        <img src="../assets/Path-curly.svg" />
      </div>
    </div>
    <div class="TagMenu">
      <div class="Prev">
        <div class="circle">
          <img src="../assets/circle.svg" />
          <div class="line"><img src="../assets/Line.svg" /></div>
          <div class="arrow"><img src="../assets/arrow.svg" /></div>
        </div>
      </div>
      <div class="Haleem">
        <div class="HaleemImg">
          <img class="backgroundPath" src="../assets/Path6.svg" />
          <img class="togglePath" src="../assets/Path3.svg" />
          <img class="actual" src="../assets/testHaleem.svg" />
        </div>
        <div class="DishName">Haleem</div>
      </div>
      <div class="VegetableRice">
        <div class="RiceImg">
          <img class="backgroundRice" src="../assets/Path6.svg" />
          <img class="togglePath" src="../assets/Path3.svg" />
          <img class="actualRice" src="../assets/rice.svg" />
        </div>
        <div class="DishName">Vegetable Rice</div>
      </div>
      <div class="Briyani">
        <div class="BriyaniImg">
          <img class="backgroundBriyani" src="../assets/Path6.svg" />
          <img class="togglePath" src="../assets/Path3.svg" />
          <img class="actualBriyani" src="../assets/briyani2.png" />
        </div>
        <div class="DishName">Briyani</div>
      </div>
      <div class="Next">
        <div class="circle">
          <img src="../assets/circle.svg" />
          <div class="line"><img src="../assets/Line.svg" /></div>
          <div class="arrow"><img src="../assets/next.svg" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.FeaturedContainer
    width: 100%
    height: 632px
    background-color: #ffffff
    .Main
        padding-top: 50px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .logo
            padding: 20px
            margin-bottom: 20px
            width: 35px
            height: 27px
        .Title
            padding: 10px
            font-size: 30px
            letter-spacing: 4px
            color: #212121
            font-family: "Raleway"
        .curl
            padding:10px
    .TagMenu
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: center
        margin-top: 100px
        .Prev
            padding-left: 60px
            .circle
                position: relative
                top: 0
                left: 0
            .arrow
                position: absolute
                top: 15px
                right: 20px
            .line
                position: absolute
                top: 12px
                left: 25px
        .Next
            padding-right: 60px
            .circle
                position: relative
                top: 0
                right: 0
            .arrow
                position: absolute
                top: 15px
                left: 20px
            .line
                position: absolute
                top: 12px
                right: 25px
        .Haleem
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            width: 342px
            height: 236px
            border-radius: 30px
            filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
            background-color: #00ccbb
            border: 3px solid #ffffff
            position: relative
            top: 0
            left: 0
            .HaleemImg
                .togglePath
                    display: none
                .backgroundPath
                    position: absolute
                    top: -80px
                    left: 60px
                .actual
                    position: absolute
                    top: -75px
                    left: 64px
            .DishName
                text-transform: uppercase
                font-size: 20px
                color: #ffffff
                font-weight: 600
                font-family: "Montserrat"
            &:hover
                cursor: pointer
                order-radius: 30px
                filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                background-color: #ffffff
                border: 3px solid #ffc400
                .HaleemImg
                    .togglePath
                        display: block !important
                        position: absolute !important
                        top: -80px
                        left: 60px
                    .backgroundPath
                        display: none
                .DishName
                    color: #00ccbb
        .VegetableRice
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            width: 342px
            height: 236px
            border-radius: 30px
            filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
            background-color: #00ccbb
            border: 3px solid #ffffff
            position: relative
            top: 0
            left: 0
            .RiceImg
                .togglePath
                    display: none
                .backgroundRice
                    position: absolute
                    top: -80px
                    left: 60px
                .actualRice
                    position: absolute
                    top: -77px
                    left: 64px
            .DishName
                text-transform: uppercase
                font-size: 20px
                color: #ffffff
                font-weight: 600
                font-family: "Montserrat"
            &:hover
                cursor: pointer
                order-radius: 30px
                filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                background-color: #ffffff
                border: 3px solid #ffc400
                .RiceImg
                    .togglePath
                        display: block !important
                        position: absolute !important
                        top: -81px
                        left: 60px
                    .backgroundPath
                        display: none
                .DishName
                    color: #00ccbb

        .Briyani
            display: flex
            flex-direction: column
            justify-content: space-around
            align-items: center
            width: 342px
            height: 236px
            border-radius: 30px
            filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
            background-color: #00ccbb
            border: 3px solid #ffffff
            position: relative
            top: 0
            left: 0
            .BriyaniImg
                .togglePath
                    display: none
                .backgroundBriyani
                    position: absolute
                    top: -80px
                    left: 70px
                .actualBriyani
                    position: absolute
                    top: -92px
                    left: 38px
            .DishName
                text-transform: uppercase
                font-size: 20px
                color: #ffffff
                font-weight: 600
                font-family: "Montserrat"
            &:hover
                cursor: pointer
                order-radius: 30px
                filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                background-color: #ffffff
                border: 3px solid #ffc400
                .BriyaniImg
                    .togglePath
                        display: block !important
                        position: absolute !important
                        top: -80px
                        left: 70px
                    .backgroundPath
                        display: none
                .DishName
                    color: #00ccbb
@media screen and (max-width: 1250px)
    .FeaturedContainer
      width: 100%
      height: 632px
      background-color: #ffffff
      .Main
        padding-top: 50px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .logo
            padding: 20px
            margin-bottom: 20px
            width: 35px
            height: 27px
        .Title
            padding: 10px
            font-size: 30px
            letter-spacing: 4px
            color: #212121
            font-family: "Raleway"
        .curl
            padding:10px
      .TagMenu
          display: flex
          flex-direction: row
          justify-content: space-around
          align-items: center
          margin-top: 100px
          .Prev
              padding-left: 20px
              .circle
                  position: relative
                  top: 0
                  left: 0
              .arrow
                  position: absolute
                  top: 15px
                  right: 20px
                  .line
                      position: absolute
                      top: 12px
                      left: 25px
          .Next
              padding-right: 20px
              .circle
                  position: relative
                  top: 0
                  right: 0
                  .arrow
                      position: absolute
                      top: 15px
                      left: 20px
                  .line
                      position: absolute
                      top: 12px
                      right: 25px
          .Haleem
                margin-left: 20px
                margin-right: 20px
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                width: 270px
                height: 186px
                border-radius: 30px
                filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                background-color: #00ccbb
                border: 3px solid #ffffff
                position: relative
                top: 0
                left: 0
                .HaleemImg
                    .backgroundPath
                        position: absolute
                        top: -70px
                        left: 38px
                        width: 70%
                    .actual
                        position: absolute
                        top: -65px
                        left: 43px
                        width: 66%
                .DishName
                    text-transform: uppercase
                    font-size: 20px
                    color: #ffffff
                    font-weight: 600
                    font-family: "Montserrat"
                &:hover
                    cursor: pointer
                    order-radius: 30px
                    filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                    background-color: #ffffff
                    border: 3px solid #ffc400
                    .HaleemImg
                        .togglePath
                            display: block !important
                            position: absolute !important
                            top: -70px
                            left: 38px
                            width: 70%
                        .backgroundPath
                            display: none
                    .DishName
                        color: #00ccbb
          .VegetableRice
                margin-left: 20px
                margin-right: 20px
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                width: 270px
                height: 186px
                border-radius: 30px
                filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                background-color: #00ccbb
                border: 3px solid #ffffff
                position: relative
                top: 0
                left: 0
                .RiceImg
                    .backgroundRice
                        position: absolute
                        top: -70px
                        left: 38px
                        width: 70%
                    .actualRice
                        position: absolute
                        top: -65px
                        left: 43px
                        width: 66%
                .DishName
                    text-transform: uppercase
                    font-size: 20px
                    color: #ffffff
                    font-weight: 600
                    font-family: "Montserrat"
                &:hover
                    cursor: pointer
                    order-radius: 30px
                    filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                    background-color: #ffffff
                    border: 3px solid #ffc400
                    .RiceImg
                        .togglePath
                            display: block !important
                            position: absolute !important
                            top: -70px
                            left: 38px
                            width: 70%
                        .backgroundRice
                            display: none
                        .backgroundPath
                            display: none
                    .DishName
                        color: #00ccbb
          .Briyani
              display: none
@media screen and (max-width: 840px)
    .FeaturedContainer
      width: 100%
      height: 632px
      background-color: #ffffff
      .Main
        padding-top: 50px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        .logo
            padding: 20px
            margin-bottom: 20px
            width: 35px
            height: 27px
        .Title
            padding: 10px
            font-size: 30px
            letter-spacing: 4px
            color: #212121
            font-family: "Raleway"
        .curl
            padding:10px
      .TagMenu
          display: flex
          flex-direction: row
          justify-content: space-around
          align-items: center
          margin-top: 100px
          .Prev
              padding-left: 20px
              .circle
                  position: relative
                  top: 0
                  left: 0
              .arrow
                  position: absolute
                  top: 15px
                  right: 20px
                  .line
                      position: absolute
                      top: 12px
                      left: 25px
          .Next
              padding-right: 20px
              .circle
                  position: relative
                  top: 0
                  right: 0
                  .arrow
                      position: absolute
                      top: 15px
                      left: 20px
                  .line
                      position: absolute
                      top: 12px
                      right: 25px
          .Haleem
              margin-left: 20px
              margin-right: 20px
              display: flex
              flex-direction: column
              justify-content: space-around
              align-items: center
              width: 270px
              height: 186px
              border-radius: 30px
              filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
              background-color: #00ccbb
              border: 3px solid #ffffff
              position: relative
              top: 0
              left: 0
              .HaleemImg
                  .backgroundPath
                      position: absolute
                      top: -70px
                      left: 38px
                      width: 70%
                      // height: 121px
                  .actual
                      position: absolute
                      top: -65px
                      left: 43px
                      width: 66%
              .DishName
                  text-transform: uppercase
                  font-size: 20px
                  color: #ffffff
                  font-weight: 600
                  font-family: "Montserrat"
                  &:hover
                      cursor: pointer
                      order-radius: 30px
                      filter: drop-shadow(0 0 26px rgba(0,0,0,0.13))
                      background-color: #ffffff
                      border: 3px solid #ffc400
                      .DishName
                          color: #00ccbb
          .VegetableRice
              display: none
          .Briyani
              display: none
</style>
