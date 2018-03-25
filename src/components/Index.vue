<template>
  <div id="All">
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
  name: 'Index',
  data () {
    return {
      
    }
  },
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
</style>
