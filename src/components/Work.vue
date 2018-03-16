<template>
  <div id="Work">
    <a name="Work" href="#Work">Work</a>
    <div class="container">
      <div v-for="photo in photos" class="image">
        <div :class="imgBlk">
          <img :src="photo.url"/>
        </div>
        <div :class="content">
          {{photo.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  'imgBlk': 'imgBlk_left',
  'content': 'content_left',
  data () {
    return {
      'imgBlk': 'imgBlk' === 'imgBlk_left' ? 'imgBlk_right' : 'imgBlk_left',
      'content': 'content' === 'content_left' ? 'content_right' : 'content_left',
      photos: [
        {url: 'static/logo/seedory.jpg',content:`He`},
        {url: 'static/logo/lsr.jpg',content:'sHe'},
        {url: 'static/logo/zwcad.jpg',content:'sdfsdfHe'}

      ]
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Work{
  margin:5% 10%;
  height:930px;
}

.container{
  height:100%;
  overflow: hidden;
}

.image{
  overflow:hidden;
  height:250px;
}

.imgBlk_left{
  overflow:hidden;
  height:100%;
  width:50%;
  float:left;
}

.imgBlk_right{
  overflow:hidden;
  height:100%;
  width:50%;
  float:right;
}

img{
  /*width:50%;*/
  height:100%;
  position: relative;
  
}

.content_left{
    float: right;
    height: 100%;
    width: 50%;
}

.content_right{
    float: left;
    height: 100%;
    width: 50%;
}
</style>
