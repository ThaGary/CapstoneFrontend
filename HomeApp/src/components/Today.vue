<template>
  <div>
    <div class="container justify-center row q-mt-md">
      <div class="justify-center row left">
        <span class="text-bold col-6 text-center">
          {{ Date().slice(0,3) }}, {{ Date().slice(4,10) }}
        </span>
        <span class="text-right col-6">
            <q-icon class="" name="fas fa-temperature-high high" />
            High {{maxTemp}}°F
          </span>
        <span class="items-end row col-12 weather">
          <span class="text-bold col-6 text-center">
          {{name}}
          </span>
          <span class="text-right col-6">
            <q-icon name="fas fa-temperature-low low" />
              Low {{minTemp}}°F
          </span>
        </span>
        <img class="weatherIcon" :src="this.icon" />
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
  max-height: 3em;
}
.weatherIcon {
  height: 4em;
  position: fixed;
  margin: auto;
  margin-top: -1em;
  z-index: -1
}
.container {
  padding: 1em;
  border: 2px solid #e0e0e0;
}
</style>
