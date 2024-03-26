<template>
    <!-- Latest post -->
    <section class="post">
        <!-- post-heading -->
        <h2 class="head">Latest Post</h2>

        <!-- post-item -->
        <section class="item">

            <!-- item-img -->
            <img src="../assets/blog_post.jpg" alt="latast post" class="item__img" />
            <!-- item-content -->
            <div class="item__content">

                <!-- content__sub -->
                <div class="item__content_sub">
                    <h3>
                        Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p>Lorem ipsum dolor sit
                        amet, adipiscing Aliquam eu sem vitae
                        turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                    <p> Lorem Ipsum is not
                        simply random text. It has roots in a piece of classica.</p>
                </div>

                <!-- content_date -->
                <div class="item__content_date">
                    <time class="item__content_date-text">26 December,2022</time>

                    <a href="#" class="item__content_date-link">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </section>  
</template>

<script>
export default {
        name: "BlogPost",
        components: {
        }
    }

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post {
  position: relative;
  border-radius: 62px;
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}
.head {
  font-family: DM Serif Display;
  font-weight: 400;
  align-items: start;
  font-size: 50px;
  line-height: 62.5px;
  letter-spacing: 0.02em;
  color: #292F36;
  text-transform: capitalize;
}
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e7e7e7;
  padding: 22px;
  border-radius: 62px;
  gap: 65px;
}
.item__img {
  border-radius: 50px;
  max-width: 570px;
}
.item__content {
  width: 489px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 41px;
  padding-right: 32px;
}
.item__content_sub {
  display: flex;
  flex-direction: column;
  width: 469px;
  height: 375px;
  gap: 41px;
}
.item__content_sub h3 {
  font-family: DM Serif Display;
  font-weight: 400;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 0.02em;
  text-transform: capitalize;
}
.item__content_sub p {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}
.item__content_date {
  display: flex;
  flex-direction: row;
  width: 489px;
  height: 52px;
  align-items: center;
  justify-content: space-between;
}
.item__content_date-text {
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}
.item__content_date-link {
  width: 52px;
  height: 52px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  background-color: #F4F0EC;
  cursor: pointer;
}
</style>