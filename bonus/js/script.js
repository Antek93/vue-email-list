console.log('Java is working fine');

const { createApp } = Vue;

createApp ({
    data () {
        return {
            randomMail: [],

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
                
                });
            }
        }
    },
    mounted() {

    }
}).mount('#app');
