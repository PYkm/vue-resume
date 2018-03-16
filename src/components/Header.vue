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
  background-color: #42b983;
  
}
</style>
