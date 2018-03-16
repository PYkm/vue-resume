<template>
  <div id="Contact">
    <a name="Contact" href="#Contact">Contacts</a>
    <div class="infos">
  <div class="info" v-for="info in infos">
      <span :class="'icon-'+info.text[0]"> </span>{{info.text[1]}}
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data () {
    return {
      infos:[
        {text: ['location2','Shanghai']},
        {text: ['mobile','+86 188 cccc cccc']},
        {text: ['envelop','xxx@xxx.com']},
        {text: ['earth','https://xxx//xxx']}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
a 
  color: #42b983;

#Contact
  margin:5% 10%;
  height:130px;

.infos
  padding:10px; 

.info
  width:50%;
  float:left;
  text-align:left;
  padding:10px 0;




</style>
