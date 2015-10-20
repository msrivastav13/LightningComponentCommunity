({
	fetchResponse: function(component, event, helper) {
		console.log('hello');
        response = event.getParam("response");
        console.log(response);
		component.set("v.result", response);
	},

	showSpinner : function (component, event, helper) {
        var spinner = component.find('spinner');
        var evt = spinner.get("e.toggle");
        evt.setParams({ isVisible : true });
        evt.fire();    
    },
    
    hideSpinner : function (component, event, helper) {
       var spinner = component.find('spinner');
       var evt = spinner.get("e.toggle");
       evt.setParams({ isVisible : false });
       evt.fire();    
    }
})