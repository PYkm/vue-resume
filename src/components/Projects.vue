<template>
  <div id="Projects">
    <a name="Projects" href="#Projects">Projects</a>
    <div class="project" v-for="project in projects">
      <!--<img @click src="static/projects/SF-Express.jpg"/>
      <img src="static/projects/Lightspeed.jpg"/>
      <img src="static/projects/2nd-OPPO-Mobile-Theme-Contest.JPG"/>-->
        <img @click="showDetail" :src="'static/projects/'+project.src"/>
        <div class="mask" :class="status + 'It'">
        <div v-show="true" :id="'project' + project.cid">
          <h2>{{project.name}}</h2>
          <h3>{{project.duration}}</h3>
          <p>{{project.content}}</p>
          <ol>
            <li v-for="list in project.lists">{{list}}</li>
          </ol>
          <p class="">{{project.description}}</p>
        </div>
        </div>
      <!--
      <h1>Projects 1</h1>
      <p>.................................................</p>
      -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Projects',
  data () {
    return {
      status: 'hide',
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

    }
  },
  methods: {
    showDetail: function(){      
      this.status = 'projectCid';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Projects{
  margin:5% 10%;
  /*height:400px;*/
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
}

.mask div{
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
  font-size: 1.05em;
}


ol li{
  list-style-position: inside;
  font-size: 1em;
}

img{
  width:100%;
}

img:hover{
  filter:alpha(Opacity=80);
  -moz-opacity:0.8;
  opacity: 0.8;
  transition: all 1s cubic-bezier(0.4, 0, 0, 1);
} 

</style>
