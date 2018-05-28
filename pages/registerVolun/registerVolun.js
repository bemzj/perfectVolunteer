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
    region: [
      {  
        'province':"省",
        'city':"市",
        'area':"区"
      }
    ],
    headsrc:'../../images/head.png'
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
      wx.showModal({
        title: '微信提示',
        content: '是否删除该地址',
        mask: 'true',
        success: function (res) {
          if (res.confirm) {
            nowRegion.splice(index, 1);
            self.setData({
              region: nowRegion
            });
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
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
  
  }
})