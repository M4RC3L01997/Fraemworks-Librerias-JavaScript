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

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function giveCandyArrays(arrayType, index) {

	var candyCol1 = $('.col-1').children();
	var candyCol2 = $('.col-2').children();
	var candyCol3 = $('.col-3').children();
	var candyCol4 = $('.col-4').children();
	var candyCol5 = $('.col-5').children();
	var candyCol6 = $('.col-6').children();
	var candyCol7 = $('.col-7').children();

	var galleta_col = $([candyCol1, candyCol2, candyCol3, candyCol4,candyCol5,candyCol6, candyCol7]);

	if (typeof index === 'number') {
		var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index),
			candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),
			candyCol7.eq(index)
		]);
	} else {
		index = '';
	}

	if (arrayType === 'columns') {
		return galleta_col;
	} else if (arrayType === 'rows' && index !== '') {
		return candyRow;
	}
}

//FUNCION PARA LAS FILAS
function galleta_fila(index) {
	var candyRow = giveCandyArrays('rows', index);
	return candyRow;
}
//FUNCION PARA LAS COLUMNAS
function galleta_col(index) {
	var candyColumn = giveCandyArrays('columns');
	return candyColumn[index];
}