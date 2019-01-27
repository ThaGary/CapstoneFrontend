<template>
  <div>
    <div class="container row q-mt-md">
      <div class="justify-center col-4 column left">
        <img class="weather" :src="this.icon" />
        <span class="text-left"><q-icon class="" name="fas fa-temperature-high high" /> High {{maxTemp}}°F</span>
        <span class="text-left"><q-icon name="fas fa-temperature-low low" /> Low {{minTemp}}°F</span>
      </div>
      <div class="right col-8 items-center text-center row">
        <span class="text-bold q-display-2 col-12 text-center">{{ Date().slice(0,3) }}, {{ Date().slice(4,10) }}</span>
        <h2 class="col-12">{{name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Bills',
  data () {
    return {
      houseEdit: [],
      errors: [],
      name: '',
      weather: '',
      currentTemp: '',
      minTemp: '',
      maxTemp: '',
      sunrise: '',
      sunset: '',
      pressure: '',
      humidity: '',
      wind: '',
      overcast: '',
      icon: '',
      day: '',
      month: '',
      year: ''
    }
  },
  methods: {
    getWeather () {
      let url = 'http://api.openweathermap.org/data/2.5/weather?zip=80226,us&units=imperial&appid=f77a1f100a1bba321b9ec77889da5e10'
      axios
        .get(url)
        .then(response => {
          this.weather = response.data.weather.main
          this.name = response.data.name
          this.currentTemp = response.data.main.temp
          this.minTemp = response.data.main.temp_min
          this.maxTemp = response.data.main.temp_max
          this.pressure = response.data.main.pressure
          this.humidity = response.data.main.humidity + '%'
          this.wind = response.data.wind.speed + 'm/s'
          this.overcast = response.data.weather[0].description
          this.icon = 'assets/weather/' + response.data.weather[0].icon.slice(0, 2) + '.svg'
          this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString('en-GB').slice(0, 4)
          this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString('en-GB').slice(0, 4)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDate () {
      var day = new Date()
      var month = day.getMonth() + 1
      var year = day.getFullYear()
      var date = year + '-' + month + '-' + day
      var time = day.getHours() + ':' + day.getMinutes() + ':' + day.getSeconds()
      var dateTime = date + ' ' + time
      return dateTime
    }
  },
  beforeMount () {
    this.getWeather()
    this.getDate()
  }
}
</script>

<style scoped>
.low {
  color: lightblue
}
.high {
  color:lightcoral
}
.weather {
  height: 5em;
}
.container {
  padding: 1em;
  border: 1px solid lightgray;
}
</style>
