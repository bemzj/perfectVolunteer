// pages/serverBook/serverBook.js
const date = new Date();
const years = [];
const months = [];
const days = [];
const times = [];

for (let i = date.getFullYear(); i <= date.getFullYear()+100; i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
selectDate(date.getMonth()+1);
function selectDate(n){
  console.log(1);
  days.splice(0, days.length);
  switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      for (let i =1; i <= 31; i++) {
        days.push(i)
      }
      break;
    case 2:
      if (date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) {
        for (let i = 1; i <= 29; i++) {
          days.push(i)
        }
      } else {
        if (date.getFullYear() % 400 == 0) {
          for (let i = 1; i <= 29; i++) {
            days.push(i)
          }
        } else {
          for (let i = 1; i <= 28; i++) {
            days.push(i)
          }
        }
      }
      break;
    default:
      for (let i = 1; i <= 30; i++) {
        days.push(i)
      }
      break;
  }
}




for (let i = 9; i <= 16; i++) {
  times.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: '200rpx',
    tipStatus1:false,
    tipStatus2:false,
    vp:false,
    volunSrc:[
      {
        'src': '../../images/volunteer.png',
        'name':'王文杰0',
        'id':'123456'
      },
      {
        'src': '../../images/volunteer.png',
        'name': '王文杰1',
        'id': '123456'
      },
      {
        'src': '../../images/volunteer.png',
        'name': '王文杰2',
        'id': '123456'
      },
      {
        'src': '../../images/volunteer.png',
        'name': '王文杰3',
        'id': '123456'
      },
      {
        'src': '../../images/volunteer.png',
        'name': '王文杰4',
        'id': '123456'
      }
    
    ],
    myvolunteer:{
      'src': '../../images/volunteer.png',
      'name': '王文杰4',
      'id': '123456'
    },
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
    },
    
    produceDetails:'../../images/produce_details_no.png',
    bookStyle: ['打扫1', '打扫2', '打扫3', '打扫4'],
    style:0,
    region: ["省","市", "区"],
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getMonth()+1,
    days: days,
    times:times,
    time: date.getHours(),
    day: date.getDate(),
    value: [0, date.getMonth(), date.getDate() - 1, date.getHours()-9],
    tsStatus:false,
    serverStatus:0,
    spIndex:0
  },
  bindChange: function (e) {
    const val = e.detail.value;
    selectDate(this.data.months[val[1]]);
    this.setData({
      days: days,
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      time: this.data.days[val[3]]+8
    })
  },
  styleChange:function(e){
    this.setData({
      style: e.detail.value
    })
  },
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  closeSelect:function(){
    this.setData({
      tsStatus: !this.data.tsStatus
    })
  },
  showSelect:function(){
    this.setData({
      tsStatus: !this.data.tsStatus
    })
  },
  showAddress: function () {
    this.setData({
      serverStatus: !this.data.serverStatus
    })
  },
  closeAddresses:function(){
    this.setData({
      serverStatus: !this.data.serverStatus
    })
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
  changes: function (event){
    console.log(event);
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
  
  },
  comfirmBook:function(){
    this.setData({
      serverStatus: !this.data.serverStatus,
      tipStatus1: !this.data.tipStatus1
    });
  },
  // 弹窗1取消
  closeTip:function(){
    this.setData({
      tipStatus1: !this.data.tipStatus1
    });
  },
  // 弹窗2取消
  cancel: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
  // 弹窗2确定
  comfirmPop:function(){
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
  leftTap:function(){
    let spIndex = ++this.data.spIndex
    if(spIndex == this.data.volunSrc.length)
    {
      spIndex=0;
    }
    this.setData({
      spIndex: spIndex
    });
  },
  rightTap: function () {
    let spIndex = --this.data.spIndex
    if (spIndex == -1) {
      spIndex = this.data.volunSrc.length-1;
    }
    this.setData({
      spIndex: spIndex
    });
  },
  confrimVol:function(e){
    var dataList = this.data.myvolunteer;
    dataList = this.data.volunSrc[e.currentTarget.dataset.index];
    this.setData({
      myvolunteer: dataList
    });
  },
  randomVol:function(){
    var dataList = this.data.volunSrc[parseInt(Math.random()*this.data.volunSrc.length)];
    this.setData({
      myvolunteer: dataList
    });
  },
  cVolunteer:function(){
    this.setData({
      vp: !this.data.vp
    });
  }
})