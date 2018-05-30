// pages/myVolunteer/myVolunteer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { image: '../../images/head01.png', client: 'XX义工', phone: '136728398765', date: '2018.06.02', serial: 'xxxxx1', event01: '空调', address: '广州市海珠区新港街道2号',has:true},
      { image: '../../images/head01.png', client: 'XX义工', phone: '136728398765', date: '2018.06.02', serial: 'xxxxx2', event01: '空调', address: '广州市海珠区新港街道2号', has: false},
      { image: '../../images/head01.png', client: 'XX义工', phone: '136728398765', date: '2018.06.02', serial: 'xxxxx3', event01: '空调', address: '广州市海珠区新港街道2号', has: false},
      { image: '../../images/head01.png', client: 'XX义工', phone: '136728398765', date: '2018.06.02', serial: 'xxxxx4', event01: '空调', address: '广州市海珠区新港街道2号', has: false}
    ],
    detailData: {
      name: '',
      phone: '',
      serial: '',
      address: '',
      src:""
    },
    popUp:false,
    currentIndex:-1,
    popText1:'',
    tipStatus1: false, //弹窗1
    tipStatus2: false, //弹窗2
  },
  click01:function(e){
    var opj = this.data.detailData;
    opj.name = this.data.dataList[e.currentTarget.dataset.index].client;
    opj.phone = this.data.dataList[e.currentTarget.dataset.index].phone;
    opj.serial = this.data.dataList[e.currentTarget.dataset.index].serial;
    opj.address = this.data.dataList[e.currentTarget.dataset.index].address;
    opj.src = this.data.dataList[e.currentTarget.dataset.index].image;
    this.setData({
      detailData: opj,
      popUp:!this.data.popUp,
      currentIndex:e.currentTarget.dataset.index
    })
  },
  //确定按钮
  btn01(e){
    var obj = this.data.dataList;
    obj[this.data.currentIndex].has = !obj[this.data.currentIndex].has;

    this.setData({
      tipStatus1: !this.data.tipStatus1,
      dataList: obj,
      popText1:'您的预约申请已提交，请耐心等待！'
    })
  },
  //关闭页面
  closePop:function(){
    this.setData({
      popUp: !this.data.popUp
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
  // 弹窗1取消
  closeTip: function () {
    this.setData({
      tipStatus1: !this.data.tipStatus1,
      popUp: !this.data.popUp
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
})