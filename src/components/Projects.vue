<template>
  <div :id="$t('navs[3].name')" class="Projects">
    <a :href="'#' + $t('navs[3].name')">{{ $t('navs[3].name') }}</a>
    <div id="projectBlk">
      <div class="project" v-for="project in $t('projects')" :key="project.cid">
        <img @click="showDetail(project.cid)" :src="'static/projects/'+project.src" :alt="project.name"/>
        <div class="mask" :class="{hideIt : activeCid != project.cid || activeCid == ''}">
        <div class="projectDetail" v-show="true" :id="'project' + project.cid">
          <a class="close_button icon-shrink2" @click="HideDetail()"></a>
          <div class="title">
            <h2>{{project.name}}</h2>
            <h3>{{project.duration}}</h3>
          </div>
          <div class="detail">
            <div class="content">
              <p>{{project.content}}</p>
              <ol>
                <li v-for="(list,index) in project.lists" :key="index">{{list}}</li>
              </ol>
              <p>URL: {{project.url}}</p>
            </div>
            <div class="description">
              <p>{{project.description}}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data () {
    return {
      activeCid: '',
      /*
      projects: [
      { cid:3, 
        src:'SF-Express.jpg', 
        name: `3D transition System Design of SF-Express`, 
        duration:`2017/10 -- 2018/03`, 
        content:`I am the only network engineer in the team, cpmpleted below tasks by myself:`, 
        lists: [
        `Build Testing Server and Client Server(Windows Server 2012).`,
        `Apache Tomcat 9.0 installation and environment vonfiguration.`,
        `Use Eclipse, JSP, HTML, CSS and JS to programming the website Fron-end and Back-end. Made the website responsive and compatible with above IE 6`,
        `Download the scm manager's war package from its official website. create a connection with the website to set the priority for the users.`
        ], 
        description: `Need to provide a CAD plug-in for SF-express, Since this pulg-in ask users to login, so need to make connection with the Active Domain Controller, I was mainly focus on the login module and the online management system`,
        url: `Sorry, but not convenience to visit`
      },
      { cid:2, 
        src:'Lightspeed.jpg', 
        name: `Ad-hoc & Tracker Projects`, 
        duration:`2015/07 -- 2017/05`, 
        content:`I mainly focus on Hong Kong and Singapore Market. Below are my jobs:`, 
        lists: [
        `Get a Quickly scan on the questionnaire, pick up logic problems, and get back to PM so they can ask Clients to update it`,
        `Use HTML, CSS, JS and Python to program, based on the final confirmed questionnaire`,
        `Do translation if necessary`,
        `Launch the project, help DP and PM to deal with the Data.`
        ],
        description:`Co-operated with TNS, Millward Brown, IpSOS and Other companies to do the online survey`, 
        url: `Sorry, no link can provide. But if you had ever doing a online Survey, that may made by me.`
      },
      { cid:1, 
        src:'2nd-OPPO-Mobile-Theme-Contest.JPG', 
        name: `2nd OPPO Mobile Theme Contest`, 
        duration:`2014/03 -- 2014/04`, 
        content:`I've made:`, 
        lists: [
        `Search the theme Standard for mobile`,
        `Learn the Standard of icon size and so on`,
        `Use CoreIDraw to draw icons`,
        `Use PhotoShop to do the layout`,
        `Finish the main and feature interfaces and upload to the ZCool Website`],
        description:`A competition that design the mobile theme hosted by OPPO.`, 
        url: `http://www.zcool.com.cn/work/ZMzUzNDExNg==.html`
      }

      ]
*/
    }
  },
  methods: {
    showDetail: function(projectCid){
      this.activeCid = projectCid;
    },
    HideDetail: function(){  
      this.activeCid = '';   
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
@media screen and (max-height: 400px){
.projectDetail{
      max-height: 350px;
      overflow: scroll;
}
}

@media screen and (min-height: 400px) and (max-height: 500px){
.projectDetail{
      max-height: 400px;
      overflow: scroll;
}
}

@media screen and (min-height: 500px) and (max-height: 600px){
.projectDetail{
      max-height: 500px;
      overflow: scroll;
}
}

@media screen and (min-height: 600px) and (max-height: 700px){
.projectDetail{
      max-height: 600px;
      overflow: scroll;
}
}
*/

@media screen and (max-width: 820px){
.content{
  border-bottom: 1px solid #cdcecf;
  width:100%;
}
.description{
  width:100%;
  margin-top:15px;
}

}

@media screen and (min-width: 820px){
.content{
  float: left;
  border-right: 1px solid #cdcecf;
  width:66%;
  padding-right:15px;
}
.description{
  float: right;
  width:29%;
  margin-left:15px;
}


}


.Projects{
  margin:5% 10%;
  /*height:400px;*/
}
#projectBlk{
  margin-top: 30px;

}

.title{
  margin-bottom: 30px !important;
  color:#000;
}

.detail{
  width:100%;
  color:#6f6f6f;
}

a.close_button{
    float: right;
    width: 24px;
    height: 24px;
    /*background: url(../assets/menu.png) center center no-repeat;
    background-size: 24px;*/
}

.hideIt{
  display: none;
}
.showIt{
  display: block;
}

.mask{
    z-index: 99999;
    position: fixed;
    right: 0;
    overflow-x: hidden;
    background: rgba(81,87,105,.4);
    top: 0;
    width: 100%;
    height: 100%;
    transition-property: all;
    transition-timing-function: cubic-bezier(.7,1,.7,1);
    transition-duration: .3s;
    left: 0;
}


.project{
  width:100%;
  text-align: left;
    height:auto;
}

.projectDetail{
  width:80%;
  background: #fff;
  height: auto;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  padding: 30px;
  margin: 0 auto;
  transform: translate3d(0,-50%,0);
  max-height: 80%;
  overflow-y:scroll;
}


.project h2{
  font-size: 1.2em;
}
.project h3{
  font-size: 1.14em;
  font-weight: 100;
  margin: 1% 0;
}


.project p{
  font-size: 1.1em;
  margin-bottom: 10px;
  word-wrap: break-word;
  /* word-break: break-all; */
  /* overflow: hidden; */
}


ol li{
  list-style-position: inside;
  font-size: 1em;
}

ol{
  margin-bottom: 20px;
}

img{
  width:100%;
}

img:hover{
  filter:alpha(Opacity=50);
  -moz-opacity:0.5;
  opacity: 0.5;
  transition: all 1s cubic-bezier(0.4, 0, 0, 1);
  cursor: pointer;
} 

</style>
