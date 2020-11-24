<template>
    <div class="container-fluid">
        <div class="d-flex flex-row justify-content-between">
            <audio id="audio" v-bind:src="src" controls autoplay></audio>
            <h2>Intrumentales</h2>
            <router-link class="btn btn-light" to="/perfil/agregarinstrumental">
                <span class="material-icons">
                    add
                </span>
            </router-link>
        </div>
        <table class="table">
            <tbody>
                <PistaPerfil v-for="instrumental in instrumentales" :key="instrumental.id" v-bind:data="instrumental" @actualizarPistas="actualizarPitas" />
            </tbody>
        </table>
    </div>
</template>
<script>
import PistaPerfil from '@/components/PistaPerfil.vue';
import axios from 'axios';
export default {
    name:"perfil",
    components: {
        PistaPerfil
    },
    data() {
        return {
            "me" : null,
            "instrumentales" : null,
            "album":null,
            "see": true,
            "src": null,
        }
    },
    async mounted() {
        if(typeof this.$parent.usuario != 'undefined' && this.$parent.usuario != null) {
            var data;

            const options = {
            method: 'GET',
            url: 'http://localhost:1337/users/me',
                headers: {
                    cookie: 'strapi.sid=eyJncmFudCI6e30sIl9leHBpcmUiOjE2MDMyMzk0MTk0ODYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ%3D%3D; strapi.sid.sig=Wb0bhQAPakQmWeG82WhF3_5auXg',
                    Authorization: 'Bearer '+this.$parent.usuario.jwt
                }
            };

            await axios.request(options).then(function (response) {
                data = response.data;
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });

            console.log(data);
            if(data != null) {
                this.me = data;
                this.instrumentalesLoad();
            }
        }
    },
    methods:{
        instrumentalesLoad: async function (){
            var data = null;
            const options = {
                method: 'GET',
                url: `http://localhost:1337/instrumentales/user/${this.me.id}`,
                headers: {
                    cookie: 'strapi.sid=eyJncmFudCI6e30sIl9leHBpcmUiOjE2MDMyMzk0MTk0ODYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ%3D%3D; strapi.sid.sig=Wb0bhQAPakQmWeG82WhF3_5auXg'
                }
            };

            await axios.request(options).then(function (response) {
                data = response.data;
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });

            this.instrumentales = data;
        }
    }
}
</script>