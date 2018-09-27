// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    		
	let H, Q, D, N, P, money;
	let obj = {};
	if(currency <= 0){

			return {};

	} else if(currency >= 10000){

			return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	
		}

	if(currency >= 50){

			H = ((currency - currency % 50)/50);
			obj.H = H;
			currency = currency%50;
	
	}

	if(currency < 50 && currency >= 25){

			Q = ((currency - currency % 25)/25);
			obj.Q = Q;
			currency = currency%25;
	
	}

	if(currency < 25 && currency >= 10){

			D = ((currency - currency % 10)/10);
			obj.D = D;
			currency = currency % 10;

	}

	if(currency < 10 && currency >= 5){

			N = ((currency - currency % 5)/5);
			obj.N = N;
			currency = currency%5;
	
	}

	if(currency < 5 && currency >= 1){
		
			P = ((currency - currency % 1)/1);
			obj.P = P;
			currency = currency%1;
	
	}

	return obj;

}
