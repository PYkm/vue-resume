<template>
  <div id="Home">
    <!--<a name="Home" href="#Home">Home</a>-->
    <div class="home">
      <p>Jennifer<br>Chan</p>
      <h2>A Web Front End Developer</h2>
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
#Home{
  background-color: #42b983;
  height:400px;
  width:100%;
}

.home{
  float: left;
  text-align: right;
  width: 50%;
  height:100%;
  color: #fff;
}

p{
  font-weight:300;
  font-size:3em;
  margin:15% 0 10%;
}

h2{
  font-weight:100;
}

</style>
