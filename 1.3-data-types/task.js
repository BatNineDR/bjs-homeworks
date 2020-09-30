function calculateTotalMortgage(percent, contribution, amount, date) {
    let credit = amount - contribution;
    let monthlyPercent = percent / 100 / 12;
    let month = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** month) - 1));
    let totalAmount = month * monthlyPayment;
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    greeting = (name == null || name.length === 0 ? `Привет, мир! Меня зовут Аноним` : `Привет, мир! Меня зовут ${name}`);
    return greeting;
}