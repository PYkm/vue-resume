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
  imgBlk: 'imgBlk_left',
  content: 'content_left',
  isLeft: true,
  data () {
    return {
      'imgBlk': 'imgBlk' === 'imgBlk_left' ? 'imgBlk_right' : 'imgBlk_left',
      'content': 'content' === 'content_left' ? 'content_right' : 'content_left',
      photos: [
        {url: 'static/logo/seedory.jpg',content: `Seedory`},
        {url: 'static/logo/lsr.jpg',content: 'Lightspeed Research'},
        {url: 'static/logo/zwcad.jpg',content: 'ZW CAD'}

      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 900px){
#Work{
  height:auto;
}
}


@media screen and (min-width: 900px){
#Work{
  height:810px;
}
}

#Work{
  margin:5% 10%;
}

.container{
  /*height:100%;*/
  margin-top:30px;
  overflow: hidden;
}

.image{
  overflow:hidden;

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
  width:100%;
  height:100%;
  max-height:250px;
  max-width:250px;
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
