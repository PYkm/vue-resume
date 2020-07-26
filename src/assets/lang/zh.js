module.exports = {
  navs: [
      {name: '首页'},
      {name: '关于我'},
      {name: '工作经验'},
      {name: '项目经历'},
      {name: '联系方式'},
    ],
  toggleLang: 'English',
  home:{
    me: '网页前端工程师'
  },
  about: {
  intro: "你好, 欢迎查看我的简历。我是TakeAction_行动，来自中国，现在在上海工作。我是一名网页设计爱好者及开发者。2015年毕业，本科攻读计算机科学与技术专业。",
    like:'我喜欢: ',
    skill:'我的技能: ',
    hobbies:[
        {name: '看小说'},
        {name: '看纪录片'},
        {name: '听音乐'},
        {name: '学英语'},
        {name: '看美剧'}
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
        {text: ['location2','上海']},
        {text: ['mobile','+86 1** **** ****']},
        {text: ['envelop','TakeActionBiz@hotmail.com']},
        {text: ['earth','http://taxingdong.com/']}
    ]
  },
  projects: [
    { 
    cid:3, 
        src:'SF-Express.jpg', 
        name: `顺丰3D转场系统设计`, 
        duration:`2017/10 -- 2018/03`, 
        content:`作为团队中的唯一一名网络工程师，我独立完成了以下工作内容：`, 
        lists: [
        `搭建虚拟测试服务器及顺丰公司网站服务器(Windows Server 2012).`,
        `Apache Tomcat 9.0 的安装及环境配置`,
        `使用Eclipse IDE for Java EE Developers来构建Java Web程序(JSP, HTML, CSS 和 JS)，包括前端及后台程序。最终使网站兼容IE6及以下浏览器，此网站是可响应页面，各移动端设备显示良好`,
        `从scm官方网站下载scm manager的war包，并将其配置与Tomcat中。通过其实现了网站权限与服务器上固定repo之间的权限绑定。`
        ], 
        description: `本项目需要我司为顺丰客户提供一个CAD插件。使其限制的不同员工对此软件及相应内容有不同的访问权限。本网站部分提供了与AD控制器的联系，使员工使用自己的域名及密码直接登录网站，本人主要负责服务器的搭建、网站前端和后台的编程。`,
        url: `抱歉，客户内部链接，不能提供访问链接。`
    },
    { 
    cid:2, 
        src:'Lightspeed.jpg', 
        name: `Ad-hoc & Tracker 项目`, 
        duration:`2015/07 -- 2017/05`, 
        content:`本人主要负责中国香港及新加坡市场的项目。以下是我的主要工作内容：`, 
        lists: [
        `快速浏览客户提供的问卷，提出存在的逻辑问题，向PM提出问题，PM向客户反馈并获得更新`,
        `基于客户提供的最终版问卷，使用HTML, XML, CSS, JS 及 Python 进行编程。`,
        `如果受访者是多国对象或需要多种语言，则完成翻译文档`,
        `项目上线，协助DP和PM进行数据检查和最终客户反馈。`
        ],
        description:`与TNS, Millward Brown, IpSOS 及其他调研公司或客户合作完成纸质问卷向在线调研的转变。`, 
        url: `抱歉，因为调研问卷针对固定人群且有时间限制，所以没有可提供连接，但如果你曾做过Lightspeed Research 公司的调研，此页面可能出自我手。`
    },
    {   
    cid:1, 
        src:'2nd-OPPO-Mobile-Theme-Contest_CN.JPG', 
        name: `第二届OPPO手机主题大赛`, 
        duration:`2014/03 -- 2014/04`, 
        content:`在此期间，我完成了:`, 
        lists: [
        `对手机主题标准的调查、记录`,
        `学习了手机主题中icon的标准尺寸、设计要素等`,
        `使用CoreIDraw绘制主办方要求的图标群`,
        `使用PhotoShop完成页面版式设计`,
        `完成了主屏幕及其他工程页面，并上传至站酷网`],
        description:`站酷网上的第二届OPPO手机主题大赛，本次比赛虽未获奖，但让大学时的我对设计有了一定理解，而且提高了审美`, 
        url: `http://www.zcool.com.cn/work/ZMzUzNDExNg==.html`
    }
  ],
  work:{
    photos: [
    {
      cid:3, 
      alt:'ZW-CAD',
      src: 'static/logo/zwcad.jpg',
      title:`网络开发工程师`,
      duration:`2017/07 -- 2018/05`,
      content: `ZW-CAD是中国CAD领先品牌，总部位于中国广州。我曾工作于上海分公司。本人主要负责服务器搭建、前端及后端网站建设及部署、其他工作。参与的大项目为为顺丰公司设计3D转场系统。`
    },
    {
      cid:2,
      alt:'Lightspeed Research', 
      src: 'static/logo/lsr.jpg',
      title:`问卷编程`,
      duration:`2015/05 -- 2017/05 `,
      content: `Lightspeed Research是一家为客户提供高质量在线调研、数据、会员、报表的全球调研公司，总部位于英国伦敦。我作为一名问卷程序员工作了2年，主要负责为客户提供高质量在线调研问卷链接、逻辑检查、数据检查等。`
    },
    {
      cid:1, 
      alt:'Seedory种子宣言',
      src: 'static/logo/seedory.jpg',
      title:`美工(实习)`,
      duration:`2015/03 -- 2015/04`,
      content: `Seedory种子宣言是一家化妆品品牌创业公司。我参与了一个月的美工实习，主要负责为产品拍摄符合设定的图片及后期处理、设计公司微信端文章的图片、公司每日内部通知及微信群微商传播图片设计及排版。 `
    }

    ]
  }
}