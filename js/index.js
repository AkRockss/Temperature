 const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"

const WeatherUrl = "https://www.7timer.info/bin/civillight.php?lon=12.1&lat=55.6&ac=0&unit=metric&output=json&tzshift=0"


Vue.createApp({
    data() {
        return {
            temperatures: [],
            dataseries: [],

            

        }
    },

    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.helperGetAndShow(baseUrl)
    },

    methods: {

        getAllTemperatures() {
            this.helperGetAndShow(baseUrl)
        },
    
        async helperGetAndShow(url) { 
            try {
                const response = await axios.get(url)
                this.temperatures = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        async helperGetAndShowWeather(WeatherUrl) { 
            try {
                const response = await axios.get(WeatherUrl)
                this.dataseries = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        getAllWeathers() {
            this.helperGetAndShow(WeatherUrl)
        },
    


    }

}).mount("#app")



