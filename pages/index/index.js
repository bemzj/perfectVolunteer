//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 0,
    swiperHeight: '417rpx',
    swiper:{
      autoplay:'true',
      interval:5000,
      duration:300,
      circular:'true',
      bottomBanners: [
        '../../images/index_banner1.png',
        '../../images/index_banner1.png',
        '../../images/index_banner1.png'
      ]
    },
    btns:[
      {
        url: '../../images/index_btn1.png',
        name:'义工登记',
        link:'../../pages/registerVolun/registerVolun'
      },
      {
        url: '../../images/index_btn2.png',
        name: '服务预约',
        link: '../../pages/serverBook/serverBook'
      },
      {
        url: '../../images/index_btn3.png',
        name: '个人中心',
        link: '../../pages/register/register'
      },
      {
        url: '../../images/index_btn4.png',
        name: '活动说明',
        link: '../../pages/register/register'
      }
    ]
    
  },
  swiperChange:function(e){
    this.setData({
      count:e.detail.current
    });
  },
  onShow:function(){
    var that = this;
    wx.getImageInfo({
      src: that.data.swiper.bottomBanners[0],
      success: function (res) {
        that.setData({
          swiperHeight: res.height + 'rpx'
        })
      }
    })
  },
  //事件处理函数
  bindViewTap: function() {
  
  },
  onShareAppMessage:function(e){
    
  }
})
