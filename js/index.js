
$('.page_first').hover(
	function () {
		$('.page_border').css({'width':'85px','left':'630px'})
	},
	function () {
		$('.page_border').css({'width':'0px','left':'0px'})
	}
);
$('.page_type').hover(
	function () {
		$('.page_border').css({'width':'105px','left':'745px'})
	},
	function () {
		$('.page_border').css({'width':'0px','left':'0px'})
	}
);
$('.page_release').hover(
	function () {
		$('.page_border').css({'width':'105px','left':'893px'})
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