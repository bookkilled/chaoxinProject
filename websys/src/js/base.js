$(function(){
	// 菜单栏展开收起
	$('.icon').each(function(){
		$(this).on('click', function(){
			$(this).siblings('.smenu').slideToggle();
		});
	});
	// 检索条件 删除 新增
	$('td').on('click', '.delbtn', function(){
		$(this).parent().remove();
	});
	$('td').on('click', '.addbtn', function(){
		$(this).parent().parent().prepend('<div class="custom" style="margin-bottom:10px;"><input type="text" class="bbnbinp" name="nbname" id="nbname"><span class="delbtn"></div>');
	});
	// $('.addbtn').each(function(){
	// 	$(this).on('click', function(){
	// 		$(this).parent().parent().prepend('<div class="custom" style="margin-bottom:10px;"><input type="text" class="bbnbinp" name="nbname" id="nbname"><span class="delbtn"></div>');
	// 	});
	// });
});