;(function($){

	//---ќбъ€вление переменных
	var next = $(".next_slide"),	 // кнопка вперед
		prev = $(".prev_slide"),	 // кнопка назад
		cn = $(".slider_container"), // контейнер со слайдами
		sl = $(".slides").length,	 // количество всех слайдов
		sWidth = 900,				 // ширина одного слайда и пророг перехода
 		count = 1 ; 				 // счетчик слайдов
	
	//---ѕереход на ледующий слайд
	next.click(function(){
		if(sl-count>0){
			cn.animate({"left":'-='+sWidth+'px'},1000);
			count++;}
		else{cn.animate({"left": 0},1500);
			count = 1;}
	});
	
	//---ѕереход на предыщий слайд
	prev.click(function(){
		if(sl-count === sl-1){
			cn.animate({"left": "-"+(sWidth*(sl-1))+'px'},1500);
			count = sl;}
		else{cn.animate({"left":'+='+sWidth+'px'},1000);
			count--;}
	});
})(jQuery);


