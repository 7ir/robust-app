/*
    patternLock.js v 1.0.1
    Author: Sudhanshu Yadav
    Copyright (c) 2015,2016 Sudhanshu Yadav - ignitersworld.com , released under the MIT license.
    Demo on: ignitersworld.com/lab/patternLock.html
*/
!function(t) {
    var e=Function("return this")()||(42,eval)("this");"function"==typeof define&&define.amd?define(["jquery"],
    function(n){return e.PatternLock=t(n,e)}
    ):
    "object"==typeof module&&module.exports?
    module.exports=e.document?t(require("jquery"),e):function(e){
        if(!e.document)throw new Error("patternLock requires a window with a document");
        return t(require("jquery")(e),e)}:e.PatternLock=t(e.jQuery,e)}(function(t,e,n){"use strict";function i(t){for(var e=t.holder,n=t.option,i=n.matrix,r=n.margin,a=n.radius,
            o=['<ul class="patt-wrap" style="padding:'+r+'px">'],
            s=0,l=i[0]*i[1];l>s;s++)
            o.push('<li class="patt-circ" style="margin:'+r+"px; width : "+2*a+"px; height : "+2*a+
            "px; -webkit-border-radius: "+a+"px; -moz-border-radius: "+a+"px; border-radius: "+a+'px; "><div class="patt-dots"></div></li>');
            o.push("</ul>"),e.html(o.join("")).css({width:i[1]*(2*a+2*r)+2*r+"px",height:i[0]*(2*a+2*r)+2*r+"px"}),
            t.pattCircle=t.holder.find(".patt-circ")}function r(t,e,n,i){var r=e-t,a=i-n;return{length:Math.ceil(Math.sqrt(r*r+a*a)),
            angle:Math.round(180*Math.atan2(a,r)/Math.PI)}}function a(){}function o(e,n){var r=this,s=r.token=Math.random(),
                u=d[s]=new a,c=u.holder=t(e);if(0!==c.length){u.object=r,n=n||{};var h={onDraw:l},f=n.matrix;f&&f[0]*f[1]>9&&(h.delimiter=","),
                n=u.option=t.extend({},o.defaults,h,n),i(u),c.addClass("patt-holder"),"static"==c.css("position")&&c.css("position","relative"),
                c.on("touchstart mousedown",function(t){p.call(this,t,r)});
                var m=n.mapper;"object"==typeof m?u.mapperFunc=function(t){return m[t]}:"function"==typeof m?u.mapperFunc=m:u.mapperFunc=l,
                u.option.mapper=null}}var s=e.document,l=function(){},d={},p=function(e,n){e.preventDefault();var i=d[n.token];
                if(!i.disabled){
                    i.option.patternVisible||i.holder.addClass("patt-hidden");
                    var r="touchstart"==e.type?"touchmove":"mousemove",a="touchstart"==e.type?"touchend":"mouseup";
                    t(this).on(r+".pattern-move",function(t){u.call(this,t,n)}),t(s).one(a,function(){c.call(this,e,n)});
                    var o=i.holder.find(".patt-wrap"),l=o[0].getBoundingClientRect();i.wrapTop=l.top,i.wrapLeft=l.left,n.reset()}},
                    u=function(e,n){e.preventDefault();var i=e.clientX || e.originalEvent.touches[0].clientX,a=e.clientY || e.originalEvent.touches[0].clientY,o=d[n.token],
                        s=o.option,l=o.pattCircle,p=o.patternAry,u=o.getIdxFromPoint(i,a),c=u.idx,h=o.mapperFunc(c)||c;if(p.length>0){var f=r(o.lineX1,u.x,o.lineY1,u.y);o.line.css({width:f.length+10+"px",transform:"rotate("+f.angle+"deg)"})}if(c&&(s.allowRepeat&&p[p.length-1]!==h||-1===p.indexOf(h))){var m=t(l[c-1]);if(o.lastPosObj)for(var v=o.lastPosObj,g=v.i,x=v.j,j=u.i-v.i>0?1:-1,w=u.j-v.j>0?1:-1,b=Math.abs(u.i-g),y=Math.abs(u.j-x);0===b&&y>1||0===y&&b>1||y==b&&y>1;){g=b?g+j:g,x=y?x+w:x,b=Math.abs(u.i-g),y=Math.abs(u.j-x);var P=(x-1)*s.matrix[1]+g,k=o.mapperFunc(P)||P;(s.allowRepeat||-1==p.indexOf(k))&&(o.addDirectionClass({i:g,j:x}),o.markPoint(t(l[k-1]),k),o.addLine({i:g,j:x}))}o.lastPosObj&&o.addDirectionClass(u),o.markPoint(m,h),o.addLine(u),o.lastPosObj=u}},c=function(t,e){t.preventDefault();var n=d[e.token],i=n.option,r=n.patternAry.join(i.delimiter);n.holder.off(".pattern-move").removeClass("patt-hidden"),r&&(i.onDraw(r),n.line.remove(),n.rightPattern&&(r==n.rightPattern?n.onSuccess():(n.onError(),e.error())))};return a.prototype={constructor:a,getIdxFromPoint:function(t,e){var n=this.option,i=n.matrix,r=t-this.wrapLeft,a=e-this.wrapTop,o=null,s=n.margin,l=2*n.radius+2*s,d=Math.ceil(r/l),p=Math.ceil(a/l),u=r%l,c=a%l;return d<=i[1]&&p<=i[0]&&u>2*s&&c>2*s&&(o=(p-1)*i[1]+d),{idx:o,i:d,j:p,x:r,y:a}},markPoint:function(t,e){t.addClass("hovered"),this.patternAry.push(e),this.lastElm=t},addLine:function(e){var n=this,i=n.patternAry,a=n.option,o=a.lineOnMove,s=a.margin,l=a.radius,d=(e.i-1)*(2*s+2*l)+2*s+l,p=(e.j-1)*(2*s+2*l)+2*s+l;if(i.length>1){var u=r(n.lineX1,d,n.lineY1,p);n.line.css({width:u.length+10+"px",transform:"rotate("+u.angle+"deg)"}),o||n.line.show()}var c=t('<div class="patt-lines" style="top:'+(p-5)+"px; left:"+(d-5)+'px"></div>');n.line=c,n.lineX1=d,n.lineY1=p,n.holder.append(c),o||n.line.hide()},addDirectionClass:function(t){var e=this.lastElm,n=this.line,i=this.lastPosObj,r=[];t.j-i.j>0?r.push("s"):t.j-i.j<0?r.push("n"):0,t.i-i.i>0?r.push("e"):t.i-i.i<0?r.push("w"):0,r=r.join("-"),r&&e.add(n).addClass(r+" dir")}},o.prototype={constructor:o,option:function(t,e){var r=d[this.token],a=r.option;return e===n?a[t]:(a[t]=e,void(("margin"==t||"matrix"==t||"radius"==t)&&i(r)))},getPattern:function(){var t=d[this.token];return(t.patternAry||[]).join(t.option.delimiter)},setPattern:function(t){var e=d[this.token],n=e.option,i=n.matrix,r=n.margin,a=n.radius;if(n.enableSetPattern){"string"==typeof t&&(t=t.split(n.delimiter)),this.reset(),e.wrapLeft=0,e.wrapTop=0;for(var o=0;o<t.length;o++){var s=t[o]-1,p=s%i[1],c=Math.floor(s/i[1]),h=p*(2*r+2*a)+2*r+a,f=c*(2*r+2*a)+2*r+a;u.call(null,{clientX:h,clientY:f,preventDefault:l},this)}}},enable:function(){var t=d[this.token];t.disabled=!1},disable:function(){var t=d[this.token];t.disabled=!0},reset:function(){var t=d[this.token];t.pattCircle.removeClass("hovered dir s n w e s-w s-e n-w n-e"),t.holder.find(".patt-lines").remove(),t.patternAry=[],t.lastPosObj=null,t.holder.removeClass("patt-error")},error:function(){d[this.token].holder.addClass("patt-error")},checkForPattern:function(t,e,n){var i=d[this.token];i.rightPattern=t,i.onSuccess=e||l,i.onError=n||l}},o.defaults={matrix:[3,3],margin:20,radius:25,patternVisible:!0,lineOnMove:!0,delimiter:"",enableSetPattern:!1,allowRepeat:!1},o});
