export function sortBy(array, getter) {
  const sortedArray = [...array] // Create a shallow copy to avoid mutating the original array
  sortedArray.sort((a, b) =>
    // Compare items using the getter function
    // Returns 1 if a > b, -1 if b > a, and 0 if a === b
    // eslint-disable-next-line no-nested-ternary
    getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0
  )
  return sortedArray
}

export function toggleListItem(list, item) {
  const itemIndex = list.indexOf(item) // Find the index of the item in the list
  if (itemIndex === -1) {
    // If the item is not found, add it to the end of a new array
    return list.concat(item)
  }
  // If the item is found, create a new array and remove the item
  const newList = [...list]
  newList.splice(itemIndex, 1) // Remove 1 element at itemIndex
  return newList
}
