// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000000');

// Conversor de BTC/BRL.
jQuery('#bitcoin-value').keyup(function() {
	var btc = parseFloat(jQuery('#bitcoin-value').val());
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
	jQuery('.brl-final-value').html(brl);
});

jQuery('#brl-value').keyup(function() {
	jQuery('.brl-final-value').html(jQuery('#brl-value').val());
	var brl = parseFloat(jQuery('#brl-value').val());
	var btc = fx.convert(brl, {from: 'BRL', to: 'BTC'});
	btc = accounting.formatNumber(btc, {precision: 4});
	jQuery("#bitcoin-value").val(btc);
});