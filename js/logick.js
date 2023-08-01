function calcTotal(data, dictionary, column = 0) {
  const allTotalEl = document.querySelectorAll('.total_cell')
  let total = data.reduce((t, item) => {
    let dow = item[dictionary[column]]
    let val = dow?.val || 0
    if (dow.action === 'add') t += val
    if (dow.action === 'sub') t -= val
    return t
  }, 0)
  
  
  allTotalEl[column].innerText = total
}

export default {
  calcTotal,
}