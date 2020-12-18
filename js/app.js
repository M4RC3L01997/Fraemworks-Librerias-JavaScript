//CAMBIAR COLOR
function cambiar_logo(selector) {
	$(selector).animate({
		opacity: '1',	},			 
			{step: function () {	$(this).css('color', 'white');},
			queue: true
		}) .animate({
			opacity: '1'}, 
			{step: function () {	$(this).css('color', 'yellow');
			},
			queue: true
		}, 500).delay(1000).animate({
			opacity: '2'
		}, {step: function () {    $(this).css('color', 'white');
			},
			queue: true
		}) .animate({	opacity: '2'}, {step: function () {  $(this).css('color', 'yellow');
			cambiar_logo('h1.main-titulo');
			},
			queue: true
		});
}