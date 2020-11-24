<template>
<div>
    <audio id="audio" v-bind:src="src" controls autoplay></audio>
    <table class="table">
        <tbody>
            <Pista v-for="pista in pistas" :key="pista.id" v-bind:data="pista" @actualizarPistas="actualizarPitas"></Pista>
        </tbody>
    </table>
</div>
</template>

<script>
import Pista from '@/components/Pista.vue';
import axios from 'axios';

export default {
    name: 'Reproductor',
    components: {
        Pista
    },
    data() {
        return {
            pistas: null,
            src: null,
            see: true
        }
    },
    async mounted() {
        var data = null;
        const options = {   
            method: 'GET',
            url: 'http://localhost:1337/instrumentales',
            headers: {
                cookie: 'strapi.sid=eyJncmFudCI6e30sIl9leHBpcmUiOjE2MDMyMzk0MTk0ODYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ%3D%3D; strapi.sid.sig=Wb0bhQAPakQmWeG82WhF3_5auXg'
            }
        };

        await axios.request(options).then(function (response) {
            data = response.data;
        }).catch(function (error) {
            console.error(error);
        });
        this.pistas = data;
    },
    methods: {
        actualizarPitas: function () {
            console.log("actualizando");
        }
    }
}
</script>

<style>
.filtro {
    filter: opacity(50%);
}

.botton {
    width: 70%;
    height: 70%;
}

.material-icons.md-light {
    color: #fff;
}

#reprod {
    width: 100px;
}
</style>
