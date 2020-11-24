<template>
<div>
    <div class="card">
        <input type="email" v-model="usuario" name="" id="">
    </div>
    {{ usuario }}
</div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            usuario: "",
            pass: ""
        }
    },
}
</script>
