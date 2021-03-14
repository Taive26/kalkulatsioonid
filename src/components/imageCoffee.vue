<template>
    <div id="app">
        <img :src="image"/>
    </div>
</template>
    
<script>
    import image from "@/assets/latte.png"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>
    
<style lang="css">
</style>