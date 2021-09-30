export function configurePaginate(list, page, range) {
  if (page && list && list.length) {
    const newPage = page
    const firstIndex = page === 1 ? page : (page - 1) * range
    const lastIndex = firstIndex + range
    const newPaginatedList = list.slice(firstIndex, lastIndex)

    return {
      newContacts: newPaginatedList,
      newPage,
    }
  }
}
