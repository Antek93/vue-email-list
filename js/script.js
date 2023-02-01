console.log('Java is working fine');

const { createApp } = Vue;

createApp ({
    data () {
        return {
            randomMail: [],
            loadingComplete: false,

        }
    },
    methods: {
        playGame () {
            
            for (let index = 1; index <= 10; index++) {

                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
       
                   console.log('Random email', resp.data.response)
                   this.randomMail.push(resp.data.response)

                   if (this.randomMail.length == 10) {
                    this.loadingComplete = true;
                   } else {
                    console.log ('Array non completo')
                   }

                });
            }
        }
    },
    mounted() {

    }
}).mount('#app');
