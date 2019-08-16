const getLoggingState = () => {
	return new Promise((resolve, reject) => {
		chrome.storage.local.get(['logging'], result => {
			resolve(result);
		});
	});
};

const setLoggingState = state => {
	chrome.storage.local.set({ logging: state }, () => {
		console.log(`chrome.storage API -> logging was turned ${state}`);
	});
};

const toggleLoggingState = () => {
	getLoggingState().then(result => {
		if (result.logging === 'off') {
			setLoggingState('on');
		} else {
			setLoggingState('off');
		}
		updateSpan();
	});
};

const updateSpan = () => getLoggingState().then(result => $('#onoff').text(result.logging));

$(document).ready(function() {
	$('#toggleLogging').click(() => {
		toggleLoggingState();
	});

	updateSpan();
	$('.tooltipped').tooltip();
});
