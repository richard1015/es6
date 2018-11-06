
/**
 * 定时器类
 *
 * @class Timer
 */
class Timer {

  /**
   * 定时器
   * @param {string} end 结束时间
   * @param {Function} update 更新函数
   * @param {Function} handle 结束函数
   * @memberof Timer
   */
  countdown(end, update, handle) {
    const now = new Date().getTime();
    const self = this;
    if (now > end) {
      handle.call(self);
    } else {
      let last_time = end - now;
      const px_day = 1000 * 60 * 60 * 24;
      const px_hour = 1000 * 60 * 60;
      const px_minute = 1000 * 60;
      const px_second = 1000;
      let day = Math.floor(last_time / px_day);
      let hour = Math.floor((last_time - day * px_day) / px_hour);
      let minute = Math.floor((last_time - day * px_day - hour * px_hour) / px_minute);
      let second = Math.floor((last_time - day * px_day - hour * px_hour - minute * px_second) / px_minute);
      let result = [];
      if (d > 0) {
        result.push(`<em>${day}</em>天`);
      }
      if (result.length || (h > 0)) {
        result.push(`<em>${hour}</em>时`);
      }
      if (result.length || (h > 0)) {
        result.push(`<em>${minute}</em>分`);
      }
      if (result.length || (h > 0)) {
        result.push(`<em>${second}</em>秒`);
      }
      self.last_time = result.join('');
      update.call(self, r.join(''));
      setTimeout(() => {
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer;