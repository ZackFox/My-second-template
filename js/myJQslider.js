$(document).ready(function(){
	// автопрокрутка для CSS слайдера
	var control = $(".controls label"),
		firstLabel = $(".controls label").first(),
		lasttLabel = $(".controls label").last(),
		SecondLabel = firstLabel.next();
	setInterval(function(){
		if ($("input[type='radio']").first().prop("checked")){SecondLabel.click();}
		else if ($("input[type='radio']").first().next().prop("checked")){SecondLabel.next().click();}	
		else if($("input[type='radio']").last().prev().prop("checked")){lasttLabel.click();}
		else if ($("input[type='radio']").last().prop("checked")){firstLabel.click();}	
	},4000);
});

//слайдер JQ
;(function($){
	//---переменные
	var next = $(".next_slide"),		// кнопка вперед 
		prev = $(".prev_slide"),	 // кнопка назад
		cn = $(".slider_container"), // контейнер слайдов
		sl = $(".slides").length,	 // число слайдов 
		sWidth = 100,			// ширина слайда
 		count = 1 ; 			// счетчик
	
	//автопрокрутка
	setInterval(function(){next.click()},5000);
	
	//---переход вперед
	next.click(function(){
		if(sl-count>0){
			cn.animate({"left":'-='+sWidth+'%'},1000);
			count++;
		}else if (sl-count===0){
			cn.append($(".slides").first().clone());
			cn.css({"width":"500%"});
			$(".slides").css({"width":"20%"});
			cn.animate({"left":'-='+sWidth+'%'},1000,function(){
				$(".slides").last().remove();
				cn.css({"width":"400%"});
				$(".slides").css({"width":"25%"});
				cn.css({"left":0});
				count=1;				
			})
		count ++;
		}
	});	
	//---переход назад 
	prev.click(function(){		
		if(sl-count === sl-1){
			cn.prepend($(".slides").last().clone());
			cn.css({"width":"500%"});
			$(".slides").css({"width":"20%"});
			cn.css({"left":"-"+sWidth+"%"});
			count=2;	
			cn.animate({"left": "+="+sWidth+"%"},1000,function(){
				cn.css({"left":"-"+sWidth*(sl-1)+"%"});
				cn.css({"width":"500%"});
				$(".slides").css({"width":"20%"});			
				$(".slides").first().remove();				
				count=sl;
			})
		}else if(sl-count>=0){
			cn.animate({"left":'+='+sWidth+'%'},1000);
		count--;}		
	});
})(jQuery);


