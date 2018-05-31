// pages/serverBook/serverBook.js
const date = new Date();
const years = [];
const months = [];
const days = [];
const times = [];
for (let i = date.getFullYear(); i <= date.getFullYear() + 100; i++) {
  years.push(i)
}
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
selectDate(date.getMonth() + 1);
function selectDate(n) {
  days.splice(0, days.length);
  switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      for (let i = 1; i <= 31; i++) {
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
    swiperHeight: '200rpx', //最上面轮播图
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
    popText1:'',
    vp: false, //义工选择弹窗
    volunSrc: [
      {
        'src': '../../images/volunteer.png',
        'name': '王文杰0',
        'id': '123456'
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
    ],//义工人选
    myvolunteer: {
      'src': '../../images/volunteer.png',
      'name': '王文杰4',
      'id': '123456'
    },//我的义工数据
    swiper: {
      indicatorDots: 'true',
      autoplay: 'true',
      interval: 5000,
      duration: 300,
      circular: 'true',
      bottomBanners: [
        '../../images/book_banner1_no.png',
        '../../images/book_banner2_no.png',
        '../../images/book_banner1_no.png'
      ]
    },//首页轮播数据

    produceDetails: '../../images/produce_details_no.png', //服务预约详情
    bookStyle: ['打扫1', '打扫2', '打扫3', '打扫4'], //服务事项
    style: 0, //事项选择项
    region: ["省", "市", "区"], //区域选择
    years: years, //年
    year: date.getFullYear(), //获取当年年份
    months: months, //月
    month: date.getMonth() + 1, //获取当年月份
    days: days, //天
    times: times, //时
    time: date.getHours(), //获取当前小时
    day: date.getDate(), //获取当前天
    value: [0, date.getMonth(), date.getDate() - 1, date.getHours() - 9], //设置数据
    tsStatus: false, //时间选择显示
    serverStatus: 0, //预约弹窗显示
    spIndex: 0 //义工当前选择项
  },
  //时间选择
  bindChange: function (e) {
    const val = e.detail.value;
    selectDate(this.data.months[val[1]]);
    this.setData({
      days: days,
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      time: this.data.days[val[3]] + 8
    })
  },
  //服务选择
  styleChange: function (e) {
    this.setData({
      style: e.detail.value
    })
  },
  //区域选择
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  //关闭时间选择按钮
  closeSelect: function () {
    this.setData({
      tsStatus: !this.data.tsStatus
    })
  },
  //显示时间选择页面
  showSelect: function () {
    this.setData({
      tsStatus: !this.data.tsStatus
    })
  },
  //显示预约弹窗
  showAddress: function () {
    this.setData({
      serverStatus: !this.data.serverStatus
    })
  },
  //关闭预约弹窗
  closeAddresses: function () {
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    //设置轮播图高度
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
  //确定预约
  comfirmBook: function () {
    this.setData({
      serverStatus: !this.data.serverStatus,
      vp: !this.data.vp
    });
  },
  // 弹窗1取消
  closeTip: function () {
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
  comfirmPop: function () {
    this.setData({
      tipStatus2: !this.data.tipStatus2
    });
  },
  //左边按钮
  leftTap: function () {
    let spIndex = ++this.data.spIndex
    if (spIndex == this.data.volunSrc.length) {
      spIndex = 0;
    }
    this.setData({
      spIndex: spIndex
    });
  },
  //右边按钮
  rightTap: function () {
    let spIndex = --this.data.spIndex
    if (spIndex == -1) {
      spIndex = this.data.volunSrc.length - 1;
    }
    this.setData({
      spIndex: spIndex
    });
  },
  //确定人数
  confrimVol: function (e) {
    var dataList = this.data.myvolunteer;
    dataList = this.data.volunSrc[e.currentTarget.dataset.index];
    this.setData({
      myvolunteer: dataList
    });
  },
  //随机分配
  randomVol: function () {
    var dataList = this.data.volunSrc[parseInt(Math.random() * this.data.volunSrc.length)];
    this.setData({
      myvolunteer: dataList
    });
  },
  //确定义工
  cVolunteer: function () {
    this.setData({
      vp: !this.data.vp,
      tipStatus1: !this.data.tipStatus1,
      popText1:'预约信息提交成功！'
    });
  }
})