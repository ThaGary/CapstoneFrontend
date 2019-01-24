<template>
    <q-card inline class="bigger q-mt-sm">
      <q-card-media>
        <img src="~assets/weather/sunny.svg" height="100px" >
      </q-card-media>
      <q-card-title class="relative-position">
        <div class="ellipsis">Hello</div>
      </q-card-title>
      <q-card-main class="text-faded">
          Max {{maxTemp}}°
      </q-card-main>
    </q-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bills',
  data () {
    return {
      houseEdit: [],
      errors: [],
      currentTemp: '',
      minTemp: '',
      maxTemp: '',
      sunrise: '',
      sunset: '',
      pressure: '',
      humidity: '',
      wind: '',
      overcast: '',
      icon: ''
    }
  },
  methods: {
    getWeather () {
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=80226,us&units=imperial&appid=f77a1f100a1bba321b9ec77889da5e10'
      axios
        .get(url)
        .then(response => {
          this.currentTemp = response.data.main.temp
          this.minTemp = response.data.main.temp_min
          this.maxTemp = response.data.main.temp_max
          this.pressure = response.data.main.pressure
          this.humidity = response.data.main.humidity + '%'
          this.wind = response.data.wind.speed + 'm/s'
          this.overcast = response.data.weather[0].description
          this.icon = 'images/' + response.data.weather[0].icon.slice(0, 2) + '.svg'
          this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString('en-GB').slice(0, 4)
          this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString('en-GB').slice(0, 4)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  beforeMount () {
    this.getWeather()
  }
}
</script>

<style scoped>
img {
    background-color: skyblue;
}
</style>
