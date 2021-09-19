// this export three methods, so we destruct and rename it all at once
export const { format: formatPrice } = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
});

export const kFormatter = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
}
