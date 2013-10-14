Ext.application({
	name: 'AccelerometerApp',
	
	views: ['firstScreen.FirstScreen',],
	models: [],
	stores: [],
	controllers: ['acceController.Accelerometer'],
	
	launch: function()
	{
		
		var login = Ext.create('AccelerometerApp.view.firstScreen.FirstScreen');
		Ext.Viewport.add(login);
		Ext.Viewport.setActiveItem(login);
		
		
	} //// End of launch
	
	
	
	
	
	
});