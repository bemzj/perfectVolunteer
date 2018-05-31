// pages/newTaskDetail/newTaskDetail.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    detailData:{
      name:'王文杰',
      phone:'136728398765',
      date:'2018年5月20日，13-15时',
      address:'广州市海珠区新港街道2号广州市海珠区新港街道2号',
      matter:'空调',
      msg: '您已预约成功，请保持手机畅通，方便义工与您联系。祝生活愉快！'
    },
    noNewDetails:'很抱歉！暂无最新预约详情！',
    status:1,
    user_type:'',//登录类型
    bookStatus:null,//预约类型
    bookTitle: ["预约中","预约成功","预约失败"],
    popText1: '',
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
  },
  serveComplete:function(){
    this.setData({
      popText1:"是否能确定服务已经完成！\n注意：确定后将无法修改，谢谢！",
      tipStatus2: !this.data.tipStatus2
    });
  },
  //拒绝
  refuse:function(){
    this.setData({
      popText1: "您是否拒绝该任务的申请！",
      tipStatus2: !this.data.tipStatus2
    });
  },
  accept:function(){
    this.setData({
      popText1: "接受任务成功，谢谢！",
      tipStatus1: !this.data.tipStatus1
    });
  },
  // 弹窗1取消
  closeTip: function () {
    
    this.setData({
      tipStatus1: !this.data.tipStatus1,
    });
    if (this.data.user_type == 'V') {
      wx.navigateTo({
        url: '../../pages/newTask/newTask'
      });
    }else{
      
    }
  },
  // 弹窗2取消
  cancel: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2    
    });
  },
  // 弹窗2确定
  comfirmPop: function () {
    if (this.data.user_type == 'V')
    {
      wx.navigateTo({
        url: '../../pages/newTask/newTask'
      });
    } else if (this.data.user_type == 'U'){
      this.setData({
        tipStatus2: !this.data.tipStatus2,
        tipStatus1: !this.data.tipStatus1,
        popText1: "服务已完成，谢谢！",
        status: 0
      });
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num = parseInt(options.bookStatus);
    console.log(num);
    var navTitle = "";
    this.setData({
      user_type: options.user_type,
      bookStatus: num
    })
    if (this.data.user_type=='V')
    {
      navTitle = "新任务详情";
    }else{
      navTitle = this.data.bookTitle[this.data.bookStatus];
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
  
  }
})