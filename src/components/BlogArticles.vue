<template>
    <div class="blog__news center">
      <div class="blog__news_news">
        <h3 class="blog__news_news-heading">Articles & News</h3>
        <section class="articles">
          <div class="news">
          <div v-for="article in paginatedArticles" :key="article.id" class="article">
              <img :src="article.img" alt="img" class="article__img">
              <button class="article__tag">
                  {{ article.tag }}
              </button>
              <h4 class="article__name">{{ article.title }}</h4>
              <div class="time__content">
                <time class="article__date">
                {{ article.date }}
              </time>

              <router-link :to="{ name: 'blog_details' }">
                <a href="#" class="article__link">
                    <svg width="7.946899" height="15.379547" viewBox="0 0 7.9469 15.3795"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M1.00403 14.3755L6.9469 7.68977L1.00403 1.00406"
                        stroke="#292F36" stroke-opacity="1.000000" stroke-width="2.000000"
                        stroke-linejoin="round" stroke-linecap="round" />
                    </svg>
                </a>
              </router-link>

              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div v-if="totalPages > 1" class="pagination">
        <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">
          {{ pageNumber }}
        </router-link>
      </div>
      <router-view /> 
  </div>
</template>

<script>
export default {
    name: 'BlogArticles',
    data() {
        return {
            articles: [
                {
                    id: 1, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog1.jpg'),
                    date: "26 December,2022",
                    tag: 'Kitchan Design',
                },
                {
                    id: 2, 
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    img: require('@/assets/blog2.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 3, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog3.jpg'),
                    date: "25 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 4, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog4.jpg'),
                    date: "26 December,2022",
                    tag: 'Kitchan Design',
                },
                {
                    id: 5, 
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: require('@/assets/blog5.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 6, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog6.jpg'),
                    date: "25 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 7, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog6.jpg'),
                    date: "26 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 8, 
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: require('@/assets/blog5.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 9, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog3.jpg'),
                    date: "25 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 10, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog1.jpg'),
                    date: "26 December,2022",
                    tag: 'Kitchan Design',
                },
                {
                    id: 11, 
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: require('@/assets/blog2.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 12, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog6.jpg'),
                    date: "26 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 13, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog1.jpg'),
                    date: "25 December,2022",
                    tag: 'Kitchan Design',
                },
                {
                    id: 14, 
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: require('@/assets/blog5.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 15, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog6.jpg'),
                    date: "25 December,2022",
                    tag: 'Interior Design',
                },
                {
                    id: 16, 
                    title: 'Let’s Get Solution For Building Construction Work',
                    img: require('@/assets/blog4.jpg'),
                    date: "26 December,2022",
                    tag: 'Kitchan Design',
                },
                {
                    id: 17, 
                    title: 'Best For Any Office & Business Interior Solution',
                    img: require('@/assets/blog2.jpg'),
                    date: "22 December,2022",
                    tag: 'Living Design',
                },
                {
                    id: 18, 
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: require('@/assets/blog3.jpg'),
                    date: "25 December,2022",
                    tag: 'Interior Design',
                },
            ],
            itemsPerPage: 6
        };
    },
    computed: {
        totalPages() {
        return Math.ceil(this.articles.length / this.itemsPerPage);
      },
      paginatedArticles() {
        // текущий номер страницы
        const pageNumber = this.getCurrentPageNumber();
        const startIndex = (pageNumber - 1) * this.itemsPerPage;

        const endIndex = startIndex + this.itemsPerPage;
        return this.articles.slice(startIndex, endIndex);
      }
  },
    methods: {
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
        },
        getPageLink(pageNumber) {
            return `/article/${pageNumber}`;
        }
    },
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog__news {
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 51px;
}
.blog__news_news {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.blog__news_news-heading {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292F36;
}
.pagination {
  display: flex;
  flex-direction: row;
  width: 268px;
  height: 52px;
  gap: 20px;
}
.blog__news a {
  background-color: transparent;
  width: 52px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #F4F0EC;
  cursor: pointer;
}
.articles {
  align-self: center;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 51px;
}
.article {
  width: 382px;
  height: 521px;
  padding: 21px;
  border: 1px #e7e7e7 solid;
  border-radius: 62px;
}
.articles .news {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 27px;
  flex-wrap: wrap;
}
.articles .news .article {
  position: relative;
  width: 382px;
  height: 521px;
  padding: 21px;
  border: 1px #e7e7e7 solid;
  border-radius: 62px;
}
.articles .news .article:nth-child(2) {
  background-color: #F4F0EC;
}
.articles .news .article:nth-child(2) .article__link {
  background-color: #fff;
}
.articles .news .article img {
  width: 340px;
  height: 290px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  max-width: 100%;
}
.articles .news .article .article__tag {
  position: absolute;
  top: 249px;
  left: 41px;
  width: 123px;
  height: 40px;
  padding: 8px auto;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  border-bottom-left-radius: 0px;
  font-family: Jost();
  text-align: center;
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #4d5053;
}
.articles .news .article .article__name {
  width: 305px;
  height: 100px;
  font-family: DM Serif Display;
  text-transform: capitalize;
  font-size: 25px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  color: #292f36;
  text-align: left;
}
.articles .news .article .article__link {
  position: absolute;
  bottom: 37px;
  right: 21px;
  width: 52px;
  height: 52px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  background-color: #F4F0EC;
  cursor: pointer;
}
.articles .news .article .article__date {
  position: absolute;
  height: 33px;
  bottom: 37px;
}
.time__content {
  display: flex;
  justify-content: space-between;
}
</style>