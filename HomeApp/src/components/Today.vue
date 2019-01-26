<template>
    <q-card inline class="bigger q-mt-sm">
      <q-card-title class="relative-position">
        <div class="ellipsis">{{ Date().slice(0,3) }}, {{ Date().slice(4,10) }}</div>
        <img :src="this.icon" />
        <div slot="right" class="column items-start">
          <span><q-icon class="q-mb-md" name="fas fa-temperature-high high" /> High {{maxTemp}}°F</span>
          <span><q-icon name="fas fa-temperature-low low" /> Low {{minTemp}}°F</span>
        </div>
      </q-card-title>
      <q-card-main class="text-faded">
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
img {
    height: 3em;
}
.low {
  color: lightblue
}
.high {
  color:lightcoral
}
</style>
