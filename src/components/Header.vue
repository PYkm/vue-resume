<template>
  <div id="nav">
    <ul>
      <li v-for="(nav,index) in $t('navs')" :key="index">
        <a @click="toggleClass(nav.name)" :class="{actived: activeName == nav.name}" :href="'#' + nav.name">{{ nav.name }} </a>
      </li>
      <li>
        <a @click="toggleLang($t('toggleLang'))">{{$t('toggleLang')}}</a>
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
      {name: 'Contact'}
    ],
    activeName: this.$route.path.slice(1,),
    path: this.$route.path

    }
  },
  methods: {
    toggleClass: function(navName){
      this.activeName = navName;
    },
    toggleLang: function(lan) {
      if (lan == 'English'){
        this.$i18n.locale = 'en';
      }else{
        this.$i18n.locale = 'zh';
      }
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

li a:hover, .actived{
    /*border-bottom: 2px solid #f3f3f3;*/
   /* color:#000;*/
    border-bottom: 2px solid #f6f5f5;
    cursor:pointer;
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
  padding-bottom: 4px;
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
