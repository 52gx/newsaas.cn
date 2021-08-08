/*
 * @Author: your name
 * @Date: 2020-10-02 14:47:58
 * @LastEditTime: 2021-02-09 20:29:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /m-guanwang/serviceWorker.js
 */
var static = 'newsaaas.cn'
var cacheassets = [
  'mobile/experience.html',
  'mobile/funt-matrx.html',
  'mobile/index.html',
  'mobile/industry.html',
  'mobile/manifest.json',
  'mobile/common/footer.html',
  'mobile/common/footer-2.html',
  'mobile/common/footer-3.html',
  'mobile/common/footer-4.html',
  'mobile/common/header.html',
  'mobile/common/left.html',
  'mobile/common/matrx.html',
  'mobile/details/applet.html',
  'mobile/details/appointment.html',
  'mobile/details/collection.html',
  'mobile/details/community-group.html',
  'mobile/details/diy.html',
  'mobile/details/h5.html',
  'mobile/details/live.html',
  'mobile/details/luck-draw.html',
  'mobile/details/member.html',
  'mobile/details/more-mall.html',
  'mobile/details/oem.html',
  'mobile/details/phone-mall.html',
  'mobile/details/price.html',
  'mobile/details/red-envelopes.html',
  'mobile/details/seconds.html',
  'mobile/details/try.html',
  'mobile/details/wechat.html',
  'mobile/details/wechat-public.html',
  'mobile/details/write-off.html',
  'mobile/css/style-amber.css',
  'mobile/css/style-blue.css',
  'mobile/css/style-dark-blue.css',
  'mobile/css/style-dark-brown.css',
  'mobile/css/style-dark-gray.css',
  'mobile/css/style-dark-green.css',
  'mobile/css/style-dark-pink.css',
  'mobile/css/style-dark-purple.css',
  'mobile/css/style-gray.css',
  'mobile/css/style-maroon.css',
  'mobile/css/style-purple.css',
  'mobile/css/style-red.css',
  'mobile/css/style-skyblue.css',
  'mobile/css/style-teal.css',

]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(static)
      .then(function (cache) {
        cache.addAll(cacheassets)
      })
      .then(function () {
        return self.skipWaiting()
      })
  )
})
self.addEventListener('activate', function (event) {})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
