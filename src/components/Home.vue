<template>
  <div id="Home">
    <!--<a name="Home" href="#Home">Home</a>-->
    <div class="home">
      <p>Jennifer<br>Chan</p>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#Home{
  background-color: #42b983;
  height:400px;
  width:100%;
}

p{
  color: #fff;
  font-weight:300;
  font-size:3em;
  text-align: left;
  padding:100px 300px;
}

</style>
