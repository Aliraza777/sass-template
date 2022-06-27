<template>
  <div class="container">
    <div class="Main">
      <div>
        <img class="logo" src="../assets/logo.svg" />
      </div>
      <div class="mainText">Contact Us</div>
      <div>
        <img class="curly-path" src="../assets/Path-curly.svg" />
      </div>
      <p>Satisfaction will be delivered</p>
    </div>
    <div class="Data">
      <form @submit.prevent="submit()" class="OrderPlacement" action="POST">
        <div class="inputs">
          <div class="form-group">
            <label for="name">Name</label>
            <br />
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Please write your name here"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <br />
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="email"
              placeholder="Please write your email here"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              hint="example@gmail.com"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <br />
            <input
              v-model="phone"
              type="text"
              class="form-control"
              id="phone"
              placeholder="Please write your phone number here"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              hint="1234567890"
            />
          </div>
          <div class="form-group">
            <label for="people">Number of people</label>
            <br />
            <input
              v-model="people"
              type="number"
              class="form-control"
              id="people"
              placeholder="Please write the number of people here"
              pattern="[0-9]{1,}"
              hint="0 or more"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <br />
            <textarea
              v-model="message"
              class="form-control"
              id="message"
              rows="3"
              placeholder="Please write your message here"
              pattern="[a-zA-Z0-9]{1,}"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "OrderPlacement",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      people: "",
      message: "",
    };
  },
  methods: {
    submit() {
      axios
        .post("https://formspree.io/f/xbjwepoo", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          people: this.people,
          message: this.message,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // this.name = this.name.trim();
      this.name = "";
      this.email = "";
      this.phone = "";
      this.people = "";
      this.message = "";
      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      console.log(this.people);
      console.log(this.message);
      alert(
        "Thank you for your message! Your Message has been sent successfully!"
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.container
    width: 100%
    height: 930px
    // background-color: #c9f9f5
    // background-image: radial-gradient(circle at center, #00f2de 0%, #00ccbb 100%)
    background: url('/home/septem/sass-project01/src/assets/backgroundForm.png') no-repeat
    center center fixed
    background-size: 100% 100%
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
            color: #333333
            font-family: "Raleway"
        .curly-path
            padding:10px
            width: 212px
            height: 17px
        p
            font-size: 18px
            color: #424142
            font-family: "Raleway"
    .Data
        // display: flex
        // flex-direction: column
        // align-items: center
        // justify-content: space-around

        .OrderPlacement
            justify-content: center
            .inputs
                justify-content: center
                display: flex
                margin: 50px
                flex-wrap: wrap
                .form-group
                    padding: 10px
                    font-size: 16px
                    color: #333333
                    font-weight: 500
                    font-family: "Montserrat"
                    #name
                        width: 585px
                        height: 48px
                        border-radius: 9px
                        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05))
                        background-color: #ffffff
                        border: 2px solid #81c5ff
                        padding: 10px
                        margin-bottom: 20px
                        ::placeholder
                            color: #b3b3b3
                            font-family: "Montserrat"
                    #email
                        width: 585px
                        height: 48px
                        border-radius: 9px
                        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05))
                        background-color: #ffffff
                        border: 2px solid #81c5ff
                        padding: 10px
                        margin-bottom: 20px
                        ::placeholder
                            color: #b3b3b3
                            font-family: "Montserrat"
                    #phone
                        width: 585px
                        height: 48px
                        border-radius: 9px
                        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05))
                        background-color: #ffffff
                        border: 2px solid #81c5ff
                        padding: 10px
                        margin-bottom: 20px
                        ::placeholder
                            color: #b3b3b3
                            font-family: "Montserrat"
                    #people
                        width: 585px
                        height: 48px
                        border-radius: 9px
                        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05))
                        background-color: #ffffff
                        border: 2px solid #81c5ff
                        padding: 10px
                        margin-bottom: 20px
                        ::placeholder
                            color: #b3b3b3
                            font-family: "Montserrat"
                    #message
                        padding: 10px
                        width: 1200px
                        height: 115px
                        border-radius: 9px
                        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.05))
                        background-color: #ffffff
                        border: 2px solid #81c5ff
                        ::placeholder
                            color: #b3b3b3
                            font-family: "Montserrat"
            .btn-primary
                float: right
                margin: 0 90px 50px 0
                width: 163px
                height: 48px
                border-radius: 11px
                filter: drop-shadow(0px 18px 11.5px rgba(19,164,186,0.34))
                background-color: #00ccbb

@media screen and (max-width: 1380px)
  .container
      width: 100%
      height: 1001px
       background: url('/home/septem/sass-project01/src/assets/backgroundForm.png') no-repeat
      center center fixed
      background-size: 100% 100%
      background-color: #ffffff
      margin-bottom: 0
      .Main
          padding-top: 50px
          margin: 0
      .Data
          margin: 0
          display: flex
          flex-direction: column
          align-items: center
          justify-content: space-around
          .OrderPlacement
              margin: 0 90px 0 90px
              display: flex
              flex-direction: column
              align-items: center
              justify-content: space-between
              .inputs
                  margin: 0px

                  // padding: 0px
                  // justify-content: center
                  // display: flex
                  // flex-direction: column
                  .form-group
                      margin-top: 10px
                      padding: 0px
                      #name
                          margin: 0
                          width: 430px
                          height: 48px
                          border-radius: 9px
                      #email
                          margin: 0
                          width: 430px
                          height: 48px
                          border-radius: 9px
                      #phone
                          margin: 0
                          width: 430px
                          height: 48px
                          border-radius: 9px
                      #people
                          margin: 0
                          width: 430px
                          height: 48px
                          border-radius: 9px
                      #message
                          margin: 0
                          width: 430px
                          height: 115px
                          border-radius: 9px
              .btn-primary
                  margin: 50px 0 0 0

                  width: 163px
                  height: 48px
                  border-radius: 11px
                  filter: drop-shadow(0px 18px 11.5px rgba(19,164,186,0.34))
                  background-color: #00ccbb
</style>
