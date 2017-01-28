self.addEventListener('message', function(e) {

	var start = performance.now();
	for (i = 0; i < 10000; i++) {
		var parsedJson = JSON.parse(e.data);
	}
	var end = performance.now();
	var elapsedTime = Math.round(end - start);
    self.postMessage(elapsedTime);
  
}, false);