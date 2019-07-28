var assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual(-1, -1/* 填空题 */)
    })
  })
})

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepStrictEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(
      fn,
      function(err) {
        console.log('message:', err.message)
        console.log('errorName:', err.__proto__.name)
        return true;
      },
      "错误啦！！！！！！！"
    )
  })
})