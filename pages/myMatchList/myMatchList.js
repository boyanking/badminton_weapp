import request from '../../request/requestFunc.js';

Page({
  data: {
    matchList: [],
    noRecord: false
  },

  onLoad: function (options) {
  
  },

  onShow: function () {
    let _this = this;
    
    let param = {
      'API_URL': '/creatematch',
      'data':{},
      'method': 'GET'
    }

    request.result(param).then(res => {
      _this.setData({
          matchList: res.data
        })
      }
    ).catch(e =>
      console.log(e)
    )
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  },

  //进入编辑页面
  gotoEdit(e){
    wx.navigateTo({
      url: '../editMatch/editMatch?matchid=1',
    })
  },

  //进入添加页面
  gotoAdd(e){
    wx.navigateTo({
      url: '../addMatchPage/addMatchPage?matchid=1',
    })
  },

  //进入赛程详情页面
  gotoDetails(e){
    wx.navigateTo({
      url: '../matchDetails/matchDetails?matchid=1',
    })
  },

  //删除
  deleteMatch(e){
    wx.showModal({
      content: '确定删除该比赛吗？',
      success: function (res) {
        if (res.confirm) {
          //调用接口
        } else if (res.cancel) {
          
        }
      }
    })
  }
})