const baseUrl = "https://temperaturerestget.azurewebsites.net/Sensor"


Vue.createApp({
    data() {
        return {
            temperatures: []

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



    }

}).mount("#app")



