<template>
  <div id="About">
    <a name="About" href="#About">About</a>
    <div class="intro">
      <p>Hi, I'm Jennifer Chan from China, graduated from SIT at 2015. I was majored in Computer Science and Technology. I worked as a web designer, front-end developer almost 3 years based in SH.</p>
    </div>

    <div class="col col_left">
      <h2>I like to: </h2>
      <h3 v-for="hobby in hobbies">{{hobby.name}}</h3>
    </div>

    <div class="col col_right" id="skills">
      <h2>My Skills: </h2>
      <div v-for="skill in skills">
      <h3>{{skill.name}}</h3>
      <progress title="90" value="90" max="100"></progress>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      hobbies:[
        {name: 'read novels'},
        {name: 'watch movies'},
        {name: 'listen musics'},
        {name: 'skating'},
        {name: 'Vue.js'}

      ],
      skills:[
        {name: 'HTML5'},
        {name: 'CSS3'},
        {name: 'JavaScript'},
        {name: 'PhotoShop'},
        {name: 'Vue.js'}
      ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#About{
  margin:5% 10%;
  height:400px;
}


h2, h3{
  margin-bottom: 20px;
  font-weight:100;
}

p{
  text-align: left;
  margin-bottom: 30px;
  margin-top: 30px;
  font-size:1.35em;
  text-indent:2em;
  font-weight:200;
}

.intro{
  margin-bottom:20px;
}

.col{
  width:50%;
  height:100%;
  text-align: left;
}

.col_left{
  float:left;
}

.col_right{
  float:right;
}
</style>
