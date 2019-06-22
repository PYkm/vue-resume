module.exports = {
  navs: [
      {name: 'Home'},
      {name: 'About'},
      {name: 'Work'},
      {name: 'Projects'},
      {name: 'Contact'},
    ],
  toggleLang: '中文',
  home: {
  	me: 'A Web Front End Developer'
  },
  about: {
	intro: "Hi, I'm Jennifer Chan from China, after finished 4 years long undergraduate study and got a bachelor's degree in Computer Science and Technology from SIT at 2015. I have been working as a web designer, front-end developer almost 3 years based in Shanghai.",
  	like: 'I like to: ',
  	skill: 'My Skills: ',
  	hobbies:[
        {name: 'read novels'},
        {name: 'watch movies'},
        {name: 'listen musics'},
        {name: 'go skating'},
        {name: 'watch American TV series'}
    ],
    skills:[
        {name: 'HTML5', score: 80},
        {name: 'CSS3', score: 80},
        {name: 'JavaScript', score: 70},
        {name: 'PhotoShop', score: 80},
        {name: 'Vue.js', score: 60}
    ]
  },
  contact:{
    infos:[
        {text: ['location2','Shanghai']},
        {text: ['mobile','+86 188 **** ****']},
        {text: ['envelop','jennifer.chan3@hotmail.com']},
        {text: ['earth','https://pykm.github.io/Blog/']}
    ]
  },
  projects: [
    { cid:3, 
        src:'SF-Express.jpg', 
        name: `3D transition System Design of SF-Express`, 
        duration:`2017/10 -- 2018/03`, 
        content:`I am the only network engineer in the team, completed below tasks by myself:`, 
        lists: [
        `Build Testing Server and Client Server(Windows Server 2012).`,
        `Apache Tomcat 9.0 installation and environment configuration.`,
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
  ],
  work:{
    photos: [
        {
          cid:3, 
          alt:'ZW-CAD',
          src: 'static/logo/zwcad.jpg',
          title:`Network Develop Engineer`,
          duration:`2017/07 -- 2018/04`,
          content: `ZW-CAD is a CAD leader brand in China, the head office is based in Guangzhou. I worked as a Network Develop Engineer. I'm responsible for building Server, Constructing Website with both Front-end and Back-end and so on. I was participated in projects which is worked for SF-Express.`},
        {
          cid:2, 
          alt:'Lightspeed Reserch',
          src: 'static/logo/lsr.jpg',
          title:`Survey Programmer`,
          duration:`2015/05 -- 2017/05 `,
          content: `Lightspeed Research is a company that provide highest-quality online research for clients, the head office is based in London. I worked as a SP for 2 years. I was responsible for providing high-quality Online questionnaire for our clinets, Doing the logic programming and data checking as well.`},
        {
          cid:1, 
          alt:'Seedory',
          src: 'static/logo/seedory.jpg',
          title:`Art Designer(Part-time)`,
          duration:`2015/03 -- 2015/04`,
          content: `Seedory is a cosmetics brand. I worked at this company as a Art Designer, I was responsible for taking photos of products, as well as the post processing. And I also maked the images which needs to publish on the Webchat or Taobao everyday. `}

    ]
  }
}