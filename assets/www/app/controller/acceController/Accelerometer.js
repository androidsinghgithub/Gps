Ext.define('AccelerometerApp.controller.acceController.Accelerometer',{
	extend: 'Ext.app.Controller',
	alias: 'widget.accelerometer',
	xtype: 'accelerometer',
	
	init : function() {
		controller = this;
		//Ext.create('WeatherApp.store.weatherStore.WeatherStore');
	},
	
	config : {
		
			refs : {
				myClickbtn: 'firstScreen #myClickbtn',
				gpsID:'firstScreen #gpsID',
				accelerometerValue:'accelerometerValue',
			},
			control : {
				myClickbtn:
					{
					tap: 'GetGPSValue',
					}
			},
			},
			
			GetGPSValue:function ()
			{
			
				navigator.geolocation.getCurrentPosition(controller.onSuccess, controller.onError);
			},
			
			onSuccess:function(position) {
       // var element = document.getElementById('geolocation');
       controller.getGpsID().setValue('Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />');
    },
    
    onError:function(error) {
    alert('error! Gps not found!');
},
			
			
});