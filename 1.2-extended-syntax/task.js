function getResult(a,b,c){
	let d = (Math.pow(b, 2) - 4 * a * c);
	    if (d < 0) {
		    return [];
	    } else if (d === 0) {
	    	return [(-b / (2 * a))];
    	} else {
		    return [((-b + Math.sqrt(d)) / (2 * a)), 
		  		    ((-b - Math.sqrt(d)) / (2 * a))];
	};
};

function getAverageMark(marks) {
    let total = 0;
    let result;
        if (marks.length === 0) {
                return 0;
        } else if (marks.length > 5) {
            marks.splice(5);
            for (let i = 0; i < marks.length; i++) {
            total += marks[i];
            }
                return result = total / marks.length;
        } else {
            for (let i = 0; i < marks.length; i++) {
            total += marks[i];
            }
                return result = total / marks.length;
  }
}

function askDrink(name,dateOfBirthday) {
    let yearNow = new Date().getFullYear();
        if (name == '') {
            name = 'Гость';
        }
        if ((yearNow - dateOfBirthday.getFullYear()) < 18) {
		    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
	    } else {
		    return `Не желаете ли олд-фэшн, ${name}?`;
	}
}