
$('.page_first').hover(
	function () {
		$('.page_border').css({'width':'85px','left':'480px'})
	},
	function () {
		$('.page_border').css({'width':'0px','left':'0px'})
	}
);
$('.page_type').hover(
	function () {
		$('.page_border').css({'width':'105px','left':'595px'})
	},
	function () {
		$('.page_border').css({'width':'0px','left':'0px'})
	}
);
$('.page_typewrap').hover(
	function () {
		$('.type_menu').slideDown(400)
	},
	function () {
		$('.type_menu').slideUp(100)
	}
);

//登陆