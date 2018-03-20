<template>
  <div id="nav">
    <ul>
      <li v-for="nav in navs">
        <a :href="'#' + nav.name">{{ nav.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    navs: [
      {name: 'Home'},
      {name: 'About'},
      {name: 'Work'},
      {name: 'Projects'},
      {name: 'Contact'},
    ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 900px){
  #nav{
    display:none;
  }
}

@media screen and (min-width: 900px){
  #nav{
    display:block;
  }
}



h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
a {
  font-size:1em;
  color: #fff;
  text-transform: uppercase;
}

#nav{
  width:100%;
  background-color: #42b983;
  position:fixed;
  z-index: 999;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  /*top:0px;*/
}

#mobile_nav{
  width:100%;
  background-color: #42b983;
  position:fixed;
  z-index: 999;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
}

</style>
