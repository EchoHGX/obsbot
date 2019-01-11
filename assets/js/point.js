;(function(window,$){

  var now_setp = 0,all_setp = 0,sH = parseFloat($(window).height()/3);
  function Point(options){
    this.options = {
      el: '.cont-item',
      pointEl: '.point-item',
      poineLine: '.point-line',
      pointNumEl: '.point-num',
      allNumEl: 'point-all',
      nextEl: '.next',
      prevEl: '.prev',
      allNum: 0
    }
    $.extend(this.options,options);
    this.init();
  }
  Point.prototype = {
    init: function(){
      //pc端才需要
      if($(window).width() < 768){
        return false;
      }

      var self = this,
          el = self.options.el,
          oWin = $(window);
      all_setp = $(el).length;
      $(self.options.allNum).html(self.fix($(el).length));
      $(el).each(function(){
        self.anim($(this),oWin);
      });

      // 注册滚动事件
      $(window).scroll(function(){
        var offTop = $(".pages").offset().top - $(window).scrollTop();
        if (offTop < 0) {
          $(".pages .setps").css({"position":"fixed"});
        }else{
          $(".pages .setps").css("position","absolute");
        }
        $(el).each(function(){
          self.anim($(this),oWin);
        });
      });
      

      //注册点击事件
      $(self.options.prevEl).click(function(){
        self.slidePrev();
      });
      $(self.options.nextEl).click(function(){
        self.slidNext();
      })

      $(self.options.pointEl).click(function(){
        self.slide($(this))
      });
      console.log(sH)
    },
    
    anim: function(cont,oWin){
      var self = this;
      // if ((oWin.scrollTop() > (cont.offset().top + cont.outerHeight())) || ((oWin.scrollTop() + oWin.height()) < cont.offset().top)) {
      //  return false;
      // }else{
      //   now_setp = cont.index();
      //   self.sild(now_setp);
      // }
      if( (cont.offset().top < oWin.scrollTop() + oWin.height() - sH) && (oWin.scrollTop() < cont.offset().top + cont.height() + sH)){
        now_setp = cont.index();
        self.sild(now_setp);
      }
    },

    sild: function(now_setp){
      var self = this;
      $(self.options.pointEl).eq(now_setp - 1).addClass("active").siblings(".active").removeClass("active");
      $(self.options.poineLine).css("height",now_setp/all_setp * 100 + "%");
      $(self.options.pointNum).html(self.fix(now_setp));
    },

    fix: function(num){
      return num.toString().length > 2 ? num : "0" + num;
    },

    slidNext: function(){
      var self = this;
      now_setp ++;
      if (now_setp > all_setp) {
        now_setp = all_setp;
        return false;
      }
      self.scrollTo($(self.options.el).eq(now_setp - 1));
      self.sild(now_setp);
    }, 

    slidePrev: function(){
      var self = this;
      now_setp --;
      if (now_setp < 1) {
        now_setp = 1;
        return false;
      }
      self.scrollTo($(self.options.el).eq(now_setp - 1));
      self.sild(now_setp);
    },

    slide: function(_t){
      var self = this;
      now_setp = _t.index() + 1;
      self.scrollTo($(self.options.el).eq(now_setp - 1));
      self.sild(now_setp);
    },

    scrollTo: function(ele){
      if(!ele){
        $("html,body").animate({scrollTop:0},300);
      }else{
        if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top - sH},300);
      }
      return false;
    }
  }

  if (typeof module !== 'undefined' && typeof exports === 'object' && define.cmd) {
    module.exports = Point;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
        return pullLoad;
    });
  } else {
    window.Point = Point;
  }
}(window,$));