// pages/proposal/proposal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    writing:false,
    user_type:'V',
    popText1: '',
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
    textareaTxt:''
  },
  write:function(e){
    this.setData({
      writing:true
    })
  },
  showIt:function(e){
    if(e.detail.value ==  ''){
      this.setData({
        writing:false
      })
    }
  },
  submitSuggust:function(e){
    if (this.data.writing==true)
    {
      this.setData({
        tipStatus1: !this.data.tipStatus1,
        popText1:'提交成功，感谢您的建议！',
        textareaTxt:'',
        writing: false
      });
    }else{
      this.setData({
        tipStatus1: !this.data.tipStatus1,
        popText1:'请输入您的建议，谢谢！'
      });
    }
  },
  // 弹窗1取消
  closeTip: function () {
    this.setData({
      tipStatus1: !this.data.tipStatus1,
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