<template>
    <div class="home center">
        <BlogBanner />
        <section id="blog" class="blog center">
            <BlogPost />
            <BlogArticles />
        </section>
        <FooterComp />
    </div>
</template>

<script>
import BlogBanner from '@/components/BlogBanner.vue';
import BlogPost from '@/components/BlogPost.vue';
import BlogArticles from '@/components/BlogArticles.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
        name: "HomeComp",
        components: {
            BlogBanner,
            BlogPost,
            BlogArticles,
            FooterComp
        }
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
.blog {
  display: flex;
  flex-direction: column;
  gap: 150px;
}
.home {
    display: flex;
    flex-direction: column;
    gap: 200px;
    align-items: center;
}

</style>