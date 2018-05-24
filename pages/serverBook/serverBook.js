// pages/serverBook/serverBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: '200rpx',
    swiper: {
      indicatorDots:'true',
      autoplay: 'true',
      interval: 5000,
      duration: 300,      
      circular: 'true',
      bottomBanners: [
        '../../images/book_banner1_no.png',
        '../../images/book_banner2_no.png',
        '../../images/book_banner1_no.png'
      ]
    }
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
    var that = this;
    wx.getImageInfo({
      src: that.data.swiper.bottomBanners[0],
      success: function (res) {
        that.setData({
            swiperHeight: res.height + 'rpx',
        })
      }
    })
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