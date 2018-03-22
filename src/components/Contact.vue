<template>
  <div id="Contact">
    <a href="#Contact">Contacts</a>
    <div class="infos">
  <div class="info" v-for="info in infos">
    <span :class="'icon-'+info.text[0]"></span> {{info.text[1]}}
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
        {text: ['envelop','jennifer.chan3@hotmail.com']},
        {text: ['earth','https://pykm.github.io/']}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
div
  font-size: 18px;

a
  color: #42b983;

#Contact
  margin:5% 10%;
  height:130px;
  margin-bottom: 0;

.infos
  padding:10px;

.info
  padding:10px 0;



@media screen and (min-width: 1040px)
  .info
    margin:10px;
    display:inline-block;

@media screen and (min-width: 670px) and (max-width: 1040px)
  .info
    width:50%;
    float:left;


@media screen and (max-width: 670px)
  .info
    width:100%;
    text-align:center;
    float:left;
  .infos
    height: 168px;
  #Contact
    height:auto;



</style>
