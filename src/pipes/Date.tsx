import moment from "moment";

export function DateConverter(inputDate: string) {
	const date = new Date(inputDate);

	const formattedDate = moment(date).format("dddd, MMMM Do YYYY");

	return formattedDate;
}
