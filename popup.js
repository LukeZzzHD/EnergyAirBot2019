const getLoggingState = () => localStorage.getItem('logging');
const setLoggingState = state => localStorage.setItem('logging', state);

const toggleLoggingState = () => {
	let state = getLoggingState();
	if (!state || state === '') {
		setLoggingState('off');
	} else {
		state === 'off' ? setLoggingState('on') : setLoggingState('off');
	}
};

const updateSpan = () => {
	let state = getLoggingState();
	if (!state || state === '') {
		setLoggingState('off');
	}
	document.getElementById('onoff').innerText = state;
};

document.addEventListener('DOMContentLoaded', updateSpan);
document.getElementById('toggleLogging').addEventListener('click', toggleLoggingState);
