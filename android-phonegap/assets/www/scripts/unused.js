/*
 * Unused code that's useful to reference
 */

	
	function submitHandler(event){
		event.preventDefault();
		event.stopPropagation();
		  
	    var formData = $itemForm.serialize();
	    console.log("Data:" + formData);
	    $.ajax({
	        type: "POST",
	        enctype: "multipart/form-data",
	        url: remoteAppBase + "image/upload",
	        cache: false,
	        data: formData
	/*      ,
	       success: onSuccess,
	      error: onError
	*/  });
	
	    return false;
	}