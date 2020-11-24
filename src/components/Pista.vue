<template>
<tr>
      <td style="width:10%" scope="row">
        <button v-if="see" class="play-button btn rounded-circle bg-color2 text-center" v-on:click="play">
            <span class="material-icons text-white">
                play_arrow
            </span>
        </button>
        <button v-else class="play-button btn rounded-circle bg-color2 text-center" v-on:click="pause">
            <span class="material-icons text-white">
                pause
            </span>
        </button>
      </td>
      <td style="width:70%" colspan="2"><p>{{ data.titulo }}</p></td>
      <td style="width:10%">
        <button class="btn btn-light d-inline-flex">
            <span class="material-icons text-bg-color6">
                shopping_cart
            </span>
            <p class="text-bg-color6">${{ data.precio }}</p>
        </button>
      </td>
      <td>
      <div style="width:10%" class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
            <span class="material-icons">
                more_vert
            </span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
      </td>
</tr>
</template>

<script>
export default {
    name: "pista",
    props: {
        data: Object
    },
    data() {
        return {
            see:null
        }
    },
    mounted() {
        this.see = this.$parent.see;
    },
    methods: {
        play: function () {
            this.$parent.src = "http://localhost:1337" + this.data.mp3.url;
            this.see = false;
            this.$emit('actualizarPistas');
            document.getElementById('audio').load();
        },
        pause: function () {
            this.see = true;
            document.getElementById('audio').pause();
        }
    }
}
</script>
<style>
.play-button{
    width: 42px;
    height : 42px;
}
.material-icons{
    font-size: 24px;
    margin:0;
    padding:0;
}
</style>