export function addINRPrefixForValue(value: string | number) {
    return `${getINRSymbol()}${formatNumberWithComma(value)}`
}

export function formatNumberWithComma(value: string | number){
    value = +value
    return value.toLocaleString('en-IN').toString()
}

export function getINRSymbol(){
    return "₹"
}