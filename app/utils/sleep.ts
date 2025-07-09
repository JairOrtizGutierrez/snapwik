export const sleep = (millis: number): void => {
	var date = new Date().getTime();
	var curDate = new Date().getTime();
	while (curDate - date < millis) {
		curDate = new Date().getTime();
	}
};
