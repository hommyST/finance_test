import data from './data.js'
import render from './table_render.js'

const addBtns = document.querySelectorAll('.add_btn')

addBtns.forEach(btn => {
  btn.addEventListener('click', addCell)
})

function addCell() {
  let column = +this.closest('td').dataset.column
  let sign = this.dataset.btn
  let dow = data.dict[column]
  
  let newDow = {
    val: 0,
    action: sign === 'minus' ? 'sub' : 'add'
  }

  let rowIndex = data.tableData.findIndex(row => !('val' in row[dow]))

  if (rowIndex >= 0) {
    data.tableData[rowIndex][dow] = newDow
  } else {
    let newRow = {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {},
    }

    newRow[dow] = newDow

    data.tableData.push(newRow)
  }

  render.renderData()

  if (rowIndex === -1) rowIndex = data.tableData.length - 1

  setTimeout(() => {
    document.querySelector(`[data-column="${column}"][data-row="${rowIndex}"]`).focus()
  }, 100)
}

export default {
  dom: 'DOM',
}