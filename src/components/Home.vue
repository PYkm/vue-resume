<template>
  <div :id="$t('navs[0].name')" class="Home">
    <!--<a name="Home" href="#Home">Home</a>-->
    <div class="home">
      <p>Jennifer<br>Chan</p>
      <h2>{{$t('home.me')}}</h2>
      <h2>-------------------------</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 900px){
.Home{
  padding-top: 40px;
}
}

@media screen and (min-width: 900px){
.Home{
  padding-top: 58px;
}

}

.Home{
  background-color: #42b983;
  width:100%;
  height:350px;
}

.home{
  float: left;
  text-align: right;
  height:100%;
  width:90%;
  color: #fff;
}

p{
  font-weight:300;
  font-size:3em;
  margin:70px 0 30px;
}

h2{
  font-weight:100;
}


</style>
