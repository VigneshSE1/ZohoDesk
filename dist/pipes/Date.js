import moment from "moment";
export function DateConverter(inputDate) {
    const date = new Date(inputDate);
    const formattedDate = moment(date).format("dddd, MMMM Do YYYY");
    return formattedDate;
}
