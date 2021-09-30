export function filterContacts(contacts, filter) {
  let newContacts = contacts
  let lowerFilter = filter.toLowerCase()

  newContacts = contacts.filter(
    (client) =>
      client.name.toLowerCase().includes(lowerFilter) ||
      client.email.toLowerCase().includes(lowerFilter) ||
      client.phoneNumber.toLowerCase().includes(lowerFilter) ||
      client.abbreviation.toLowerCase().includes(lowerFilter)
  )
  return newContacts
}

export function getTotalShowedPages(page, range, currentLength, totalLength) {
  if (range * (page - 1) + currentLength === totalLength) {
    return totalLength
  } else return currentLength * page
}

export function getTotalPagesSelect(total) {
  let finalValues = []
  for (let i = 0; i < total; i++) {
    finalValues = [...finalValues, i + 1]
  }

  return finalValues
}
