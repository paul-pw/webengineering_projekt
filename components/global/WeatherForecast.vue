<template>
  <div>
    <input v-model="location" placeholder="Location" class="locationSearch">
    <button
      class="locationGo"
      type="button"
      @click="getWeather()"
    >
      Go
    </button>
    <div class="forecastWrapper">
      <div v-for="day in daily" :key="day.dt" class="card">
        <font-awesome-icon :icon="['fa-solid', weatcherIconToFaIcon(day.weather[0].icon)]" class="weatherIcon" />
        <h5 class="main">
          {{ day.weather[0].main }}
        </h5>
        <p class="description">
          {{ day.weather[0].description }}
        </p>
        <i>
          {{ formatDate(day.dt) }}
        </i>
      </div>
    </div>
  </div>
</template>>

<script>
export default {
  name: 'WeatherForecast',
  data () {
    return {
      location: '',
      daily: []
    }
  },
  methods: {
    getWeather () {
      fetch(
        `/proxy/weather?${this.location}`
      )
        .then(res => res.json())
        .then((json) => {
          if (json.error === null && json.response !== null) {
            this.daily = json.response.daily
          } else {
            this.daily = []
          }
        })
    },
    weatcherIconToFaIcon (iconName) {
      switch (iconName) {
        case '01d':
          return 'fa-sun'
        case '02d':
          return 'fa-cloud-sun'
        case '03d':
          return 'fa-cloud'
        case '04d':
          return 'fa-cloud'
        case '09d':
          return 'fa-cloud-showers-heavy'
        case '10d':
          return 'fa-cloud-sun-rain'
        case '11d':
          return 'fa-cloud-bolt'
        case '13d':
          return 'fa-snowflake'
        case '50d':
          return 'fa-smog'
        default:
          return 'fa-sun'
      }
    },
    formatDate (unixTime) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      // js counts in milliseconds, the weatherApi doesn't so time has to be multiplied with 1000
      return new Date(unixTime * 1000).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";

.forecastWrapper{
  .card{
    display: inline-block;
    width: fit-content;
    background: colors.$bg2;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    .weatherIcon{
      color: colors.$text1;
      margin: 0 auto 0 auto;
      display: block;
      width: 20px;
      height: 20px;
    }
    p{
      margin: 5px 0;
    }
  }
}
</style>
