<template>
  <div id="Work">
    <a href="#Work">Work</a>
    <div class="container">
      <div v-for="photo in photos" class="image">
        <!--<div class="block" :class="imgBlk">-->
        <div class="block" :class="{imgBlk_left: photo.cid%2, imgBlk_right: photo.cid%2===0}">
          <img :src="photo.src"/>
        </div>
        <div class="contents block" :class="content">
          <div class="contentsInner">
          <h2>{{photo.title}}</h2>
          <h3>{{photo.duration}}</h3>
          <p>{{photo.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  content: 'content_left',
  data () {
    return {
      'imgBlk': 'imgBlk' === 'imgBlk_left' ? 'imgBlk_right' : 'imgBlk_left',
      'content': 'content' === 'content_left' ? 'content_right' : 'content_left',
      photos: [
        {cid:3, src: 'static/logo/zwcad.jpg',title:`Network Develop Engineer`,duration:`2017/07 -- 2018/04`,content: `ZW-CAD is a CAD leader brand in China, the head office is based in Guangzhou. I worked as a Network Develop Engineer. I'm responsible for building Server, Constructing Website with both Front-end and Back-end and so on. I was participated in projects which is worked for SF-Express.`},
        {cid:2, src: 'static/logo/lsr.jpg',title:`Survey Programmer`,duration:`2015/05 -- 2017/05 `,content: `Lightspeed Research is a company that provide highest-quality online research for clients, the head office is based in London. I worked as a SP for 2 years. I was responsible for providing high-quality Online questionnaire for our clinets, Doing the logic programming and data checking as well.`},
        {cid:1, src: 'static/logo/seedory.jpg',title:`Art Designer(Part-time)`,duration:`2015/03 -- 2015/04`,content: `Seedory is a cosmetics brand. I worked at this company as a Art Designer, I was responsible for taking photos of products, as well as the post processing. And I also maked the images which needs to publish on the Webchat or Taobao everyday. `}

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


@media screen and (min-width: 800px){
.image{
  height:250px;
}
.block{
  height:100%;  
  width:50%; 
}

}

@media screen and (min-width: 400px) and (max-width: 800px){
.image{
  height:500px;
}
.block{
  width:100%; 
  height:50%;  
}
}

@media screen and (max-width: 400px){
.image{
  height:600px;
}
.block{
  width:100%; 
  height:50%;  
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
  float:left;
  background: #fff;
}

.imgBlk_right{
  overflow:hidden;
  float:right;
  background: #000;
}

img{
  width:100%;
  height:100%;
  max-height:250px;
  max-width:250px;
  position: relative;

}

.contents{
  text-align: left;
  vertical-align: middle;
  display:table;
}

.contentsInner{
  height:100%;
  display:table-cell;
  vertical-align: middle;
  padding: 0 10%;
  background: #737373;
  color: #fff;
}

.contents h2{
  font-size: 1.2em;
}
.contents h3{
  font-size: 1.14em;
  font-weight: 100;
  margin: 1% 0;
}


.contents p{
  text-indent: 2em;
}

.content_left{
    float: right;
}

.content_right{
    float: left;
}
</style>
