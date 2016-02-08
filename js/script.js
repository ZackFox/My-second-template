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




