// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000,00000000', {reverse: true});

// Conversor de BTC/BRL.
jQuery('#bitcoin-value').keyup(function() {
	var btc = jQuery('#bitcoin-value').val().replace(',','.');
	btc = parseFloat(btc);
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
});

jQuery('#brl-value').keyup(function() {
	var brl = parseFloat(jQuery('#brl-value').val().replace(',','.'));
	var btc = fx.convert(brl, {from: 'BRL', to: 'BTC'});
	btc = accounting.formatNumber(btc, {precision: 4});
	jQuery("#bitcoin-value").val(btc);
});