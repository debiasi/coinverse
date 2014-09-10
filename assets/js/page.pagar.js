// Máscaras dos campos do formulário.
jQuery('#cpf').mask('000.000.000-00');
jQuery('#bitcoin-value').mask('000000000');
jQuery('#phone').keyup(function() {
	if(jQuery('#phone').val().substring(0, 3) == '(11') {
		jQuery('#phone').mask('(00) 90000-0000');
	}
	else {
		jQuery('#phone').mask('(00) 0000-0000');
	}
});
jQuery('#expiation-date').mask('00/00/0000');

jQuery('#brl-value').mask('000.000.000.000.000,00', {reverse: true});

jQuery('#brl-value').keyup(function() {
	jQuery('.brl-final-value').html(jQuery('#brl-value').val());
});
jQuery('#bar-code').mask('00000.00000 00000.000000 00000.000000 0 00000000000000');