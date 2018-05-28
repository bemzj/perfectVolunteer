// pages/personInfo/personInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:1,
    volunteerNav:[
      { image: '../../images/icon01.png', text:'新任务'},
      { image: '../../images/icon02.png', text: '待完成任务' },
      { image: '../../images/icon03.png', text: '已完成任务' },
    ],
    volunteerList:[
      { image: '../../images/icon04.png', text: '金点子' },
      { image: '../../images/icon05.png', text: '我的名片' },
      { image: '../../images/icon06.png', text: '我的顾客' },
      { image: '../../images/icon07.png', text: '历史评价' },
    ],
    clientNav:[
      { image: '../../images/icon09.png', text: '预约中' },
      { image: '../../images/icon10.png', text: '预约成功' },
      { image: '../../images/icon11.png', text: '预约失败' },
      { image: '../../images/icon12.png', text: '我的评价' },
    ],
    clientList:[
      { image: '../../images/icon13.png', text: '免费名额' },
      { image: '../../images/icon14.png', text: '服务历史' },
      { image: '../../images/icon15.png', text: '金点子' },
      { image: '../../images/icon16.png', text: '我的义工' },
      { image: '../../images/icon17.png', text: '我的邀请码' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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