
<template>
    <div class="center">
        <div class="article">
            <div class="article__content">
                <h2 class="article__heading">Let’s Get Solution for Building
                    Construction Work</h2>
                <img src="../assets/kitchen1.jpg" alt="Kitchen image 1" class="article__img kitchen-img1"> 
                <div class="img__date">
                    <span class="img__date_date">26 December,2022</span>
                    <span class="img__date_link"><a href="#">Interior</a> / <a href="#">Home</a> / <a href="#">Decore</a></span>
                </div>    
                <p class="article__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. 
                </p>
                <p class="article__text">
                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>

            </div>

            <div class="article__quotes">
                <div class="article__quotes_content">
                    <span class="quate">“</span>
                    <h5 class="quate-txt">The details are not the details. <br>
                        They make the design.</h5>
                </div>
            </div>

            <div class="article__content">
                <h2 class="article__heading">Design sprints are great</h2>
                <p class="article__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>
                <ol>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ol>
                <img src="../assets/kitchen2.jpg" alt="Kitchen image 2" class="article__img kitchen-img2">
                <p class="article__text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'KitchenComp',

};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

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

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 351px;
  margin-bottom: 200px;
}
.banner__img {
  max-width: 1920px;
  height: 351px;
}

.blog {
  display: flex;
  flex-direction: row;
  margin-bottom: 96px;
  gap: 52px;
}
.blog__details {
  width: 804px;
  gap: 93px;
}
.blog__slider {
  width: 345px;
  height: 200px;
  gap: 50px;
}
.blog__slider_tags {
  width: 345px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.blog__slider_tags-header {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
}
.blog__slider_tags-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 11px;
}
.blog__slider_tags-content_btn {
  height: 41px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  background-color: #F4F0EC;
  border: none;
}
.blog__slider_tags-content_btn:active, .blog__slider_tags-content_btn:hover {
  height: 41px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: #292F36;
  border: none;
}
.blog__slider_tags-content_btn:focus {
  height: 41px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: #292F36;
  border: none;
}
.blog .article {
  width: 804px;
  display: flex;
  flex-direction: column;
}
.blog .article__content {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.blog .article__img {
  width: 799px;
  border-radius: 50px;
}
.blog .article .kitchen-img1 {
  height: 539px;
}
.blog .article .kitchen-img2 {
  height: 365px;
}
.blog .article .img__date {
  display: flex;
  justify-content: space-between;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
}
.blog .article .img__date_link {
  text-align: left;
  width: 250px;
}
.blog .article__quotes {
  display: flex;
  justify-content: center;
  width: 800px;
  height: 267px;
  padding: 53px, 227px;
  border-radius: 50px;
  gap: 10px;
  background-color: #F4F0EC;
  margin-bottom: 27px;
  margin-top: 35px;
}
.blog .article__quotes_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 345px;
  height: 160px;
  position: relative;
  font-family: DM Serif Display;
  font-size: 200px;
  font-style: italic;
  font-weight: 400;
  line-height: 250px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #CDA274;
}
.blog .article__quotes_content .quate {
  transform: scale(-1, -1);
  position: absolute;
  top: -68px;
}
.blog .article__quotes_content .quate-txt {
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: center;
  position: absolute;
  top: 142px;
}
.blog .article__heading {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
}
.blog .article__text, .blog .article ol {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
}
.blog .article ol {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>