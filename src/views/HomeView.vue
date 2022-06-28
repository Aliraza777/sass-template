<!-- <template>
  <div class="App">
    <h1 v-for="dish in dishes" :key="dish.id">
      dishes are {{ dish.name }}
      <img v-bind:src="dish.img" />
    </h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      dishes: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        console.log(response.data);
        this.dishes = response.data;
        // this.dishes.name = response.data.name;
        // this.dishes.Image = response.data.Image;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script> -->
