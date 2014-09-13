// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('0000,00000000', {reverse: true});
jQuery('#brl-value').mask('00000000000000000,00', {reverse: true});
jQuery('#cep').mask('00000-000');
jQuery('#state').mask('SS');
jQuery('#number').mask('999999');

// Exibindo ou ocultando campos de boleto.
jQuery('[name="payment-method"]').click(function() {
	if(jQuery('[id="payment-method-boleto"]').is(':checked')) {
		jQuery('#fields-payment-method').removeClass('hidden');
	} else {
		jQuery('#fields-payment-method').addClass('hidden');
	}
});

// Exibindo ou ocultando campo da carteira.
jQuery('[name="has-wallet"]').click(function() {
	if(jQuery('#has-wallet-yes').is(':checked')) {
		jQuery('.fields-has-wallet').removeClass('hidden');
	} else {
		jQuery('.fields-has-wallet').addClass('hidden');
	}
});

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
