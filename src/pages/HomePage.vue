<template>
    <div class="home center">
        <HomeBanner />
        <HomeProject />
        <HomeCounter />
        <HomeBlog  />
        <FooterComp />
    </div>
</template>

<script>
import HomeBlog from '@/components/HomeBlog.vue';
import FooterComp from '@/components/FooterComp.vue';
import HomeBanner from '@/components/HomeBanner.vue';
import HomeProject from '@/components/HomeProject.vue';
import HomeCounter from '@/components/HomeCounter.vue';

export default {
    name: "HomeComp",
    components: {
        HomeBanner,
        HomeProject,
        HomeCounter,
        HomeBlog, 
        FooterComp
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .center {
        padding-left: calc(50% - 600px);
        padding-right: calc(50% - 600px);
    }
    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 96px;
        
        margin-bottom: 200px;
    }
</style>