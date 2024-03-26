<template>
    <div class="home center">
        <div class="banner__content">
            <div class="text">
                <h1 class="title">404</h1>
                <p>We are sorry, but the page
you requested was not found</p>
            </div>
            <router-link to="/"><button class="btn">
                <div class="btn__content">
                    <p>Back To Home <span>-></span></p>   
                </div>    
            </button></router-link>
        </div>
        <img src="../assets/404.jpg" alt="404">  
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}
.center {
    padding-left: calc(50% - 600px);
}
.home {
    width: 1564px;
    height: 1042px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 81px;
}
.home img {
    width: 913px;
    height: 1042px;
    border-bottom-left-radius: 380px;
}
.banner__content {
    width: 569px;
    height: 444px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
}
.banner__content p {
    font-family: DM Serif Display;
    font-size: 35px;
    font-weight: 400;
    line-height: 52.5px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #292F36;
}
.text {
    width: 569px;
    height: 360px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.title {
    font-family: DM Serif Display;
    font-size: 250px;
    width: 390px;
    height: 142px;
    font-weight: 400;
    line-height: 312.5px;
    text-align: left;
    color: #CDA274;
}
.btn {
    width: 254px;
    height: 75px;
    padding: 26px ;
    border-radius: 18px;
    background-color: #292F36;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
/* .btn__content {
    width: 146px;
} */
.btn__content p {
    color: #FFF;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    letter-spacing: 0.02em;
    text-align: center;
}
.btn__content span{
    width: 16px;
    font-size: 24px;
    color: #CDA274;
}
</style>
