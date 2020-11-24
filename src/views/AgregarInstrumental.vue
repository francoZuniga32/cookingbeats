<template>
    <div class="container-fluid">
        <form action="">
            <div class="row">
                <div class="form-group col-sm">
                    <label for="titulo">Titulo</label>
                    <input type="text" class="form-control" id="titulo" v-model="titulo" aria-describedby="titulo">
                </div>
                <div class="form-group col-sm">
                    <label for="descripcion">Descripcion</label>
                    <textarea class="form-control" id="descripcion" v-model="descripcion" rows="3"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-sm">
                    <label for="precio">Precio</label>
                    <input type="number" class="form-control" v-model="precio" step="0.01"  id="precio" aria-describedby="precio">
                </div>
                <div class="col-sm">
                
                </div>
            </div>
            <div class="row">
                <h6>Archivos</h6>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="custom-file">
                        <label class="custom-file-label" for="mp4">MP4</label>
                        <input type="file" ref="mp4" class="custom-file-input" v-on:change="cargarMp4" id="mp4">
                    </div>
                </div>
                <div class="col-sm">
                    <div class="custom-file">
                        <label class="custom-file-label" for="wav">WAV</label>
                        <input type="file" ref="wav" class="custom-file-input" v-on:change="cargarWav" id="wav"> 
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="form-group col-sm d-flex flex-row-reverse">
                    <button class="form-control btn btn-light siguiente" v-on:click="enviarForm">Siguiente</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: 'agregarInstrumental',
    props: {
        usuario: Object
    },
    data() {
        return {
            titulo: "",
            descripcion: "",
            precio: 0,
            mp4: null,
            wav: null,
        }
    },
    mounted() {
        /*if( this.usuario != null || typeof this.usuario != 'undefined' ) {
            console.log("hola mundo")
        }else{
            this.$router.push('/');
        }*/
    },
    methods:{
        enviarForm: function(){
            var retorno = true;
            if(retorno && this.titulo == ""){
                retorno = false;
            }

            if(retorno && this.descripcion == ""){
                retorno = false;
            }

            if(retorno && this.mp4 == null){
                retorno = false;
            }

            if(retorno && this.wav == null){
                retorno = false;
            }

            if(retorno){
                var mp4 = this.cargarMadia(this.mp4);
                var wav = this.cargarMadia(this.wav);

                if(mp4 != null || wav != null){
                    console.log("puedes cargar la data");
                }else{
                    console.log("no se puede cargar el instrumental");
                }
            }
            
        },
        cargarMp4: function(){
            //validamos que se halla cargado
            var extencion = /\.mp3/g;
            if(this.$refs.mp4 != null && extencion.exec(this.$refs.mp4.value)){
                this.mp4 = this.$refs.mp4.files[0];
            }else{  
                console.log('Archivo cuya extencion es incorrecta');
            }
            console.log(this.$refs.mp4.files[0]);
        },
        cargarWav: function(){
            var extencion = /\.mp3/g;
            if(this.$refs.wav != null && extencion.exec(this.$refs.wav.value)){
                this.wav = this.$refs.wav.files[0];
            }else{  
                console.log('Archivo cuya extencion es incorrecta');
            }
        },
        cargarMadia: function(media){
            console.log(media);
            var token = 'bearer '+this.usuario.jwt;
            var data = null;

            const form = new FormData();
            form.append("file", media);

            fetch("http://localhost:1337/upload", {
                "method": "POST",
                "headers": {
                    "cookie": "strapi.sid=eyJncmFudCI6e30sIl9leHBpcmUiOjE2MDMyMzk0MTk0ODYsIl9tYXhBZ2UiOjg2NDAwMDAwfQ%3D%3D; strapi.sid.sig=Wb0bhQAPakQmWeG82WhF3_5auXg",
                    "Content-Type": "multipart/form-data",
                    "Authorization": token,
                    "content-type": "multipart/form-data; boundary=---011000010111000001101001"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });

            return data;
        }
    }
}
</script>
<style>
    .siguiente{
        width: 25%;
    }

      
  @media (max-width: 768px) {
    .siguiente{
      widows: 50%;
    }
  }
</style>