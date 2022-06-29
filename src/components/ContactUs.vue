<template>
  <div id="contact-us">
    <div class="contactus-body">
      <div class="logo">
        <img src="../assets/whiteLogo.svg" />
        <p>It's my Lunch</p>
      </div>
      <div class="overview">
        <div class="title">Overview</div>
        <div class="menu">Menu</div>
        <div class="contactus">Contact us</div>
        <div class="featured">Featured Menu</div>
      </div>
      <div class="contact-us">
        <div class="title">Contact Us</div>
        <div class="location">
          <img src="../assets/placeholder.svg" />
          <p>31-Queens Road, Lahore</p>
        </div>
        <div class="phone">
          <img src="../assets/phone.svg" />
          <p>
            Office: 0321-6587432 <br />
            Mobile: 0321-1524751
          </p>
        </div>
        <div class="email">
          <font-awesome-icon icon="fa fa-envelope"> </font-awesome-icon>
          <p>itsmylunch@live.com</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="text">
        © 2019 - 2021, It’s My Lunch, Septem Systems. ALL RIGHT RESERVED
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.contactus-body
    width: 100%
    height: 272px
    background-color: #00ccbb
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    .logo
        img
            width: 67px
            height: 52px
        p
            font-size: 27px
            color: #ffffff
            font-family: "Rounded"
    .overview
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: start
        .title
            margin-bottom: 50px
            font-size: 16px
            color: #ffffff
            font-weight: 600
            font-family: "Montserrat"
        .menu
            margin-bottom: 20px
            font-size: 15px
            color: #ffffff
            font-weight: 500
            font-family: "Montserrat"
        .contactus
            margin-bottom: 20px
            font-size: 15px
            color: #ffffff
            font-weight: 500
            font-family: "Montserrat"
        .featured
            margin-bottom: 20px
            font-size: 15px
            color: #ffffff
            font-weight: 500
            font-family: "Montserrat"
    .contact-us
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: start
        .title
            margin-bottom: 20px
            font-size: 16px
            color: #ffffff
            font-weight: 600
            font-family: "Montserrat"
        .location
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            img
                margin: 0 20px 0 0
                width: 20px
                height: 20px
            p
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"
        .phone
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            img
                margin: 0 20px 0 0
                width: 20px
                height: 20px
            p
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"
        .email
            color: #ffffff
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center

            // font-awesome-icon
            //     margin: 0 20px 0 0
            //     width: 20px
            //     height: 20px
            p
                margin: 0 0 0 20px
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"

.footer
    width: 100%
    height: 67px
    background-color: #01a194
    display: flex
    justify-content: center
    align-items: center

    .text
        text-align: center
        font-size: 15px
        color: #ffffff
        font-weight: 400
        font-family: "Montserrat"

@media screen and (max-width: 799px)
    .contactus-body
        width: 100%
        height: 563px
        flex-direction: column
        align-content: center
        .logo
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center

            img
                width: 67px
                height: 52px
            p
                font-size: 27px
                color: #ffffff
                font-family: "Rounded"
        .overview
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: start
            margin-right: 90px
            .title
                margin-bottom: 50px
                font-size: 16px
                color: #ffffff
                font-weight: 600
                font-family: "Montserrat"
            .menu
                margin-bottom: 20px
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"
            .contactus
                margin-bottom: 20px
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"
            .featured
                margin-bottom: 20px
                font-size: 15px
                color: #ffffff
                font-weight: 500
                font-family: "Montserrat"
        .contact-us
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: start
            .title
                margin-bottom: 20px
                font-size: 16px
                color: #ffffff
                font-weight: 600
                font-family: "Montserrat"
            .location
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center
                img
                    margin: 0 20px 0 0
                    width: 20px
                    height: 20px
                p
                    font-size: 15px
                    color: #ffffff
                    font-weight: 500
                    font-family: "Montserrat"
            .phone
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center
                img
                    margin: 0 20px 0 0
                    width: 20px
                    height: 20px
                p
                    font-size: 15px
                    color: #ffffff
                    font-weight: 500
                    font-family: "Montserrat"
            .email
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center
                p
                    margin: 0 0 0 20px
                    font-size: 15px
                    color: #ffffff
                    font-weight: 500
                    font-family: "Montserrat"
</style>
