L2Dwidget.init({
	model: {
		jsonPath: '/js/live2d/model/live2d-widget-model-hibiki/assets/hibiki.model.json',
    scale: 1,
  },
  display: {
    superSample: 2,
    width: 100,
    height: 200,
    position: 'right',
    hOffset: 10,
    vOffset: 10,
  },
  mobile: {
    show: true,
    scale: 0.8,
    motion: true,
  },
  name: {
    canvas: 'live2dcanvas',
    div: 'live2d-widget',
  },
  react: {
    opacity: 1,
  },
  dev: {
    border: false
  },
  dialog: {
    enable: false,
    script: null
  }
/**
 * The init function
 * @param {Object}   [userConfig] User's custom config 用户自定义设置
 * @param {String}   [userConfig.model.jsonPath = ''] Path to Live2D model's main json eg. `https://test.com/miku.model.json` model主文件路径
 * @param {Number}   [userConfig.model.scale = 1] Scale between the model and the canvas 模型与canvas的缩放
 * @param {Number}   [userConfig.display.superSample = 2] rate for super sampling rate 超采样等级
 * @param {Number}   [userConfig.display.width = 150] Width to the canvas which shows the model canvas的长度
 * @param {Number}   [userConfig.display.height = 300] Height to the canvas which shows the model canvas的高度
 * @param {String}   [userConfig.display.position = 'right'] Left of right side to show 显示位置：左或右
 * @param {Number}   [userConfig.display.hOffset = 0] Horizontal offset of the canvas canvas水平偏移
 * @param {Number}   [userConfig.display.vOffset = -20] Vertical offset of the canvas canvas垂直偏移
 * @param {Boolean}  [userConfig.mobile.show = true] Whether to show on mobile device 是否在移动设备上显示
 * @param {Number}   [userConfig.mobile.scale = 0.5] Scale on mobile device 移动设备上的缩放
 * @param {String}   [userConfig.name.canvas = 'live2dcanvas'] ID name of the canvas canvas元素的ID
 * @param {String}   [userConfig.name.div = 'live2d-widget'] ID name of the div div元素的ID
 * @param {Number}   [userConfig.react.opacity = 0.7] opacity 透明度
 * @param {Boolean}  [userConfig.dev.border = false] Whether to show border around the canvas 在canvas周围显示边界
 * @param {Boolean}  [userConfig.dialog.enable = false] Display dialog 显示人物对话框
 * @param {Boolean}  [userConfig.dialog.hitokoto = false] Enable hitokoto 使用一言API
 * @return {null}
 */
});
