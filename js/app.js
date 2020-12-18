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

//VALIDAR COLUMNA

function validar_colm() {
	for (var j = 0; j < 7; j++) {
		var counter = 0;
		var candyPosition = [];
		var extraCandyPosition = [];
		var candyColumn = galleta_col(j);
		var comparisonValue = candyColumn.eq(0);
		var gap = false;
		for (var i = 1; i < candyColumn.length; i++) {
			var srcComparison = comparisonValue.attr('src');
			var srcCandy = candyColumn.eq(i).attr('src');

			if (srcComparison != srcCandy) {
				if (candyPosition.length >= 3) {
					gap = true;
				} else {
					candyPosition = [];
				}
				counter = 0;
			} else {
				if (counter == 0) {
					if (!gap) {
						candyPosition.push(i - 1);
					} else {
						extraCandyPosition.push(i - 1);
					}
				}
				if (!gap) {
					candyPosition.push(i);
				} else {
					extraCandyPosition.push(i);
				}
				counter += 1;
			}
			comparisonValue = candyColumn.eq(i);
		}
		if (extraCandyPosition.length > 2) {
			candyPosition = $.merge(candyPosition, extraCandyPosition);
		}
		if (candyPosition.length <= 2) {
			candyPosition = [];
		}
		candyCount = candyPosition.length;
		if (candyCount >= 3) {
			borrar_galleta_horz(candyPosition, candyColumn);
			puntuacion(candyCount);
		}
	}
}