<template>
<div class="container-fluid d-flex justify-content-center align-items-center login">
    <div class="card" width="300px">
        <div class="mb-3">
            <label for="usuario" class="form-label">Email</label>
            <input type="email" class="form-control" id="usuario" placeholder="name@example.com" v-model="usuario">
        </div>
        <div class="mb-3">
            <label for="pass" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="pass" v-model="pass">
        </div>
        <button class="btn btn-primary" v-on:click="login">login</button>
    </div>
    {{ this.$parent.usuario }}
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "login",
    data() {
        return {
            usuario: "",
            pass: ""
        }
    },
    mounted() {},
    methods: {
        login: async function () {

            const options = {
                method: 'POST',
                url: 'http://localhost:1337/auth/local',
                headers: {
                    cookie: 'strapi.sid=eyJncmFudCI6e30sIl9leHBpcmUiOjE2MDMyMzk0MTk0ODYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ%3D%3D; strapi.sid.sig=Wb0bhQAPakQmWeG82WhF3_5auXg',
                    'Content-Type': 'application/json'
                },
                data: {
                    identifier: this.usuario,
                    password: this.pass
                }
            };
            let data = null;
            await axios.request(options).then(function (response) {
                data = response.data;
            }).catch(function (error) {
                console.error(error);
            });

            console.log(data);
            if (data != null) {
                
                this.$parent.usuario = data;
                this.$router.push('/')
            }   
        }
    }
}
</script>

<style>
.login {
    height: 90%;
}

.login .card {
    background-color: #F2F2F2;
}

.card {
    padding: 1%;
}
</style>
