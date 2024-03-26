<!-- projectDetails-banner -->
<template>
    <div class="banner center">
        <div class="image">
            <img src="../assets/projectDetails-banner.jpg" alt="banner">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectDetailsBanner",
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .center {
        padding-left: calc(50% - 960px);
        padding-right: calc(50% - 960px);
    }
    .banner {
        max-width: 1920px;
        height: 350px;
    }
    .image>img{
        width: 1920px;
        height: 350px;
    }
</style>