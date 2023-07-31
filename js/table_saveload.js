function saveData(data) {
  localStorage.setItem('tableData', JSON.stringify(data))
}

function loadData() {
  let raw =  localStorage.getItem('tableData')
  if (raw) tableData = JSON.parse(raw)
}


export default {
  saveData,
  loadData
}