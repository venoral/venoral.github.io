webpackJsonp([4,21],{1:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<n.length;o++){var A=n[o];"number"==typeof A[0]&&i[A[0]]||(t&&!A[2]?A[2]=t:t&&(A[2]="("+A[2]+") and ("+t+")"),e.push(A))}},e}},2:function(e,n,t){function i(e,n){for(var t=0;t<e.length;t++){var i=e[t],o=f[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(a(i.parts[s],n))}else{for(var A=[],s=0;s<i.parts.length;s++)A.push(a(i.parts[s],n));f[i.id]={id:i.id,refs:1,parts:A}}}}function o(e){for(var n=[],t={},i=0;i<e.length;i++){var o=e[i],s=o[0],A=o[1],r=o[2],a=o[3],l={css:A,media:r,sourceMap:a};t[s]?t[s].parts.push(l):n.push(t[s]={id:s,parts:[l]})}return n}function s(e,n){var t=u(),i=g[g.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),g.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function A(e){e.parentNode.removeChild(e);var n=g.indexOf(e);n>=0&&g.splice(n,1)}function r(e){var n=document.createElement("style");return n.type="text/css",s(e,n),n}function a(e,n){var t,i,o;if(n.singleton){var s=x++;t=h||(h=r(n)),i=l.bind(null,t,s,!1),o=l.bind(null,t,s,!0)}else t=r(n),i=c.bind(null,t),o=function(){A(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}function l(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=B(n,o);else{var s=document.createTextNode(o),A=e.childNodes;A[n]&&e.removeChild(A[n]),A.length?e.insertBefore(s,A[n]):e.appendChild(s)}}function c(e,n){var t=n.css,i=n.media,o=n.sourceMap;if(i&&e.setAttribute("media",i),o&&(t+="\n/*# sourceURL="+o.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f={},p=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),u=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,x=0,g=[];e.exports=function(e,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=d()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=o(e);return i(t,n),function(e){for(var s=[],A=0;A<t.length;A++){var r=t[A],a=f[r.id];a.refs--,s.push(a)}if(e){var l=o(e);i(l,n)}for(var A=0;A<s.length;A++){var a=s[A];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete f[a.id]}}}};var B=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},3:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={code:1,data:[{provinceid:1,schoolid:9002,schoolname:"长安大学",status:10},{provinceid:1,schoolid:9003,schoolname:"西北工业大学",status:10},{provinceid:1,schoolid:9004,schoolname:"西北大学",status:10},{provinceid:1,schoolid:9006,schoolname:"西安电子科技大学",status:10},{provinceid:1,schoolid:9010,schoolname:"西安外国语大学",status:10},{provinceid:1,schoolid:9011,schoolname:"西安邮电大学",status:10},{provinceid:1,schoolid:9013,schoolname:"西安财经学院",status:10},{provinceid:1,schoolid:9014,schoolname:"西北政法大学",status:10},{provinceid:1,schoolid:9020,schoolname:"西安翻译学院",status:10},{provinceid:1,schoolid:9025,schoolname:"西安建筑科技大学",status:10},{provinceid:1,schoolid:9028,schoolname:"西北工业大学明德学院",status:10},{provinceid:1,schoolid:9034,schoolname:"陕西科技大学",status:10},{provinceid:1,schoolid:9046,schoolname:"陕西电子科技职业学院",status:10},{provinceid:1,schoolid:9076,schoolname:"西安思源学院",status:10},{provinceid:1,schoolid:9098,schoolname:"西北大学现代学院",status:10},{provinceid:1,schoolid:34007,schoolname:"陕西学前师范学院",status:10}]};n["default"]=t},4:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={data:function(){var e=this.data.length?this.focus||this.data[0]:{provinceid:1,schoolid:9011,schoolname:"西安邮电大学",status:10};return{status:!1,focusData:e}},props:["data","focus"],methods:{selectData:function(e){this.focusData.schoolid=e.schoolid,this.focusData.schoolname=e.schoolname,this.status=!1}}}},5:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".ui_select{position:relative;color:rgba(0,0,0,.54);font-size:16px}.ui_select .select_data{position:relative;padding:0 8px;border:1px solid #c8c8c8;line-height:30px;cursor:pointer}.ui_select .select_data:before{content:'';display:block;position:absolute;top:0;right:0;width:30px;height:30px;border-left:1px solid #c8c8c8}.ui_select .select_data:after{content:'';display:block;width:0;height:0;border-top:6px solid #c8c8c8;border-left:6px solid transparent;border-right:6px solid transparent;position:absolute;top:0;right:9px;bottom:0;margin:auto}.ui_select .list_inner{position:absolute;width:100%;height:70px;overflow-y:scroll;background-color:#fff;line-height:30px;border:1px solid #c8c8c8;border-top:0;box-sizing:border-box;z-index:2}.ui_select .list_inner li{padding:0 10px}.ui_select .list_inner li+li{border-top:1px solid #c8c8c8}","",{version:3,sources:["/./src/components/selectbox.vue"],names:[],mappings:"AAAA,WAAW,kBAAkB,sBAAuB,cAAc,CAAC,wBAAwB,kBAAkB,cAAc,yBAAyB,iBAAiB,cAAc,CAAC,+BAA+B,WAAW,cAAc,kBAAkB,MAAM,QAAQ,WAAW,YAAY,6BAA6B,CAAC,8BAA8B,WAAW,cAAc,QAAQ,SAAS,6BAA6B,kCAAkC,mCAAmC,kBAAkB,MAAM,UAAU,SAAS,WAAW,CAAC,uBAAuB,kBAAkB,WAAW,YAAY,kBAAkB,sBAAsB,iBAAiB,yBAAyB,aAAa,sBAAsB,SAAS,CAAC,0BAA0B,cAAc,CAAC,6BAA6B,4BAA4B,CAAC",file:"selectbox.vue",sourcesContent:[".ui_select{position:relative;color:rgba(0,0,0,0.54);font-size:16px}.ui_select .select_data{position:relative;padding:0 8px;border:1px solid #c8c8c8;line-height:30px;cursor:pointer}.ui_select .select_data:before{content:'';display:block;position:absolute;top:0;right:0;width:30px;height:30px;border-left:1px solid #c8c8c8}.ui_select .select_data:after{content:'';display:block;width:0;height:0;border-top:6px solid #c8c8c8;border-left:6px solid transparent;border-right:6px solid transparent;position:absolute;top:0;right:9px;bottom:0;margin:auto}.ui_select .list_inner{position:absolute;width:100%;height:70px;overflow-y:scroll;background-color:#fff;line-height:30px;border:1px solid #c8c8c8;border-top:0;box-sizing:border-box;z-index:2}.ui_select .list_inner li{padding:0 10px}.ui_select .list_inner li+li{border-top:1px solid #c8c8c8}"],sourceRoot:"webpack://"}])},6:function(e,n,t){var i=t(5);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},8:function(e,n){e.exports=' <div class=ui_select> <div class=select_data @click="status=!status" v-text=focusData.schoolname></div> <ul class=list_inner v-show=status> <li v-for="its in data" v-text=its.schoolname @click=selectData(its)></li> </ul> </div> '},9:function(e,n,t){var i,o;t(6),i=t(4),o=t(8),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},10:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(22),s=i(o),A=t(20),r=i(A),a=t(21),l=i(a),c=t(23),f=i(c),p=t(24),d=i(p);n["default"]={data:function(){return{icon:{cxy:s["default"],bp:r["default"],cs:l["default"],lib:f["default"],nav:d["default"]}}}}},11:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(9),s=i(o),A=t(25),r=i(A);n["default"]={data:function(){return{logo:r["default"],searchKey:"iphone",schoolList:[],isLogin:!1,userName:""}},components:{uiSelectBox:s["default"]},ready:function(){var e=localStorage.getItem("userLogin");e&&(this.isLogin=e,this.userName=JSON.parse(localStorage.getItem("userInfo")).username),this.getSchoolList()},methods:{getSchoolList:function(){var e=t(3);this.schoolList=e["default"].data},unLogin:function(){localStorage.removeItem("userLogin"),localStorage.removeItem("userInfo"),this.isLogin=!1,this.$router.beforeEach(function(e){e.next()})}}}},13:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".footer{color:#fff;background-color:#2c2c2c;text-align:center}.footer_box{width:1200px;margin:0 auto;padding:20px 0}.footer>h2{font-weight:400;line-height:2}.footer .friends a{display:inline-block;margin:20px}.footer .friends a img{height:25px}.footer .copyright{font-size:12px;line-height:2}","",{version:3,sources:["/./src/components/footer.vue"],names:[],mappings:"AAAA,QAAQ,WAAW,yBAAyB,iBAAiB,CAAC,YAAY,aAAa,cAAc,cAAc,CAAC,WAAW,gBAAmB,aAAa,CAAC,mBAAmB,qBAAqB,WAAW,CAAC,uBAAuB,WAAW,CAAC,mBAAmB,eAAe,aAAa,CAAC",file:"footer.vue",sourcesContent:[".footer{color:#fff;background-color:#2c2c2c;text-align:center}.footer_box{width:1200px;margin:0 auto;padding:20px 0}.footer>h2{font-weight:normal;line-height:2}.footer .friends a{display:inline-block;margin:20px}.footer .friends a img{height:25px}.footer .copyright{font-size:12px;line-height:2}"],sourceRoot:"webpack://"}])},14:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".header{background-color:#fff}.header .hd{width:1000px;margin:0 auto}.header .hd .ui_btn{cursor:pointer}.header .hd #logo{width:90px;height:42px;margin:30px 40px 30px 0}.header .hd #logo img{width:100%}.header .hd_inner{-webkit-justify-content:space-between;-webkit-align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;margin-right:30px}.header .hd_inner .school_box{width:140px}.header .hd_inner .search_box{position:relative;border:1px solid #c8c8c8;padding-right:30px}.header .hd_inner .search_box input{width:350px;height:30px;padding:0 10px;border:0;box-sizing:border-box}.header .hd_inner .search_box .btn_search{position:absolute;top:0;right:0;width:30px;height:30px;background:url("+t(19)+") no-repeat 50%;background-size:50%;cursor:pointer}.header .hd .auth_box{width:197px;-webkit-justify-content:space-between;-webkit-align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}","",{version:3,sources:["/./src/components/header.vue"],names:[],mappings:"AAAA,QAAQ,qBAAqB,CAAC,YAAY,aAAa,aAAa,CAAC,oBAAoB,cAAc,CAAC,kBAAkB,WAAW,YAAY,uBAAuB,CAAC,sBAAsB,UAAU,CAAC,kBAAkB,sCAAsC,2BAA2B,yBAAyB,sBAAsB,8BAA8B,yBAAyB,sBAAsB,0BAA0B,mBAAmB,iBAAiB,CAAC,8BAA8B,WAAW,CAAC,8BAA8B,kBAAkB,yBAAyB,kBAAkB,CAAC,oCAAoC,YAAY,YAAY,eAAe,SAAS,qBAAqB,CAAC,0CAA0C,kBAAkB,MAAM,QAAQ,WAAW,YAAY,uDAAqE,oBAAoB,cAAc,CAAC,sBAAsB,YAAY,sCAAsC,2BAA2B,yBAAyB,sBAAsB,8BAA8B,yBAAyB,sBAAsB,0BAA0B,kBAAkB,CAAC",file:"header.vue",sourcesContent:[".header{background-color:#fff}.header .hd{width:1000px;margin:0 auto}.header .hd .ui_btn{cursor:pointer}.header .hd #logo{width:90px;height:42px;margin:30px 40px 30px 0}.header .hd #logo img{width:100%}.header .hd_inner{-webkit-justify-content:space-between;-webkit-align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;margin-right:30px}.header .hd_inner .school_box{width:140px}.header .hd_inner .search_box{position:relative;border:1px solid #c8c8c8;padding-right:30px}.header .hd_inner .search_box input{width:350px;height:30px;padding:0 10px;border:0;box-sizing:border-box}.header .hd_inner .search_box .btn_search{position:absolute;top:0;right:0;width:30px;height:30px;background:url(../assets/img/btn-search.png) no-repeat center center;background-size:50%;cursor:pointer}.header .hd .auth_box{width:197px;-webkit-justify-content:space-between;-webkit-align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}"],sourceRoot:"webpack://"}])},16:function(e,n,t){var i=t(13);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},17:function(e,n,t){var i=t(14);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},19:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQwNTM4NTFFMUFBRTExRTY4RTY1QThFNEQ0NUZBQkFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQwNTM4NTFGMUFBRTExRTY4RTY1QThFNEQ0NUZBQkFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDAyMzg3RjUxQUFFMTFFNjhFNjVBOEU0RDQ1RkFCQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDAyMzg3RjYxQUFFMTFFNjhFNjVBOEU0RDQ1RkFCQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Bb54PAAABOklEQVR42pzSTytEURjH8TtcEfMWSCxsRNTETpTyL5tJNqyUNAvNzBuYrbJQSs3NkkLJws47IGKKRFnZeAVKRvge/WY693Rvc81Tn+6pe+6vc5/npIIg8KzqwyZm0I8v3OMEZbx7EdVirddwiw5soAcD2MI0npCJCvH1XEcJk7hz9rziDKu4wIROFwrpxnZMgF0H6MIhRvBt/04BR/qVRmUa2IpZtyfzalyS+sEx5twQM5FHL3k9o9cNqTpTalTtdj9qIQ8Y+0dIRqcJhZxqxEmqE0vqSyhkD0NYSRCyg0vcuCHmKmexi1xMf9LY14nfkIq6sVeY0oXKaeQvaMMolrWnrPefKGrk9RBTFQxjQZdpXFMw41/EtfZ9IK/1X5DvHNt8dC5xVdCzHuR7zZUdVG02pBZkejP4K8AAjPxBDk8Wv1wAAAAASUVORK5CYII="},20:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAMAAAAtFKi+AAAAqFBMVEUAAAD5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fmVYfXcAAAAN3RSTlMA8trpvWrhcVoaoV5M+/flz8K2nT8tJA7vxrqMR0QWEgavqpOHeVUoIArTzHY7NzJ/MBSlUpljNW/f6QAAAk1JREFUSMfN1dm2ojAQBdADiKKAs6AC4jxPdzz//2e9oJPcIMrtx95P6KqiIFUJKJnF94+e2QWc/irGb94bvTYzdWBArlBttjIo1IAFuS3cbI4HDYNKCzDJKw7BxXPsTdSaWoMDCpp9atZIfTLFB6V6EwWXMXUN3EgTqFH4QtGWRTa+yQWgyjoocFhkDbEmB1oCPWhiaibnJJgD6Wg7AqZ8lhFo4dMEuhqVLhSTkuECLxJqTUhr/c9ywomZldYASkuUdNlAP19mhJF4qCWFBcrym5i8ItxYWZpeoIOy5jmfsTdsxnnIHEBEYYQyMW+hnwWMozzEEvEfeC00yPo5RWZHYY8KrmkDwK0xQ0O15Te7zYT8REsknFFpZveY2aAnEhJUckXYQI3FDpX2ctQg9o3/jkoHEXeEIabugGp12V1LJIT/lmDJd/D3qDQfiwpq4JujESrIiTuqPsxsRkFh5Xe363UkN8hQrpLqtJPt0/59ew32o8S9L49tZvxOf50AuKs+vImrE9p85XRR7dpArivnDl9qpRSGPxtuCYtFXa8uroIveV5pr8Pd+0P8AuHfxWwEqpTWEhqF869tY7Ea5kX7KoRvAGCrIw/fWgLkiveyXsnLnPYVialMxG1bhwVVgceT2wzTCQt8Z3+iNHhygNrp54mKtR667Z9fkEKtZ6Z7+VxPO75f761sz9UL7qBcqGkP7Dj2kuHQjTrUeJUflOPxsY1OaZNX8/AgNljBvKFk3+NLgzmesTt8apLghcPZZMl0iypeyzQ03eiG/94fr+XoPrrLkDcAAAAASUVORK5CYII="},21:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAyCAMAAAAHpFkRAAAApVBMVEUAAAD5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flHA9gBAAAANnRSTlMA+xT38ujglA/KsKhNNwsF49zZvqKZinFqXjEsIe3Ww7SdPigcA9CPhoF4VFFFGKtIJLh8Y0NxTjOhAAABeUlEQVQ4y52U127DMAxF6b3iPeKV4ZG9O/T/n1agDmrGFgOj583wASVRvAISp7mniRVufU9ZfBBKfTR9if2x4zjXU+WzVy4DZdN8WQoboujd3yL7tu16No8NiXEwocNkb0k7S1y8tYSi087sLUu302KqjCTLiqceOstdjg05TLKLXTxaUdc3nZaPO/D5gBGltlJk2TNiTXg2oAQ+Ytk6IIadpW2ARs+8p0UZMy3R1k+J3ahajsp6Ah0IMtyqC1CESLNIq0FTIRWkdkTFIiBZoZ3lpFWiNdeAoM85o7Wot1SHtNyg1zQgaYRJa57QKF5p7dBrBtBYxEXRzd0DDYrLHGh8HG4adVq1YNreDDxFNOtpfdujW2gH4cXhY8QZnN0ZfeG3TSn7wTlvJREQFQ7p7Delun00hqOcCwyhhqa5UgVOG2Os0fERfa4WuPCKLfO0GIbcFxztBCPs5XhrLYy5RgNL2gGXulL7SttDARRinSaVdYuSNHfhf/wAtheY6iJFLEoAAAAASUVORK5CYII="},22:function(e,n){e.exports="data:image/png;base64,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"},23:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAxCAMAAAB50NBIAAAAjVBMVEUAAAD5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fluF4bHAAAALnRSTlMAUO+/ezTlnPyQ9FwX27QTi1ZBIQv40si7nYF1Xkg7KxzozqyllU3fhW1pMyYHix9zrgAAAOZJREFUSMft1Llyg0AURNHLYhuYAYRAIEAsWrzb/P/nGWInPbF04i7qVVcz3A3vmp6fBckrVKG/aNIRviIxfDAwN4uosfB2UNPr1ZhFtdsKidR0DJS1mg5yoFfTiQdUsXrL5Rv4PWVnX5HEbPLpSTH+4GwKs0Bx6QCTqqUY8NQJRj3kx0VUlzAkarp1XlXhtKopVdNZBezUtL8H5qv88RmwXR3Jl6/KwVMUI87Kvm1fBLfPrXG5ww95VatbhW30vl3ek6OFk9Oq9HSMy6sZWJd/JxmA/bu8KrvFg8jhcnITSrqCh3/+AKGU3eZIdkrcAAAAAElFTkSuQmCC"},24:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAMAAAAtFKi+AAAApVBMVEUAAAD5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flHA9gBAAAANnRSTlMApeKo+sur9sjEFLoN79yt57W869DBIh4GsVk7hn1GMgqfA9Nw2M2PbE3zlXVRJhGaaEEaYSzuI0zcAAACqElEQVRIx5WU6ZaqMBCEO0R2FNkEQVAQxWXGffr9H+0mgHJ1cITvjx5Pl9VJugvaCaIr9OIg5/0EX6gc+9RPhoi3PoIUEYUeFnMZGXF3gY2cnda1PpexhC669ZMOsMb6/lyuzQRs2JH53+WLUMBnhjP/j/pIr6rk4VgQHLlqbXw23tV/1xWKJVFKJcsbVac3g/Z6Qyh7UCmhuiIqtkSIXnX45uwxMgSTmOLaSvfpVBSnhC6RsWy18Me8nlLP3W+vxsK4JoWomsTlinObgCCiI1HFaxpIdGYy4sdqOXfEDAY6Ue05+NF8AcE8msDEUiRzyBSz3ysmIeKIWOIcbiIO06RwcJnDQbWJwi0mr4LtrjRYbiCRy8tCzg1ubmWxfy7PNgI/AdV1bTHFBk8LpjZZ8bc8/edhhO4Ay47cGWgrlNXCQ1x9Syj8QOwSdfA0JMetihUicUNgDsqBLfVJCx3mANs1tevxHefcJfTwjiopCcBFGKv8zzasIgSIVNOSsWYVHyAXXgRHEREl0Njvo8mLAMUIwM+dR0vrkDXDGpBDmLGPQZH93xLaWy0rQ6XY4ePQxzXff42vHbdoDj0QQ6NZS8oljsSu1eCCpVD3PMnqa8VVnr0ufv1wMTacIOQPV3k9E1j30TD4Nznls6tODl41GvLveb049fD9GBuyT7KooF+az4ZPGnJpS+JI9/FOIKgSge24aJbjvbu0JbxTL9B6n2iGYWiXQvSkaoEItDF7rKhopad0qjxWdOh/CAHJVlkImITWIfD1MWZMHjPTe8zoxtsgm7YEmXA+wluCrTLAJ5z4Q+hnmyU2CHu/Q37Ho7pcPs2hEz/16M2gK5vyIONFZ0E2qm6/O2f+gloPgcEs4gx6EOLIhz5cXaWfwDf1ay/B4pIE0IvgXf0/cM+E8ITmrK0AAAAASUVORK5CYII="},25:function(e,n){e.exports="data:image/png;base64,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"},26:function(e,n){e.exports=' <footer class=footer> <section class=footer_box> <h2>我们的朋友</h2> <div class=friends> <a href="" v-for="its in icon"> <img :src=its alt=""> </a> </div> <p class=copyright>Copyright 2015 冀1301ICP备01010号-1</p> </section> </footer> '},27:function(e,n){e.exports=' <header class=header> <div class="hd flex-wrap"> <div id=logo> <a href=""> <img :src=logo alt=""> </a> </div> <div class="hd_inner flex-wrap flex-con"> <a class=ui_btn v-link="{ name: \'publish\'}">我要发布</a> <div class=school_box> <ui-select-box :data=schoolList></ui-select-box> </div> <div class=search_box> <input type=text v-model=searchKey> <a class=btn_search v-link="{ path: \'/search/\' + searchKey }"></a> </div> </div> <div class="auth_box flex-wrap" v-if=!isLogin> <a class=ui_btn v-link="{ name: \'login\' }">登录</a> <a class="ui_btn ui_btn_default" v-link="{ name: \'register\' }">注册</a> </div> <div class="auth_box flex-wrap" v-if=isLogin> <a class=ui_btn v-link="{ name: \'user\' }">{{userName}}</a> <a class=ui_btn v-link="{ name: \'home\' }" @click=unLogin>退出登录</a> </div> </div> </header> '},29:function(e,n,t){var i,o;t(16),i=t(10),o=t(26),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},30:function(e,n,t){var i,o;t(17),i=t(11),o=t(27),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},112:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(30),s=i(o),A=t(29),r=i(A);n["default"]={data:function(){return{nav:["信息发布规则","等级特权","产品服务与声明"],navIndex:0}},components:{uiHeader:s["default"],uiFooter:r["default"]}}},174:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".agreement_box{padding-bottom:50px}.agreement_box .page_title{text-align:center;font-size:20px;color:#666}.agreement_box .nav_box{width:480px;margin:40px auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.agreement_box .nav_box a{display:block;font-size:18px;color:#333;cursor:pointer;padding:10px 0}.agreement_box .nav_box a.active{color:#ffc124;border-bottom:4px solid #ffc124}.agreement_box .content_inner{width:600px;margin:0 auto;padding:30px 100px;border:1px solid #c8c8c8;background-color:#fff;color:#999;line-height:2}","",{version:3,sources:["/./src/views/agreement/app.vue"],names:[],mappings:"AAAA,eAAe,mBAAmB,CAAC,2BAA2B,kBAAkB,eAAe,UAAU,CAAC,wBAAwB,YAAY,iBAAiB,yBAAyB,sBAAsB,6BAA6B,CAAC,0BAA0B,cAAc,eAAe,WAAW,eAAe,cAAc,CAAC,iCAAiC,cAAc,+BAA+B,CAAC,8BAA8B,YAAY,cAAc,mBAAmB,yBAAyB,sBAAsB,WAAW,aAAa,CAAC",file:"app.vue",sourcesContent:[".agreement_box{padding-bottom:50px}.agreement_box .page_title{text-align:center;font-size:20px;color:#666}.agreement_box .nav_box{width:480px;margin:40px auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.agreement_box .nav_box a{display:block;font-size:18px;color:#333;cursor:pointer;padding:10px 0}.agreement_box .nav_box a.active{color:#ffc124;border-bottom:4px solid #ffc124}.agreement_box .content_inner{width:600px;margin:0 auto;padding:30px 100px;border:1px solid #c8c8c8;background-color:#fff;color:#999;line-height:2}"],sourceRoot:"webpack://"}])},200:function(e,n,t){var i=t(174);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},227:function(e,n){e.exports=' <ui-header></ui-header> <div class="bd_main agreement_box"> <h2 class=page_title>协议与声明</h2> <nav class="nav_box flex-wrap"> <a v-for="its in nav" v-text=its :class="{\'active\': $index===navIndex}" @click.prevent="navIndex=$index"></a> </nav> <div class=content_inner> <div class=item v-show="navIndex===0"> <p>阁下在发布信息时不得利用本服务从事违法违规行为，包括但不限于：</p> <ol> <li>发布、传播、储存危害国家安全统一、破坏社会稳定、违反公序良俗、侮辱、诽谤、淫秽、暴力以及任何违反国家法律法规的内容；</li> <li>发布、传播、储存侵害他人知识产权、商业秘密等合法权利的内容；</li> <li>恶意虚构事实、隐瞒真相以误导、欺骗他人；</li> <li>发布、传播广告信息及垃圾信息；</li> <li>发送、传播的相关内容不为阁下所有或阁下并未获得权利人的授权；</li> <li>其他法律法规禁止的行为。</li> </ol> <p>阁下理解并同意以下附则</p> <ol> <li>我们可为遵循本规则或提供本服务的目的而使用阁下发送或传播的内容；</li> <li>如果我们收到权利人通知，主张阁下发送或传播的内容侵犯其相关权利的，我们有权独立判断并采取适当技术手段（包括但不 限于删除、屏蔽或断开链接等措施）；</li> <li>如果阁下违反了本规则，我们有权独立判断并采取适当技术手段。造成损害的，阁下应予以赔偿，我们对其概不负责，亦不承 担任何法律责任。</li> </ol> </div> <div class=item v-show="navIndex===1"> 等级 头衔 所需经验 特权 1 1 允许评论、修改信息；每周可发布1条信息 2 5 每周可发布2条信息 3 15 信息热度默认加10 4 30 每周可发布4条信息 5 50 信息热度默认加20；允许@其他用户 6 100 每天可发布1条信息 7 200 信息热度默认加50 8 500 信息热度默认加70；意见优先处理 9 1000 信息热度默认加100 10 2000 信息热度默认加120；获得勋章《二货大神》 </div> <div class=item v-show="navIndex===2"> <p>〇、导言</p> <p>在使用本产品前请阁下务必仔细阅读并理解本声明，阁下在开始接受本产品所提供之任何服务时，将被视为对此声明的完全认可。</p> <p>一、 账号与安全</p> <ol> <li>在使用我们所提供的服务时，可能会要求阁下为自己注册一个账号，以便阁下继续使用我们所提供的其他部分功能。</li> <li>在阁下注册账号的过程中，需要填写一些必要的信息，请保持这些信息的及时更新，以便我们向阁下更好地提供帮助或服务。若阁下填写的信息不完整或不准确，则可能无法使用服务或在使用过程中受到限制。</li> <li>阁下应妥善保管自己的账号与密码。使用完毕后，应安全退出，并采取特定措施保护阁下的号码安全。</li> <li>因我们单方面原因导致阁下的账号失窃的，我们将依法承担相应责任。如因阁下保管不善或其他与我们无关的原因导致的，责 任由阁下自行承担。</li> <li>作为账号的初始申请注册人和使用人，阁下应对该账号下的所有活动负责。</li> </ol> <p>二、 个人信息保护</p> <ol> <li>我们提供服务时，可能会收集、储存和使用：阁下在注册账户或使用我们的服务时，向我们提供的相关个人信息；阁下通过我 们的服务向其他方提供的共享信息等其他与阁下相关的个人信息。</li> <li>在阁下使用我们的服务时，我们可能使用阁下的信息向您的设备发送电子邮件、新闻或推送通知。如阁下不希望收到这些信息， 可以按照我们的相关提示，在设备上选择取消订阅。</li> <li>我们将尽一切可能采取适当的技术手段，保证阁下可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人 信息。在阁下操作前述信息时，我们可能会采取适当的手段以保障账户安全。</li> <li>我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。但请阁下理解，接入我们的服务所用的系 统和通讯网络，有可能因我们可控范围外的因素而出现问题。</li> </ol> <p>三、 不可抗力</p> <ol> <li>阁下理解并同意，在使用本服务的过程中，可能会遇到不可抗力等风险因素，使本服务发生中断。</li> <li>在法律允许的范围内，我们对以下情形导致的服务中断或受阻不承担责任：</li> <li> <ul> <li>1) 受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；</li> <li>2) 电脑软件、系统、硬件和通信线路出现故障；</li> <li>3) 阁下的操作不当；</li> <li>4) 阁下通过非我们授权的方式使用本服务；</li> <li>5) 其他我们无法控制或合理预见的情形。</li> </ul> </li> <li>阁下理解并同意，在使用本服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，我们不对这些因侵权行为给阁下 造成的损害负责。这些风险包括但不限于：</li> <li> <ul> <li>1) 来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息；</li> <li>2) 因使用本协议项下的服务，遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理上的伤害以及经济上的损失；</li> <li>3) 其他因网络信息或用户行为引起的风险。</li> </ul> </li> </ol> <p>四、 知识产权</p> <ol> <li>我们在本服务中提供的内容的知识产权归本团队所有，用户在使用本服务中所产生的内容的知识产权归用户或相关权利人所有。</li> <li>除另有特别声明外，我们提供本服务时所依托软件的著作权、专利权及其他知识产权均归本团队所有。</li> <li>上述及其他任何本服务包含的内容的知识产权均受到法律保护，未经本团队、用户或相关权利人书面许可，任何人不得以任何 形式进行使用或创造相关衍生作品。</li> <li>其他相关细则请参见《信息发布规则》。</li> </ol> <p>五、 变更与中（终）止</p> <ol> <li>我们可能会对服务内容进行变更，也可能会中断、中止或终止服务。</li> <li>如发生下列任何一种情形，我们有权不经通知而中断或终止向阁下提供的服务：</li> <li> <ul> <li>1) 根据规定阁下应提交真实信息，而阁下提供的个人资料不真实、或与注册时信息不一致又未能提供合理证明；</li> <li>2) 阁下违反相关法规或本协议的约定；</li> <li>3) 出于安全的原因或其他必要的情形。</li> </ul> </li> <li>阁下有责任自行备份存储在本服务中的数据。如果阁下的服务被终止，我们可以从服务器上永久地删除数据。服务终止后，我 们没有义务向阁下返还数据。</li> </ol> </div> </div> </div> <ui-footer></ui-footer> '},255:function(e,n,t){var i,o;t(200),i=t(112),o=t(227),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}});
//# sourceMappingURL=4.2e7295099b5fea42244c.js.map