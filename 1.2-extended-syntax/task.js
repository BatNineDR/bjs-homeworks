function getResult (a,b,c) {
	let d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
	    return []
	} else if (d === 0) {
	    return [(-b / (2 * a))]
    } else {
	    return [((-b + Math.sqrt(d)) / (2 * a)), 
	            ((-b - Math.sqrt(d)) / (2 * a))]
	}
}

function getAverageMark (marks) {
    let total = 0;
    if (marks.length > 5) {
    marks.splice(5);
    } if (marks.length === 0) {
        return 0;
    } 
    for (let i = 0; i < marks.length; i++) {
        total += marks[i]; 
    }
    let result = total / marks.length;
    return result;
}

function askDrink (name, dateOfBirthday) {
    let result;
    let year = dateOfBirthday.getFullYear();
    let yearNow = new Date().getFullYear();
    if (yearNow - year >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}