<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view/>-->
    <v-header></v-header>
    <v-nav></v-nav>
    <home></home>
    <about></about>
    <work></work>
    <projects></projects>
    <contact></contact>
  </div>
</template>

<script>
import header from '@/components/Header'
import nav from '@/components/MobileNav'
import home from '@/components/Home'
import about from '@/components/About'
import projects from '@/components/Projects'
import work from '@/components/Work'
import contact from '@/components/Contact'

export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-nav': nav,
    'home': home,
    'about': about,
    'projects': projects,
    'work': work,
    'contact': contact
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "/common/stylus/icon.styl";

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  background:#80737312;

*
    margin:0;
    padding:0;


a
  text-decoration: none;
  font-size:1.5em;
  color: #42b983;
  
</style>
