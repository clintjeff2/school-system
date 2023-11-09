//get date as YYYY-MM-DD

export const getDateFromDateObject = (Obj) => {
	let dateObj = new Date(Obj);
	const year = dateObj.getFullYear();

	//format month
	let month = dateObj.getMonth() + 1;
	month = month < 10 ? `0${month}` : month;

	//format day
	let day = dateObj.getDate();
	day = day < 10 ? `0${day}` : day;

	return `${year}-${month}-${day}`;
};
