<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            Cooking Beats
        </a>
        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-icons">
                menu
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/explorar">Explorar</router-link>
                </li>
                <li v-if="this.$parent.usuario == null">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
            </ul>
            <div v-if="this.$parent.usuario != null">
                <div class="dropdown">
                    <button class="btn btn-ligth dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="material-icons">
                            perm_identity
                        </span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Compras</a>
                        <router-link class="dropdown-item" to="/perfil">Perfil</router-link>
                        <a class="dropdown-item" href="#">Instrumentales</a>
                        <div class="dropdown-divider"></div>
                        <p class="dropdown-item">{{ this.$parent.usuario.user.username }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
//import NavLink from './NavLink.vue';

export default {
    name: "Menu",
    data: function () {
        return {
            userName: null,
            userFoto: null,
        }
    }
}
</script>
