class Calculate {
  /**
   * 计算注数
   * @param {number} active 当前选中的号码
   * @param {string} play_name 当前玩法标识
   * @returns {number} 注数
   */
  computeCount(active, play_name) {
    let count = 0;
    const exist = this.play_list.has(play_name);
    const array = new Array(active).fill('0');
    if (exist && play_name.at(0) === 'r') {
      count = Calculate.combine(array, play_name.split('')[1]);
    }
    return count;
  }
  /**
   * 奖金范围预测
   * @param {number} active 当前选中的号码
   * @param {string} play_name 当前玩法标识
   * @returns {array} 奖金范围
   */
  computeBonus(active, play_name) {
    const play = play_name.split('');
    const self = this;
    let array = new Array(play[1] * 1).fill(0);
    let min, max;
    if (play[0] === 'r') {
      let min_active = 5 - (11 - active);
      if (min_active > 0) {
        if (min_active - play[1] >= 0) {
          array = new Array(min_active).fill(0);
          min = Calculate.combine(array, play[1].length);
        } else {
          if (play[1] - 5 > 0 && active - play[1] >= 0) {
            array = new Array(active - 5).fill('0');
            min = Calculate.combine(array, play[1] - 5).length;
          } else {
            min = active - play[1] > -1 ? 1 : 0;
          }
        }
      } else {
        min = active - play[1] > -1 ? 1 : 0
      }

      let max_active = Math.min(active, 5);
      if (play[1] - 5 > 0) {
        if (active - play[1] >= 0) {
          array = new Array(active - 5).fill('0');
          max = Calculate.combine(array, play[1] - 5).length;
        } else {
          max = 0;
        }
      } else if (play[1] - 5 < 0) {
        array = new Array(Math.min(active, 5)).fill(0);
        max = Calculate.combine(array, play[1]).length;
      } else {
        max = 1;
      }
      return [min, max].map(item => item.self.play_list.get(play_name).bonus);
    }
  }
  /**
   * 组合运算
   * @param {array} array 参与运算的数组
   * @param {number} size 组合运算的基数
   * @returns {number} 计算注数
   */
  static combine(array, size) {
    let allResult = [];
    (function f(array, size, result) {
      let arrayLength = array.length;
      if (size > arrayLength) {
        return;
      }
      if (size == arrayLength) {
        allResult.push([].concat(result, array));
      } else {
        for (let index = 0; index < arrayLength; index++) {
          let newResult = [].concat(result);
          newResult.push(array[i]);
          if (size == 1) {
            allResult.push(newResult);
          } else {
            let newArray = [].concat(array);
            newArray.splice(0, i + 1);
            f(newArray, size - 1, newResult)
          }
        }
      }
    })(array, size, []);
  }
}

export default Calculate;