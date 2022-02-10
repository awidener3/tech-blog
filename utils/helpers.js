module.exports = {
	// Return date with MM/DD/YYYY
	format_date: (date) => {
		return `${new Date(date).getMonth()}/${new Date(
			date
		).getDate()}/${new Date(date).getFullYear()}`;
	},
	format_time: (date) => {
		return date.toLocaleTimeString();
	},
};
