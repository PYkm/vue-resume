<template>
  <div :id="$t('navs[1].name')" class="About">
    <a :href="'#'+$t('navs[1].name')">{{ $t('navs[1].name') }}</a>
    <div class="intro">
      <p>{{ $t('about.intro') }}</p>
    </div>

    <div class="col col_left">
      <h2>{{ $t('about.like') }}</h2>
      <div class="hobbies" v-for="(hobby,index) in $t('about.hobbies')" :key="index">
        <span class="icon-checkmark2"></span> {{hobby.name}}
      </div>
    </div>

    <div class="col col_right" id="skills">
      <h2>{{ $t('about.skill') }}</h2>
      <div class="skill" v-for="(skill,index) in $t('about.skills')" :key="index">
        <div class="skillName">
          <h3>{{skill.name}}</h3>
        </div>
      <!--<progress title="90" value="90" max="100"></progress>-->
        <div class="outer">
          <div :class="'inner_'+ skill.score" :title="skill.score+'%'">

          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<!-- 
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
        {name: 'HTML5', score: 80},
        {name: 'CSS3', score: 80},
        {name: 'JavaScript', score: 70},
        {name: 'PhotoShop', score: 80},
        {name: 'Vue.js', score: 60}
      ]

    }
  }
}
</script>
-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 900px){
.About{
  height:auto;
}
p{
  font-size:1.2em;
}
h2{
  font-size:1.1em;  
}
h3{
  font-size:1em;  
}
.hobbies{
  font-size: 1em;
  text-indent:0.5em;
}
.col{
  width:100%;
}
}



@media screen and (min-width: 900px){
.About{
  height:410px;
}
p{
  font-size:1.35em;
}
.hobbies{
  font-size: 1.17em;
  
}
.col{
  width:50%;
}
}


.About{
  margin:5% 10%;
}

.hobbies{
  margin-bottom: 20px;
  height: 18px;
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
  background: #42b983;
  animation: loading 3s linear 1 forwards;
}

.inner_80{
  width: 0;
  height: 100%;
  background: #42b983;
  animation: loading_80 3s linear 1 forwards;
}

.inner_70{
  width: 0;
  height: 100%;
  background: #42b983;
  animation: loading_70 3s linear 1 forwards;
}

.inner_60{
  width: 0;
  height: 100%;
  background: #42b983;
  animation: loading_60 3s linear 1 forwards;
}


@keyframes loading {
  from{
    width:0%;
  }
  to {
    width: 100%;
  }
}

@keyframes loading_80 {
  from{
    width:0%;
  }
  to {
    width: 80%;
  }
}

@keyframes loading_70 {
  from{
    width:0%;
  }
  to {
    width: 70%;
  }
}

@keyframes loading_60 {
  from{
    width:0%;
  }
  to {
    width: 60%;
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
  text-indent:2em;
  font-weight:200;
}

.intro{
  margin-bottom:20px;
}

.col{
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
