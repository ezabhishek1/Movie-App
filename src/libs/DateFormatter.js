

export function getDate(date) {
    // 2024-01-10 -> 10/01/2024
    const dateArray = date.split('-'); // ["2024", "01", "10"]
    return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;

}

export function getYear(date) {
    const dateArray = date.split('-');
    return dateArray[0];

}

export function getLongDate(date) {
    // 2024-01-10 -> 10 January 2024
    const dateArray = date.split('-'); // ["2024", "01", "10"]
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${dateArray[2]} ${months[parseInt(dateArray[1]) - 1]} ${dateArray[0]}`;
}



export function playTime(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;

    return `${hours}h ${minutes}m`;
}