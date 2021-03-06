// 配置
window.Config = {

  // 站点名
  SiteName: '箴扰の站点监测',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
	'ur1104184-e7cbeed0e7128677a329467a',
    'm784488775-dd1ad84b209c05f8e185c33e',
    'm784490063-7b5da437e7f1e0d67613714d',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 30,

  // 导航栏菜单
  Navi: [
  //  {
    //  text: '无名小筑',
    //  url: 'https://blog.zr.ci/'
  //  },
  //  {
    //  text: 'GitHub',
    //  url: 'https://github.com/yb/uptime-status'
  //  }
  ]
};
