const baseUrl =""


Vue.createApp({
    data() {
        return {
            temperatures: [],
            error: null,
            roomId: "",
            singleTemperature: [],
            temperatureToGetBy: null,
            deleteId: 0,
            deleteMessage: "",
            addData: { temperature: "", humidity: "", roomId: ""},
            addMessage: "",
            updateData: { id: 0, temperature: "", humidity: "", roomId: ""},
            updateMessage: "",
        }
    },

    async created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        this.helperGetAndShow(baseUrl)
    },

    methods: {

        getAllAthletes() {
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



