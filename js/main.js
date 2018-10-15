/* Background, Weather, Time, and Search setup *\
\*=============================================*/

$(document).ready(function(){		
	var backgroundUrl = "https://source.unspash.com/collection/1072056"

	var curD= new Date();
	var curH= curD.getHours();

    backgroundUrl = backgroundUrl + '/' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;

	$('body').css({
		'background-image':'url('+ backgroundUrl +')',
		'background-repeat':'no-repeat',
		'background-size': 'cover'
	});
	
   	//WEATHER
	var strLoco = "Warwick, UK";
  loadWeather(strLoco);
  
	function loadWeather(strLoco, woeid){
	    $.simpleWeather({
		    location: strLoco,
			woeid: '',
			unit: 'c',
			success: function(weather) {
			html = '<h2 class="weatherHead"><i class="wi wi-yahoo-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
			html += '<ul class="weatherDetail"><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li></ul>';
			
			$("#weather").html(html);
		    },
			error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		    }
		});
	}
	
	//TIME
	function startTime() {
		var today=new Date();
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		var days = ['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'];
		var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Nov','Dec'];
		
		m = checkTime(m);
		h = checkTime(h);
		s = checkTime(s);
		
		if(!true){
		    s = today.getHours()>12? s+'<p>pm</p>' : s+'<p>AM</p>';
		    h = h>12? parseInt(h)-12: h ;
		    
		    $('#time').css('font-size','3em');
		}

		$('#time').html(h +'<span>:</span>'+ m);
		//$('#time').html(h+'<span>:</span>'+m);
		$('#day').html(days[today.getDay()]+'day');
		$('#date').html(months[today.getMonth()]+' '+today.getDate()+', '+today.getFullYear());
		
		setTimeout(function(){startTime()},5000);
	}

	function checkTime(i) {
		i=i<10? i='0'+i:i; 
		return i;
	}
	
	$('#time').html(startTime());
	
	// PAGE TITLE
	$('title').html('Felt');
});