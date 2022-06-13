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
    <div class="rowBody">
      <div class="prev-arrow"></div>
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
</style>
