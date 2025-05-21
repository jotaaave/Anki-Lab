export const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

function inputValue(charcode: number) {
    return String.fromCharCode(charcode);
}

export const genId = () => {
    const id = [];

    for (let i = 0; i < 10; i++) {
        const letter = inputValue(randomNum(97, 122));
        const upperLetter = inputValue(randomNum(65, 90));
        const number = inputValue(randomNum(48, 57));
        const selectOptions = [letter, upperLetter, number];
        id.push(selectOptions[randomNum(0,2)])
    }

    return id.join('');
};
