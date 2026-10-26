function getElementWidth(content, padding, border) {
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding) * 2;
    const borderWidth = Number.parseFloat(border) * 2;

    return contentWidth + paddingWidth + borderWidth;
}

console.log(getElementWidth("50", "8", "4")); // 74
console.log(getElementWidth("60", "12", "8.5")); // 101
console.log(getElementWidth("200", "0", "0")); // 200
