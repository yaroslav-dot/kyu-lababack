function orderWeight(strng) {
    return strng
        .split(' ')
        .sort((a, b) => {
            const weightA = a.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
            const weightB = b.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
            if (weightA === weightB) {
                return a.localeCompare(b);
            }
            return weightA - weightB;
        })
        .join(' ');
}
