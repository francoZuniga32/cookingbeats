<template>
<h1>{{msg}}
    <button v-on:click="hola">asd</button>
</h1>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {

    },
    mounted() {
        this.msg = 'Hello World!'
    },
    methods: {
        hola: function () {
            this.msg = 'hola';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
