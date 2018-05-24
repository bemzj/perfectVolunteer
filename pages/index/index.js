//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    count: 0,
    swiper:{
      autoplay:'true',
      interval:5000,
      duration:300,
      swiperHeight:'417rpx',
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
        link:'../../pages/register/register'
      },
      {
        url: '../../images/index_btn2.png',
        name: '服务预约',
        link: '../../pages/register/register'
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
          swiper: {
            swiperHeight: res.height+'rpx',
            autoplay: 'true',
            interval: 5000,
            duration: 300,
            
            swiperHeight: res.height+'rpx',
            circular: 'true',
            bottomBanners: [
              '../../images/index_banner1.png',
              '../../images/index_banner1.png',
              '../../images/index_banner1.png'
            ]
          }
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
