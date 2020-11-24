<template>
<div id="app">
    <Menu></Menu>
    <router-view :usuario="usuario" />
</div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
    components: {
        Menu
    },
    data() {
        return {
            usuario: null
        }
    }
}
</script>

<style>
#app {
    height: 100%;
}
</style>
