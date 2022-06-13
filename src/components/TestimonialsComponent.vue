<template>
  <div class="testimonial-body">
    <div class="main">
      <div class="logo"><img src="../assets/logo.svg" /></div>
      <div class="title">Testimonials</div>
      <div class="curl">
        <img src="../assets/Path-curly.svg" />
      </div>
      <div class="description">
        <p>
          Our care for you is exactly how we care for ourselves. Constant
          experiencing of unsatisfying lunch delivery services, led to
          itsmylunch. Why not provide you with the ultimate ease of having a
          delicious lunch the way we prefer? The good way? Don’t worry, we’vegot
          you covered.
        </p>
      </div>
    </div>
    <div class="row-body">
      <div class="prev-arrow"><img src="../assets/prev-arrow.svg" /></div>
      <div class="profile">
        <div class="profileImg">
          <img class="bg-img" src="../assets/profile-bg.svg" /><img
            class="actual-img"
            src="../assets/profile.png"
          />
        </div>
        <div class="name">Talal Anwar</div>
        <div class="designation">CEO</div>
      </div>
      <div class="next-arrow"><img src="../assets/next-arrow.svg" /></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.testimonial-body
    width: 100%
    height: 632px
    background-color: #ffffff
    .main
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        .logo
            margin-top: 50px
        .title
            margin: 20px 0 0 0
            font-size: 30px
            letter-spacing: 4px
            color: #333333
            font-family: "Raleway"
        .curl
            margin: 20px 0 0 0
        .description
            text-align: center
            margin: 20px 150px 0 150px
            font-size: 17px
            color: #666666
            font-weight: 500
            font-family: "Work Sans"
    .row-body
        margin-top: 50px
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        .prev-arrow
            margin-left: 50px
        .profile
            display: flex
            flex-direction: column
            align-items: center
            // justify-content: center
            .profileImg
                margin: 20px 0 0 0
                display: flex
                flex-direction: column
                align-items: center
                justify-content: center
                // position: relative
                // top: 0
                // left: 0
                // .bg-img
                //     position: absolute
                //     top: 0
                //     left: 0
                .bg-img
                    position: absolute
                    top: 30px
                    left: 0
                .actual-img
                    position: relative
                    top: 0
                    left: 0
            .name
                margin: 20px 0 0 0
                font-size: 20px
                color: #00ccbb
                font-family: "Raleway"
            .designation
                margin: 20px 0 0 0
                font-size: 18px
                color: #000000
                font-family: "Raleway"
        .next-arrow
            margin-right: 50px
@media screen and (max-width: 768px)
    .testimonial-body
        height: auto
        width: 100%
        .main
            .title
                font-size: 30px
            .description
                font-size: 16px
                width: 430px
                height: 125px
            .row-body
                .profile
                    .name
                        font-size: 20px
                    .designation
                        font-size: 17px
</style>
