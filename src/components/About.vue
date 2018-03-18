<template>
  <div id="About">
    <a name="About" href="#About">About</a>
    <div class="intro">
      <p>Hi, I'm Jennifer Chan from China, graduated from SIT at 2015. I was majored in Computer Science and Technology. I worked as a web designer, front-end developer almost 3 years based in SH.</p>
    </div>

    <div class="col col_left">
      <h2>I like to: </h2>
      <div class="hobbies" v-for="hobby in hobbies">
        <h3 class="icon-checkmark2"> {{hobby.name}}</h3>
      </div>
    </div>

    <div class="col col_right" id="skills">
      <h2>My Skills: </h2>
      <div class="skill" v-for="skill in skills">
        <div class="skillName">
          <h3>{{skill.name}}</h3>
        </div>
      <!--<progress title="90" value="90" max="100"></progress>-->
        <div class="outer">
          <div class="inner">

          </div>
        </div>
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
        {name: 'go skating'},
        {name: 'watch American TV series'}

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

.hobbies{
  margin-bottom: 20px;
}

.skill{
  height:18px;
  width:100%;
  margin-bottom: 20px;
}

.outer{
  width: 70%;
  height: 90%;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  float: right;
  margin-top:-20px;
}

.inner{
  width: 0;
  height: 100%;
  background: #ffcd33;
  animation: loading 3s linear 1 forwards;
}

@keyframes loading {
  from{
    width:0%;
  }
  to {
    width: 100%;
  }
}

.skillName{
  /*float: left;*/
  width:30%;
  height:100%;
}

h3{
  font-weight:100;
}

h2{
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
  height:58%;
  text-align: left;
}

.col_left{
  float:left;
}

.col_right{
  float:right;
}
</style>
