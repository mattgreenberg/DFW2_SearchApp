/*
	Simple AJAX request function
	@param (string) url - A url to GET data from
	@param (function) callback - a function to process data
*/
window.ajax = function(url, callback){

	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){

		// state 4 is done
		if(request.readyState === 4){

			// status is good
			if(request.status === 200){
				callback(request.responseText);
			} else {
				callback(false, request);
			} // end status check

		}; // end if

	}; // end onreadystatechange

	// send ajax request
	request.open('GET', url);
	request.send();

};