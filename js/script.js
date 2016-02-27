$(document).ready(function(){
	// автопрокрутка для CSS слайдера
	var 
    obj = $(".slider_wrapper_css input[type='radio']"),
    control = $(".controls label"),
		firstLabel = $(".controls label").first(),
		lasttLabel = $(".controls label").last(),
		SecondLabel = firstLabel.next();
	
  setInterval(function(){
		if (obj.first().prop("checked")){
      SecondLabel.click();
    }
		else if (obj.first().next().prop("checked")){
      SecondLabel.next().click();
    }	
		else if(obj.last().prev().prop("checked")){
      lasttLabel.click();
    }
		else if (obj.last().prop("checked")){
      firstLabel.click();
    }	
	},4000);
  
  // ---------------открытие меню
  var isOpen = false;
  $(".menu-btn").click(function(){
    $(".cover").fadeToggle(500);
    if(Modernizr.cssanimations){        
      $(".side-menu").toggleClass("menu-open");
      $(this).toggleClass("btn-open");
    }
    // анимация для IE9
    else {
      if(!isOpen){
        isOpen = true;
        $(".side-menu").animate({"right":"0px"},800);
        $(this).animate({"left":"20px"},300);   
      }           
      else{   
        isOpen = false;
        $(this).animate({"left":"-60px"},300);
        $(".side-menu").animate({"right":"-260px"},800);  
      }            
    }    
  });

  //----------- аккордион
  $(".acc-head").click(function(e){
    e.preventDefault();
    var $this = $(this);

    if(!$this.hasClass('acc-active')){
      $('.acc-head').removeClass("acc-active").next(".acc-drop").stop(true,false).slideUp(300);
      $this.addClass('acc-active').next(".acc-drop").stop(true,false).slideDown(300);
    }else{
      $this.removeClass('acc-active').next(".acc-drop").stop(true,false).slideUp(300);
    }
  });
  
  // range слайдер
  (function(){

    var thumb = $(".thumb"), track = $(".track"); 
    thumb.on("mousedown", function(e){
      var
        thumbCor = $(this).offset().left, // X координата левой границы дива бегунка 
        trackCor = track.offset().left, // X координата левой границы дива полоски       
        curShift = e.pageX - thumbCor; // X координата курсора относительно бегунка 
      $(this).addClass("drag");           

      $(document).mousemove(function(e){              
        var pos = e.pageX- trackCor - curShift ;
        var posEnd = track.width() - thumb.outerWidth();
        
        if(pos < 0){ pos = 0;}
        else if(pos > posEnd){pos = posEnd ;} 
        $(".drag").css({"left": pos +'px'});
      }).on("mouseup", function(){ $(".thumb").removeClass("drag"); });
      return false; //отмена выделения текста 
    });

    // thumb.on("dragstart",function(){return false;}); // отмена переноса картинок 
      
      //координаты без jquery
    // function findCoords(el){
    //   var elem = el.getBoundingClientRect(); //left,right,bottom,top
    //   return { 
    //     left : elem.left, // + pageXOffset // если есть прокрутка
    //     right : elem.right
    //   };
    // }; 
  })();
  
  (function(){
    var thumb = $(".thumbD"), track = $(".track"), line =$(".line");
    thumb.on("mousedown", function(e){
      var        
        thumbL = $(".thumbL").offset().left,
        thumbR = $(".thumbR").offset().left,
        trackCor = track.offset().left,  
        curShiftL = e.pageX - thumbL,
        curShiftR = $(".thumbR").outerWidth() - (e.pageX - thumbR);

      $(this).addClass("drag2");           
      $(document).mousemove(function(e){              
        var posL = e.pageX - trackCor - curShiftL;
        var posR = ((trackCor+track.width()) - e.pageX) - curShiftR;
             
        if($(".drag2").hasClass("thumbL")){
          if(posL<0){posL=0};
          if(posL > thumbR - trackCor - 11){ posL = thumbR - trackCor -11;};                  
          $(".drag2").css({"left": posL +'px'});
          $(".line").css({"left": posL +'px'});        
        }
       
        else if($(".drag2").hasClass("thumbR")){
          if(posR<0){posR=0};
          if(posR > (trackCor+track.width())- thumbL - 22){
            posR = (trackCor+track.width()) - thumbL - 22;}; 
          $(".drag2").css({"right": posR +'px'});
          $(".line").css({"right": posR +'px'});
        }              
      }).on("mouseup", function(){ thumb.removeClass("drag2"); });
      return false; 
    });
  })();
  

  (function(){
    var thumb = $(".thumb-edge"), zone = $(".img-comp");
    thumb.css({"left": zone.width()/2-thumb.width()/2 +"px"});
    $(".img-after").css({"left": zone.width()/2+"px"});
    
    thumb.on("mousedown", function(e){
      var corZone = zone.offset().left,
          curShift = e.pageX - thumb.offset().left;
      $(this).addClass("divide");           
      $(".img-after, .img-before").addClass("divided");           
      
      $(document).mousemove(function(e){              
        var pos = e.pageX - corZone - curShift ;  
        if(pos<1){pos=1}
        else if (pos>zone.width()-16){pos = zone.width()-16};
        $(".divide").css({ left: pos +"px" });    
        $(".img-after.divided").css({ left: pos+thumb.width()/2 +"px" });              
      }).on("mouseup", function(){ 
        thumb.removeClass("divide").stop(true,false)
          .animate({"left": zone.width()/2-thumb.width()/2 +"px" },300);          
        $(".img-after").removeClass("divided").stop(true,false)
          .animate({"left": zone.width()/2 +"px" },300);           
      });      
      return false; 
    });
    $(".img-after").on("dragstart", function(){return false;}); // отмена переноса картинок 
  })();

  // загрузка текста 
  $.getJSON("tab.json",function(data){
    $(".tab-content p").html(data.tab1);
  });
  $(".tab-head").click(function(){ 
    var tab = $(this).data("tab");
    $.getJSON("tab.json", function(data){
      $(".tab-content p").html(data[tab]);});
  }); 

});




