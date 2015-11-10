;(function($){
	//---переменные
	var next = $(".next_slide"),		// кнопка вперед 
		prev = $(".prev_slide"),	 // кнопка назад
		cn = $(".slider_container"), // контейнер слайдов
		sl = $(".slides").length,	 // число слайдов
		sWidth = 900,			// ширина слайда
 		count = 1 ; 			// счетчик
	
	//автопрокрутка
	setInterval(function(){next.click()},5000);
	
	//---переход вперед
	next.click(function(){
		if(sl-count>0){
			cn.animate({"left":'-='+sWidth+'px'},1000);
			count++;
		}else if (sl-count===0){
			cn.append($(".slides").first().clone());		
			cn.animate({"left":'-='+sWidth+'px'},1000,function(){
				$(".slides").last().remove();
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
			cn.css({"left":"-"+sWidth+"px"});
			count=2;	
			cn.animate({"left": "+="+sWidth+"px"},1000,function(){
				cn.css({"left":"-"+sWidth*(sl-1)+"px"});			
				$(".slides").first().remove();				
				count=sl;
			})
		}else if(sl-count>=0){
			cn.animate({"left":'+='+sWidth+'px'},1000);
		count--;}		
	});
})(jQuery);


