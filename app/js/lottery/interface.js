import $ from "jquery";

/**
 * 接口类
 *
 * @class Interface
 */
class Interface {
  /**
   * 获取遗漏数据
   * @param {string} issue 当前期号
   */
  getOmit(issue) {
    let self = this;
    return new Promise((resolve, rejects) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issue
        },
        dataType: 'json',
        success: function (res) {
          //避免回调,使用对象内部赋值
          self.setOmit(res.data);
          resolve.call(self, res);
        }, error: function (error) {
          rejects.call(error);
        }
      });
    });
  }
  /**
   * 获取开奖号码
   * @param {string} issue 当前期号
   */
  getOpenCode(issue) {
    let self = this;
    return new Prosime((resolve, rejects) => {
      $.ajax({
        url: '/get/openCode',
        data: {
          issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        }, error: function (error) {
          rejects.call(error);
        }
      });
    });
  }
  /**
   * 获取当前状态
   * @param {string} issue 当前期号
   */
  getState(issue) {
    let self = this;
    return new Prosime((resolve, rejects) => {
      $.ajax({
        url: '/get/state',
        data: {
          issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res);
        }, error: function (error) {
          rejects.call(error);
        }
      });
    });
  }
}

export default Interface;