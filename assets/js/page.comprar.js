// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000000');
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

// Convertendo valor em BTC para BRL.
jQuery('#bitcoin-value').keyup(function() {
	var btc = parseInt(jQuery('#bitcoin-value').val());
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
	jQuery(".brl-final-value").html(brl);
});

// Função de validação do formulário.
jQuery('#full-name').focusout(function() {
	if(jQuery(this).val() == null || jQuery(this).val() == '') {
		jQuery(this).addClass('error');
		jQuery('#full-name-error').html('Este campo é de preenchimento obrigatório.');
	} else {
		if(jQuery(this).hasClass('error')) {
			jQuery(this).removeClass('error');
		}
		jQuery('#full-name-error').html(' ');
	}
});

jQuery('#cpf').focusout(function() {
	if(jQuery(this).val() == null || jQuery(this).val() == '') {
		jQuery(this).addClass('error');
		jQuery('#cpf-error').html('Este campo é de preenchimento obrigatório.');
	} else {
		if(jQuery(this).hasClass('error')) {
			jQuery(this).removeClass('error');
		}
		jQuery('#cpf-error').html(' ');
	}
});

jQuery('#email').focusout(function() {
	if(jQuery(this).val() == null || jQuery(this).val() == '') {
		jQuery(this).addClass('error');
		jQuery('#email-error').html('Este campo é de preenchimento obrigatório.');
	} else {
		if(jQuery(this).hasClass('error')) {
			jQuery(this).removeClass('error');
		}
		jQuery('#email-error').html(' ');
	}
});

jQuery('#bitcoin-value').focusout(function() {
	if(jQuery(this).val() == null || jQuery(this).val() == '') {
		jQuery(this).addClass('error');
		jQuery('#bitcoin-error').html('Este campo é de preenchimento obrigatório.');
	} else {
		if(jQuery(this).hasClass('error')) {
			jQuery(this).removeClass('error');
		}
		jQuery('#bitcoin-error').html(' ');
	}
});