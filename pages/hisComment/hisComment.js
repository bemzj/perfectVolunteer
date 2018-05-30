// pages/completed/completed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: '陈小姐1', identifier:'123456',tel: '15999911956', date: '2018.06.02', comment: "",'star':5 ,status:0},
      { image: '../../images/head01.png', client: '陈小姐2', identifier: '123457',tel: '15999911956', date: '2018.06.02', comment: "", 'star': 4,status: 1},
      { image: '../../images/head01.png', client: '陈小姐3', identifier: '123458',tel: '15999911956', date: '2018.06.02', comment: "广东金融学院广东金融学院广东金融学院", 'star': 4,status: 0},
      { image: '../../images/head01.png', client: '陈小姐4', identifier: '123459',tel: '15999911956', date: '2018.06.02', comment: "广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院广东金融学院", 'star': 3,status: 0}
    ],
    index1: null,
    user_type:'U',
    currentVolunteer:{
      name: '',//姓名
      identifier: '',//编号
      src:''  //头像路径  
    },
    starLevel: 0,//星星等级
    commentLevel:["您还没评价","非常不满意","不满意","一般满意","满意","非常满意"],
    commentShow:false,
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
    poptext1:"",
    commentIndex:-1,
    commentTxt:''
  },
  tixing: function (e) {
    // let num = e.currentTarget.dataset.index
    // this.setData({
    //   index1:num
    // })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var navTitle = "";
    if (this.data.user_type == 'V') {
      navTitle = "历史评价";
    } else {
      navTitle = "我的评价";
    }

    wx.setNavigationBarTitle({
      title: navTitle//页面标题为路由参数
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //选择星星等级
  selectLevel: function(e){
    this.setData({
      starLevel: e.currentTarget.dataset.index
    });
  },
  //显示评论
  showComment:function(e){   
    var datas = this.data.dataList[e.currentTarget.dataset.index];
    var opj = this.data.currentVolunteer;
    opj.name = datas.client;
    opj.identifier = datas.identifier;
    opj.src = datas.image;
     
    this.setData({
      commentShow:!this.data.commentShow,
      currentVolunteer: opj,
      starLevel:0,
      commentIndex: e.currentTarget.dataset.index
    });
  },
  //失去焦点
  getCommentText:function(e){
    this.setData({
      commentTxt: e.detail.value
    });
  },
  //提交评论
  comfrimComment:function(){
    this.setData({
      tipStatus1: !this.data.tipStatus1,
      poptext1:"感谢您的评论！"
    });
  },
  //关闭页面
  closeComment:function(){
    this.setData({
      commentShow: !this.data.commentShow
    });
  },
  // 弹窗1取消
  closeTip: function () {
    //如果提交成功
    var obj = this.data.dataList;
    obj[this.data.commentIndex].comment = this.data.commentTxt;
    obj[this.data.commentIndex].star = this.data.starLevel;
    this.setData({
      tipStatus1: !this.data.tipStatus1,
      commentShow: !this.data.commentShow,
      dataList: obj
    });
  },
  // 弹窗2取消
  cancel: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
  // 弹窗2确定
  comfirmPop: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
})