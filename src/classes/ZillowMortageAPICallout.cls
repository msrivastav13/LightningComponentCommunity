public with sharing class ZillowMortageAPICallout {

	public ZillowMortageAPICallout() {
		
	}

	@AuraEnabled
	public static ZillowParser  fetchResponse(decimal price,decimal rate,integer zip){
		Http http = new Http();
        HttpRequest req = new HttpRequest();
        HttpResponse res = new HttpResponse();
        req.setEndpoint('http://www.zillow.com/webservice/GetMonthlyPayments.htm?zws-id=X1-ZWz1a1p1dv9o23_3bebs&price='+price+'&down='+rate+'&zip='+zip+'&output=json');
        req.setHeader('Content-Type','application/json');
        req.setMethod('GET');
        req.setTimeOut(1200);
        res = http.send(req);
        system.debug(res.getBody());
        return ZillowParser.parse(res.getBody());
	}
}