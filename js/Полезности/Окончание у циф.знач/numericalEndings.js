
// const cases = ["товар", "товара", "товаров"];
// amount = число
function numericalEndings(amount, cases) {
    const indexes = [2, 0, 1, 1, 1, 2];
    const mod100 = amount % 100;
    const mod10 = amount % 10;
    const index =
        mod100 > 4 && mod100 < 20 ? 2 : indexes[mod10 < 5 ? mod10 : 5];
    return cases[index];
}
