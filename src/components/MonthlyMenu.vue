<template>
  <div>
    <div class="container" style="background-color: aliceblue">
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
      <div class="tagRow">
        <div class="toggleweeks">
          <div class="toggleweek">
            <div class="weekTitle">Week 1</div>
            <div class="toggledaywithdish">
              <div class="toggledays">
                <div class="toggleday">
                  <div class="daytitle">Monday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Tuesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Wednesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Thursday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Friday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
              </div>
              <div class="toggledishes">
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '1' && dish.day === '1'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '1' && dish.day === '2'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '1' && dish.day === '3'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '1' && dish.day === '4'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '1' && dish.day === '5'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="toggleSeparator">
              <img src="../assets/curl-separation.svg" />
            </div>
          </div>
          <div class="toggleweek">
            <div class="weekTitle">Week 2</div>
            <div class="toggledaywithdish">
              <div class="toggledays">
                <div class="toggleday">
                  <div class="daytitle">Monday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Tuesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Wednesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Thursday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Friday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
              </div>
              <div class="toggledishes">
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '2' && dish.day === '1'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '2' && dish.day === '2'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '2' && dish.day === '3'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '2' && dish.day === '4'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '2' && dish.day === '5'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="toggleSeparator">
              <img src="../assets/curl-separation.svg" />
            </div>
          </div>
          <div class="toggleweek">
            <div class="weekTitle">Week 3</div>
            <div class="toggledaywithdish">
              <div class="toggledays">
                <div class="toggleday">
                  <div class="daytitle">Monday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Tuesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Wednesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Thursday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Friday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
              </div>
              <div class="toggledishes">
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '3' && dish.day === '1'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '3' && dish.day === '2'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '3' && dish.day === '3'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '3' && dish.day === '4'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '3' && dish.day === '5'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="toggleSeparator">
              <img src="../assets/curl-separation.svg" />
            </div>
          </div>
          <div class="toggleweek">
            <div class="weekTitle">Week 4</div>
            <div class="toggledaywithdish">
              <div class="toggledays">
                <div class="toggleday">
                  <div class="daytitle">Monday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Tuesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Wednesday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Thursday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
                <div class="toggleday">
                  <div class="daytitle">Friday</div>
                  <div class="curl"><img src="../assets/Path_days.svg" /></div>
                </div>
              </div>
              <div class="toggledishes">
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '4' && dish.day === '1'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '4' && dish.day === '2'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '4' && dish.day === '3'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '4' && dish.day === '4'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
                <div class="toggledish">
                  <div v-for="dish in allDishes" :key="dish.id">
                    <div v-if="dish.week === '4' && dish.day === '5'">
                      <div class="dishpic">
                        <img :src="dish.img" />
                      </div>
                      <div class="dishtitle">{{ dish.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="toggleSeparator">
              <img src="../assets/curl-separation.svg" />
            </div>
          </div>
        </div>
        <div class="days">
          <div class="day"></div>
          <div class="day">
            <div class="title">Monday</div>
            <div class="curl"><img src="../assets/Path_days.svg" /></div>
          </div>
          <div class="day">
            <div class="title">Tuesday</div>
            <div class="curl"><img src="../assets/Path_days.svg" /></div>
          </div>
          <div class="day">
            <div class="title">Wednesday</div>
            <div class="curl"><img src="../assets/Path_days.svg" /></div>
          </div>
          <div class="day">
            <div class="title">Thursday</div>
            <div class="curl"><img src="../assets/Path_days.svg" /></div>
          </div>
          <div class="day">
            <div class="title">Friday</div>
            <div class="curl"><img src="../assets/Path_days.svg" /></div>
          </div>
        </div>
        <div class="weeks">
          <div class="week1">
            <div class="weektitle">Week 1</div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '1' && dish.day === '1'"
                  class="dishImg"
                >
                  <img v-bind:src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '1' && dish.day === '1'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '1' && dish.day === '2'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '1' && dish.day === '2'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '1' && dish.day === '3'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '1' && dish.day === '3'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '1' && dish.day === '4'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '1' && dish.day === '4'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '1' && dish.day === '5'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '1' && dish.day === '5'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="week2">
            <div class="weektitle">Week 2</div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '2' && dish.day === '1'"
                  class="dishImg"
                >
                  <img v-bind:src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '2' && dish.day === '1'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '2' && dish.day === '2'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '2' && dish.day === '2'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '2' && dish.day === '3'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '2' && dish.day === '3'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '2' && dish.day === '4'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '2' && dish.day === '4'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '2' && dish.day === '5'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '2' && dish.day === '5'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="week3">
            <div class="weektitle">Week 3</div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '3' && dish.day === '1'"
                  class="dishImg"
                >
                  <img v-bind:src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '3' && dish.day === '1'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '3' && dish.day === '2'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '3' && dish.day === '2'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '3' && dish.day === '3'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '3' && dish.day === '3'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '3' && dish.day === '4'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '3' && dish.day === '4'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '3' && dish.day === '5'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '3' && dish.day === '5'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="week4">
            <div class="weektitle">Week 4</div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '4' && dish.day === '1'"
                  class="dishImg"
                >
                  <img v-bind:src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '4' && dish.day === '1'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '4' && dish.day === '2'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '4' && dish.day === '2'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '4' && dish.day === '3'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '4' && dish.day === '3'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '4' && dish.day === '4'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '4' && dish.day === '4'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
            <div class="dish">
              <div v-for="dish in allDishes" :key="dish.id">
                <div
                  v-if="dish.week === '4' && dish.day === '5'"
                  class="dishImg"
                >
                  <img :src="dish.img" />
                </div>
                <div
                  v-if="dish.week === '4' && dish.day === '5'"
                  class="dishName"
                >
                  {{ dish.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      data: null,
      featured: null,
    };
  },
  methods: {
    ...mapActions(["fetchDishes"]),
  },
  computed: mapGetters(["allDishes"]),
  created() {
    this.fetchDishes();
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:5000/dishes/")
  //     .then((response) => {
  //       console.log(response.data);
  //       this.data = response.data;
  //       // this.dishes.name = response.data.name;
  //       // this.dishes.Image = response.data.Image;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style lang="sass" scoped>
.container
    width: 100%
    height: 1219px
    filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.16))
    background-image: radial-gradient(circle at center, #00f2de 0%, #00ccbb 100%)
    background: url('/home/septem/sass-project01/src/assets/backgroud.png') no-repeat
    center center fixed
    background-size: 100% 100%
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
    .tagRow
        position: relative
        display: flex
        flex-direction: row
        align-items: center
        justify-content: center
        margin-top: 50px
        .toggleweeks
            display: none
        .days
            display: flex
            flex-direction: column
            align-items: space-between
            .day
                margin: 40px
                padding: 10px
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                .title
                    font-size: 18px
                    letter-spacing: 1px
                    color: #ffffff
                    font-family: "Raleway"
                .curl
                    width: 69px
                    height: 8px
        .weeks
            display: flex
            flex-direction: row
            justify-content: center
            align-items: center
            .week1
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                // margin: 50px
                margin-right: 30px
                .weektitle
                    font-size: 33px
                    letter-spacing: 1px
                    color: #ffffff
                    font-family: "Raleway"
                .dish
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    align-items: center
                    margin-top: 50px
                    width: 230px
                    height: 79px
                    border-radius: 10px
                    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                    background-color: #ffffff
                    border: 3px solid #37b2a4
                    text-align: center
                    position: relative
                    top: 0
                    left: 0
                    .dishImg
                        position: absolute
                        top: -30%
                        left: 35%
                        width: 75px
                        img
                            width: 70%
                    .dishName
                        margin-top: 40px
                        font-size: 16px
                        color: #000000
                        font-family: "Raleway"
            .week2
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                // margin: 50px
                margin-right: 30px
                .weektitle
                    font-size: 33px
                    letter-spacing: 1px
                    color: #ffffff
                    font-family: "Raleway"
                .dish
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    align-items: center
                    margin-top: 50px
                    width: 230px
                    height: 79px
                    border-radius: 11px
                    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                    background-color: #ffffff
                    border: 3px solid #ffc400
                    text-align: center
                    position: relative
                    top: 0
                    left: 0
                    .dishImg
                        position: absolute
                        top: -30%
                        left: 35%
                        width: 75px
                        img
                            width: 70%
                    .dishName
                        margin-top: 40px
                        font-size: 16px
                        color: #000000
                        font-family: "Raleway"
            .week3
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                // margin: 50px
                margin-right: 30px
                .weektitle
                    font-size: 33px
                    letter-spacing: 1px
                    color: #ffffff
                    font-family: "Raleway"
                .dish
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    align-items: center
                    margin-top: 50px
                    width: 230px
                    height: 79px
                    border-radius: 10px
                    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                    background-color: #ffffff
                    border: 3px solid #37b2a4
                    text-align: center
                    position: relative
                    top: 0
                    left: 0
                    .dishImg
                        position: absolute
                        top: -30%
                        left: 35%
                        width: 75px
                        img
                            width: 70%
                    .dishName
                        margin-top: 40px
                        font-size: 16px
                        color: #000000
                        font-family: "Raleway"
            .week4
                display: flex
                flex-direction: column
                justify-content: space-around
                align-items: center
                // margin: 50px
                margin-right: 30px
                .weektitle
                    font-size: 33px
                    letter-spacing: 1px
                    color: #ffffff
                    font-family: "Raleway"
                .dish
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    align-items: center
                    margin-top: 50px
                    width: 230px
                    height: 79px
                    border-radius: 11px
                    filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                    background-color: #ffffff
                    border: 3px solid #ffc400
                    text-align: center
                    position: relative
                    top: 0
                    left: 0
                    .dishImg
                        position: absolute
                        top: -30%
                        left: 35%
                        width: 75px
                        img
                            width: 70%
                    .dishName
                        margin-top: 40px
                        font-size: 16px
                        color: #000000
                        font-family: "Raleway"

@media screen and (max-width: 1250px)
    .container
        width: 100%
        height: 3930px
        filter: drop-shadow(0px 3px 11.5px rgba(0,0,0,0.16))
        background-image: radial-gradient(circle at center, #00f2de 0%, #00ccbb 100%)
        background: url('/home/septem/sass-project01/src/assets/backgroud.png') no-repeat
        center center fixed
        // -webkit-background-size: cover
        // -moz-background-size: cover
        // -o-background-size: cover
        background-size: 100% 100%
        .tagRow
            display: block
            // position: relative
            // display: flex
            // flex-direction: row
            // align-items: center
            // justify-content: center
            // margin-top: 50px
            .days
              display: none
            .weeks
                display: none
            .toggleweeks
                display: flex
                flex-direction: column
                justify-content: center
                align-items: center
                .toggleweek
                    display: flex
                    flex-direction: column
                    justify-content: space-around
                    align-items: center
                    .weekTitle
                        // padding-left: 220px
                        font-size: 33px
                        letter-spacing: 1px
                        color: #ffffff
                        font-family: "Raleway"
                    .toggledaywithdish
                        display: flex
                        flex-direction: row
                        justify-content: space-between
                        align-items: center
                        .toggledays
                            margin-top: 50px
                            display: flex
                            flex-direction: column
                            justify-content: space-around
                            .toggleday
                                margin: 40px
                                padding: 10px
                                display: flex
                                flex-direction: column
                                justify-content: space-around
                                align-items: center
                                .daytitle
                                    font-size: 18px
                                    letter-spacing: 1px
                                    color: #ffffff
                                    font-family: "Raleway"
                                .curl
                                    width: 69px
                                    height: 8px
                        .toggledishes
                            display: flex
                            flex-direction: column
                            justify-content: space-around
                            padding-right: 50px
                            .toggledish
                                display: flex
                                flex-direction: column
                                justify-content: center
                                align-items: center
                                margin-top: 50px
                                position: relative
                                top: 0
                                left: 0
                                width: 273px
                                height: 79px
                                border-radius: 10px
                                filter: drop-shadow(0px 31px 16px rgba(0,0,0,0.09))
                                background-color: #ffffff
                                border: 3px solid #37b2a4
                                .dishpic
                                    width: 50%
                                    position: absolute
                                    top: -40%
                                    left: 40%
                                    img
                                      width: 50%
                                .dishtitle
                                    margin-top: 20px
                                    font-size: 16px
                                    color: #000000
                                    font-family: "Raleway"
                    .toggleSeparator
                        margin-top: 50px
                        margin-bottom: 50px
                        width: 427px
                        height: 27px
</style>
