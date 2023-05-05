function getMonthName (index){
    switch(index){
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            console.log(`Check your index: ${index} \n Hint: January starts with 0 as index`);
            break;
    }
};

function getActualHour(){
    if (timestampObj.getHours() === 0){
        return 12;
    }

    if (timestampObj.getHours() > 12){
        return Math.floor(timestampObj.getHours() - 12);
    }else{
        return timestampObj.getHours();
    }
}

function getTime (){
    const timestampObj = new Date(timestamp);

    // Formated date, month, and year
    const date = timestampObj.getDate();
    const month = getMonthName(timestampObj.getMonth());
    const year = timestampObj.getFullYear();
    
    // Formated times
    const hours = getActualHour();
    const minutes = timestampObj.getMinutes();
    const period = timestampObj.getHours() >= 12 ? "pm" : "am";
    
    const actualDate = `${month} ${date}, ${year} at ${hours} : ${minutes} ${period}`;
    return actualDate;
}


module.export = getTime;