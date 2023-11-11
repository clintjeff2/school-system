//staffData, setStaffData ---> state Data, setting state Data
//field ---> field to sortBy
//fieldOpt ---> optional field, in case of department or specialty or sth

//setIsSortedBy --> to set state in order to show the currently sorted field, with blue color

export const sortArrayObject = (
	data,
	setData,
	setSortedBy,
	field,
	fieldOpt
) => {
	console.log(data);
	const tempData = data.map((dt) => dt);

	if (field && fieldOpt) {
		tempData.sort((a, b) => {
			let first = a[field][fieldOpt];
			let second = b[field][fieldOpt];

			// console.log(first, second);
			if (first < second) {
				// console.log(-1);
				return -1;
			}
			if (second < first) {
				// console.log(1);
				return 1;
			}
			return 0;
		});
	} else {
		tempData.sort((a, b) => {
			let first = a[field];
			let second = b[field];

			// console.log(first, second);
			if (first < second) {
				// console.log(-1);
				return -1;
			}
			if (second < first) {
				// console.log(1);
				return 1;
			}
			return 0;
		});
	}

	console.log(tempData);
	setData(tempData);
	setSortedBy(field);
};
