<template>
  <div>
    <div class="justify-center row q-mt-md">
      <div class="row left">
        <span class="text-bold col-4 row text-center">
          <span class="text-bold col-12">
            {{ Date().slice(0,3) }}, {{ Date().slice(4,10) }}
          </span>
          <span class="text-bold  col-12">
            {{name}}
          </span>
        </span>
        <img class="weatherIcon col-4 " :src="this.icon" />
        <span class="text-right justify-center row col-4">
          <span class="text-bold text-center">
              <q-icon class="col-12" name="fas fa-temperature-high high" />
            High {{maxTemp}}°F
            </span>
            <span class="text-bold col-12 text-center">
              <q-icon name="fas fa-temperature-low low" />
            Low {{minTemp}}°F
          </span>
        </span>
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
          this.minTemp = response.data.main.temp_min.toFixed(0)
          this.maxTemp = response.data.main.temp_max.toFixed(0)
          this.pressure = response.data.main.pressure
          this.overcast = response.data.weather[0].description
          this.icon = 'assets/weather/' + response.data.weather[0].icon.slice(0, 2) + '.svg'
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
  height: 5em;
}
.container {
  padding: 1em;
  border: 2px solid #e0e0e0;
}
</style>
