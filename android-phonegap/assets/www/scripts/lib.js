
	var
		$thePicture = $("#thePicture"),
		$itemForm = $("#itemForm"),
	    uploadImage = function (imageURI) {
	        var options = new FileUploadOptions(),
	        done = function (r) {
	            console.log("Code = " + r.responseCode);
	            console.log("Response = " + r.response);
	            console.log("Sent = " + r.bytesSent);
	            alert("Sent");
	        },
	        fail = function (error) {
	        	alert("Failed: " + error.code);
	        };
	        
	        options.fileKey="file";
	        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	        options.mimeType="image/jpeg";
	
	        var params = new Object();
	        params.title = $("#title").val();
	        params.condition = $('input[name=condition]:checked').val();
	        params.category = $("#category").val();
	
	        options.params = params;
	        options.chunkedMode = false;
	
	        var ft = new FileTransfer();
	        ft.upload(imageURI, remoteAppBase + "image/upload", done, fail, options);
	    },
		// once the image is loaded, get its dimensions
		picLoaded = function () {
			var width, height;
			width = $thePicture.width();
			height = $thePicture.height();
			
			// cause the image to scale by setting one of it dimension
			if (width > height) {
				$thePicture.width(RocknCoder.Container.width);
			} else {
				$thePicture.height(RocknCoder.Container.height);
			}
		},
		// a picture has been successfully returned
		picSuccess = function (imageData) {
			$thePicture.attr('src', "data:image/jpeg;base64," + imageData).load(picLoaded);
			uploadImage(imageData);
		},
		picSuccessUri = function (uri) {
			console.log("URI=" + uri);
			$thePicture.attr('src', uri).load(picLoaded);
			uploadImage(uri);
		},
		// there was an error, message contains its cause
		picFail = function (message) {
			alert("Failed because: " + message);
		}
		;

	function snapPictureHandler(event) {
		event.preventDefault();
		event.stopPropagation();
		navigator.camera.getPicture(
			picSuccess,
			picFail,
			{quality: 35, destinationType: Camera.DestinationType.DATA_URL}
		);
		return false;
	};

	function selectPictureHandler(event) {
		event.preventDefault();
		event.stopPropagation();
	      // Retrieve image file location from specified source
	      navigator.camera.getPicture(
	    		  picSuccessUri, 
	    		  picFail, 
	    		  { quality: 50, destinationType: Camera.DestinationType.FILE_URI,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY }
		);
		return false;
	};
	
	function formUpload(event){
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