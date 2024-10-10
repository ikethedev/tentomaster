const generateCustomId = () => {
    return String(Math.floor(Math.random() * 255));
};

const generateDate= () =>{
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date()
    const month = date.getMonth()
    const dayOfMonth = date.getUTCDate()
    const year = date.getFullYear()
    const day = date.getDay()

    return `${daysOfWeek[day]} ${monthsOfYear[month]} ${dayOfMonth}, ${year}`

}

export {generateCustomId, generateDate};