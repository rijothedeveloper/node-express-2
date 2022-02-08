function timeWord(time) {
    if(time === "00:00") return "midnight";
    else if(time === "12:00") return "noon";
    let ampm = "am"
    const times = time.split(':')
    let hour = parseInt(times[0])
    const mins = parseInt(times[1])
    if(hour >= 12) {
        ampm = "pm"
    }
    const hourArray = ['twelve', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
    const lowNumArray = ['o’clock', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five', 'oh six', 'oh seven', 'oh eight', 'oh nine',
                            'ten', 'eleven', 'twelve', 'thierteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const highNumbers = ["twenty", "thirty", "fourty", "fifty"]
    if(hour > 12) {
        hour = hour - 12;
    }
    let wordTime=hourArray[hour]
    if (mins<20){
        wordTime += ` ${lowNumArray[mins]}`
    } else {
        const highNumberArrIdx = (Math.floor(mins/10))-2;
        wordTime += ` ${highNumbers[highNumberArrIdx]}`
        const lowNumberArrIdx = mins % 10;
        if(lowNumberArrIdx !== 0) {
            wordTime += ` ${hourArray[lowNumberArrIdx]}`
        }
    }
     return wordTime+" "+ampm;
}

module.exports = timeWord