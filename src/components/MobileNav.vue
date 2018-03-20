<template>
  <div id="mobile_nav" :class="'mobile_nav' + vheight">
   <!--<div class="menu">-->
    <a class="menu_button" @click="toggleMenuList"></a>
    <a class="logo" href="/_"></a>
    <!--</div>-->
    <div class="list" v-show="list">
    <ul>
      <li v-for="nav in navs">
        <a @click="toggleClass(nav.name)" :class="{actived: activeName == nav.name}" :href="'#' + nav.name">{{ nav.name }} </a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>

export default {
  name: 'MobileNav',
  list: false,
  data () {
    return {
    navs: [
      {name: 'Home'},
      {name: 'About'},
      {name: 'Work'},
      {name: 'Projects'},
      {name: 'Contact'},
    ],
    list: this.list,
    activeName: 'Home',
    vheight: 40
    }
  },
  methods: {
    toggleMenuList: function(){
      this.list = !this.list;
      this.vheight == 40 ? this.vheight = 195 :  this.vheight = 40;
    },
    toggleClass: function(navName){
      this.list = !this.list;
      this.vheight = 40;
      this.activeName = navName;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 900px){
  #mobile_nav{
    display:block;
  }
}

@media screen and (min-width: 900px){
  #mobile_nav{
  display: none;
  }
}

.logo{
    position: absolute;
    width: 30px;
    height: 30px;
    background: url(../assets/logo.png) center center no-repeat;
    top: 5px;
    left: 50%;
    margin-left: -15px;
    background-size: 30px;
}

.mobile_nav40{
  height:40px;  
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  /*transform: translate(0, -10px);*/
  transform: translate(0, 0);
}

.mobile_nav195{
  height:195px;
  /*transform: translate(0, -10px);*/
  transform: translate(0, 0);
  transition: all .4s cubic-bezier(0.4, 0, 0, 1);
}

.menu{
  height:40px;
}

#mobile_nav{
  width:100%;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  background-color: #42b983;
  position:fixed;
  z-index: 999;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);


}

#mobile_nav .menu_button{
    position: absolute;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 12px;
    background: url(../assets/menu.png) center center no-repeat;
    background-size: 24px;

}

li a:hover, .actived{
    /*border-bottom: 2px solid #f3f3f3;*/
    background: #3a9c70;
}

.list{
  height:auto;
  width:100%;
  /*margin-top: 40px;*/
  transform: translate(0, 40px);
}

ul{
  background:#42b983;
  /*border-bottom:dashed 1px #f3f3f3;*/
}

li{
  line-height:30px;
}

li a{
  color:#f3f3f3;
  font-size: 1.1em;
  vertical-align:middle;
  text-transform: uppercase;
  display: block;
}

</style>
