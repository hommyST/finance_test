import data from './data.js'
import logick from './logick.js'
import saveload from './table_saveload.js'


function renderData() {
  const tableBody = document.querySelector('tbody')
  let childrens = [...tableBody.children]

  childrens.forEach((ch, ind) => {
    if (ind > 1) ch.remove()
  })

  data.tableData.forEach((row, index) => {
    let tr = document.createElement('tr')
    tr.style.height = '32px'

    let mn = createCell(row.monday?.val, row.monday?.action, 0, index)
    let tu = createCell(row.tuesday?.val, row.tuesday?.action, 1, index)
    let wd = createCell(row.wednesday?.val, row.wednesday?.action, 2, index)
    let th = createCell(row.thursday?.val, row.thursday?.action, 3, index)
    let fr = createCell(row.friday?.val, row.friday?.action, 4, index)
    let sa = createCell(row.saturday?.val, row.saturday?.action, 5, index)
    let sn = createCell(row.sunday?.val, row.sunday?.action, 6, index)

    tr.append(mn, tu, wd, th, fr, sa, sn)
    tableBody.append(tr)
  })

  saveload.saveData()

  function createCell(val, css = '', column, row) {
    let cell = document.createElement('td')
    cell.dataset.column = column
    cell.dataset.row = row
    
    cell.innerText = val || ''
    let classCss = css

    if (css) {
      if (css === 'add') classCss = 'plus'
      else if (css === 'sub') classCss = 'minus'
    }

    cell.className = classCss

    if (val != null) {
      cell.contentEditable = 'true'
      cell.addEventListener('input', (ev) => {
        let newVal = ev.target.textContent
        let isNotOk = /[^0-9\.]/.test(newVal)

        if (isNotOk) {
          let alert = document.querySelector('.alert')
          alert.dataset.visible = 'true'
          newVal = 0
        } else newVal = parseFloat(ev.target.textContent)

        data.tableData[row][data.dict[column]].val = newVal

        logick.calcTotal(data.tableData, data.dict, column)
        saveload.saveData()
      })
    }
    
    return cell
  }

}


export default {
  renderData,
}