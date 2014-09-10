/* Máscaras */
jQuery('#bitcoin-value').mask('0000000000,00000000', {reverse: true});
jQuery('#brl-value').mask('00000000000000000,00', {reverse: true});

/* Comportamento das abas */
jQuery('.submit-vender').hide();

jQuery('#comprar-bitcoin').click(function() {
	if( !jQuery('#comprar-bitcoin').hasClass('active') ) {
		jQuery('#comprar-bitcoin').addClass('active');
		jQuery('#vender-bitcoin').removeClass('active');
	}
	
	jQuery('.action').html('compra');
	
	jQuery('#form-action').val('compra');
	
	jQuery('.submit-vender').hide();
	jQuery('.submit-comprar').show();
});

jQuery('#vender-bitcoin').click(function() {
	if( !jQuery('#vender-bitcoin').hasClass('active') ) {
		jQuery('#vender-bitcoin').addClass('active');
		jQuery('#comprar-bitcoin').removeClass('active');
	}
	
	jQuery('.action').html('venda');
	
	jQuery('#form-action').val('venda');
	
	jQuery('.submit-comprar').hide();
	jQuery('.submit-vender').show();
});

/* Funções de conversão */
jQuery('#bitcoin-value').keyup(function() {
	var btc = parseFloat(jQuery('#bitcoin-value').val());
	var brl = fx.convert(btc, {from: 'BTC', to: 'BRL'});
	brl = accounting.formatNumber(brl);
	jQuery("#brl-value").val(brl);
});

jQuery('#brl-value').keyup(function() {
	var brl = parseFloat(jQuery('#brl-value').val());
	var btc = fx.convert(brl, {from: 'BRL', to: 'BTC'});
	btc = accounting.formatNumber(btc, {precision: 4});
	jQuery("#bitcoin-value").val(btc);
});
