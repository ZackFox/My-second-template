;(function($){

	//---���������� ����������
	var next = $(".next_slide"),	 // ������ ������
		prev = $(".prev_slide"),	 // ������ �����
		cn = $(".slider_container"), // ��������� �� ��������
		sl = $(".slides").length,	 // ���������� ���� �������
		sWidth = 900,				 // ������ ������ ������ � ������ ��������
 		count = 1 ; 				 // ������� �������
	
	//---������� �� �������� �����
	next.click(function(){
		if(sl-count>0){
			cn.animate({"left":'-='+sWidth+'px'},1000);
			count++;}
		else{cn.animate({"left": 0},1500);
			count = 1;}
	});
	
	//---������� �� �������� �����
	prev.click(function(){
		if(sl-count === sl-1){
			cn.animate({"left": "-"+(sWidth*(sl-1))+'px'},1500);
			count = sl;}
		else{cn.animate({"left":'+='+sWidth+'px'},1000);
			count--;}
	});
})(jQuery);


