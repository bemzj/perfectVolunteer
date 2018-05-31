// pages/registerVolun/registerVolun.js
Page({
  bindRegionChange: function (e) {   
    var index = e.target.dataset.index;
    var nowRegion = this.data.region; 
    nowRegion[index].province = e.detail.value[0];
    nowRegion[index].city = e.detail.value[1];
    nowRegion[index].area = e.detail.value[2];
    this.setData({
      region:nowRegion
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    volunteerData:{
      src:'',
      code:'',
      id:'',
      name:'',
      phone:'',
      idcard:''
    },
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
    popText1: '',
    region: [
      {  
        'province':"省",
        'city':"市",
        'area':"区"
      }
    ],
    headsrc:'../../images/head.png',
    addressIndex:-1 //删除地址的标识
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
  addAddress:function(){
    var nowRegion = this.data.region;
    nowRegion.push(
      {
        'province':"省",
          'city':"市",
            'area':"区"
      }
    );
    popStatus:-1,//识别弹窗从那里调用
    this.setData({
      region: nowRegion
    });
  },
  subtractionAddress:function(e){
    var index = e.currentTarget.dataset.index;
    var nowRegion = this.data.region;
    var self = this;
    if (typeof index == 'undefined')
    {
      wx.showToast({
        title: '操作频繁，删除失败',
        icon: 'fail',
        duration: 5000
      })
    }else{
      this.setData({
        popStatus: 0,
        tipStatus2: !this.data.tipStatus2,
        popText1: '请确认是否删除该地址！',
        addressIndex: index
      });
    }
    
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
  nowRegister:function(){
    
    this.setData({
      popStatus:1,
      tipStatus2: !this.data.tipStatus2,
      popText1:'请确认信息您所提交的信息是否正确？'
    });
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
    if (this.data.popStatus==0)
    {
      var nowRegion = this.data.region;
      nowRegion.splice(this.data.addressIndex, 1);
      this.setData({
        region: nowRegion,
        tipStatus2: !this.data.tipStatus2,
        tipStatus1: !this.data.tipStatus1,
        popText1: "删除成功！"
      });
    } else if (this.data.popStatus == 1){
      this.setData({
        tipStatus2: !this.data.tipStatus2,
        tipStatus1: !this.data.tipStatus1,
        popText1: "登记成功，谢谢！"
      });
    }
  },
})