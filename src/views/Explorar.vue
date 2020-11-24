<template>
    <div class="home container-fluid">
        <reproductor media="/divisa.jpeg" sound="/dubs.mp3"></reproductor>
    </div>
</template>
<script>
import Reproductor from '@/components/Reproductor.vue'

export default {
    name: 'explorar',
    components: {
        Reproductor
    }
}
</script>