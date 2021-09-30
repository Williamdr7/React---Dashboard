export function formatPrice(price) {
  const formatedPrice = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })

  return formatedPrice
}

export function formatNumber(number) {
  const formatedPrice = number.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })

  return formatedPrice
}
