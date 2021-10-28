/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/

Vue.config.devtools = true;

const vueApp = new Vue(
    {
        el: "#my-vue",
        data: {
            text: "Benvenuto sul nostro sito",
            imagevue: "img/vue.png.png",
        }
    }
)