({
	getresponse: function(component,event) {

		 var price = component.get("v.price");
		 var downpayment  = component.get("v.downpayment");
		 var zipcode = component.get("v.zipcode");
		 console.log('came here');
		 console.log(zipcode);

		var action = component.get("c.fetchResponse");
		action.setParams({
	         "price": price,
	         "rate" : downpayment,
	         "zip" :   zipcode

	    });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
            	console.log('AA');
            	var initiateActionreq = $A.get("e.c:initiateAction");
            	console.log(response.getReturnValue());
         		initiateActionreq.setParams({ "response" : response.getReturnValue()});
         		initiateActionreq.fire();
            }
        });
        $A.enqueueAction(action);
	}
})