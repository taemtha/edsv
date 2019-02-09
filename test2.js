'use strict'

var HID = require('node-hid')
var devices = HID.devices()

// var device = new HID.HID(9025, 32822)
// device.on('data', function (data) {
//   console.log(data)
// })
console.log(devices)
