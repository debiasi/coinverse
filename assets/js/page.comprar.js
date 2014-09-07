// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000000');
jQuery('#cep').mask('00000-000');
jQuery('#state').mask('SS');
jQuery('#number').mask('999999');

// Exibindo ou ocultando campos de boleto.
jQuery('[name="payment-method"]').click(function() {
	if($('[id="payment-method-boleto"]').is(':checked')) {
		jQuery('#fields-payment-method').removeClass('hidden');
	} else {
		jQuery('#fields-payment-method').addClass('hidden');
	}
});

// Convertendo valor em BTC para BRL.
jQuery('#bitcoin-value').keyup(function() {
	var btc = parseInt(jQuery('#bitcoin-value').val());
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
	jQuery(".brl-final-value").html(brl);
});

// Função de validação do formulário.
function validateForm() {
	var fullname = document.forms["compre-bitcoins"]["full-name"].value;
}