function calcTotal(data, dictionary, column = 0) {
  const allTotalEl = document.querySelectorAll('.total_cell')
  let total = data.reduce((t, item) => {
    let val = item[dictionary[column]]?.val || 0
    t += val
    return t
  }, 0)
  
  allTotalEl[column].innerText = total
}

export default {
  calcTotal,
}