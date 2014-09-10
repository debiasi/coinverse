// Use jQuery.ajax to get the latest exchange rates, with JSONP:
$.ajax({
    url: 'http://openexchangerates.org/api/latest.json?app_id=516e4bbafb52405d9eee331a95f694b8',
    dataType: 'jsonp',
    success: function(json) {
        // Rates are in `json.rates`
        // Base currency (USD) is `json.base`
        // UNIX Timestamp when rates were collected is in `json.timestamp`

        // If you're using money.js, do this:
        fx.rates = json.rates;
        fx.base = json.base;
    }
});

accounting.settings = {
	currency: {
		format: "%v",
		decimal: ",",
		thousand: "",
		precision: "2"
	},
	number: {
		precision: 2,
		thousand: "",
		decimal: ","
	}
}

$(window).load(function() {
	var btc = fx.convert(1, {from: 'BTC', to: 'BRL'});
	btc = accounting.formatNumber(btc);
	jQuery('.exchange-rate-value').html(btc);
});
