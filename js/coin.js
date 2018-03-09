var coins = 0;
var coinPerSecond = 1;

$(document).ready(function() {
    loop();
});

function loop(){
	setTimeout(function loopBack(){
		addcoin(coinPerSecond);
		loop();
	},1000);
}

function addcoin(value){
	coins = coins+value;
	$(".coins").html(coins+"");
}