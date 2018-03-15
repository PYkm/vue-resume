<template>
  <div id="Work">
    <a name="Work" href="#Work">Work</a>
    <div class="image" v-for="photo in photos">
      <img :src="photo.url"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  data () {
    return {
      photos: [
        {url: 'static/logo/seedory.jpg'},
        {url: 'static/logo/lsr.jpg'},
        {url: 'static/logo/zwcad.jpg'}

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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.image{
  
}

</style>
