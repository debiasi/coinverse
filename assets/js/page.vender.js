// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000000');

// Convertendo valor em BTC para BRL.
jQuery('#bitcoin-value').keyup(function() {
	var btc = parseInt(jQuery('#bitcoin-value').val());
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
	jQuery(".brl-final-value").html(brl);
});