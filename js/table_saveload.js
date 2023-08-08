import data from './data.js'
import render from './table_render.js'


function saveData() {
  localStorage.setItem('tableData', JSON.stringify(data.tableData))
}

function loadData() {
  let raw = localStorage.getItem('tableData')
  if (raw) {
    data.tableData = JSON.parse(raw)
    render.renderData()
  }

}


export default {
  saveData,
  loadData
}