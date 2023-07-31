function renderData(data) {
  const tableBody = document.querySelector('tbody')

  data.forEach(row => {
    let tr = document.createElement('tr')

    let mn = createCell(row.monday?.val, row.monday?.action)
    let tu = createCell(row.tuesday?.val, row.tuesday?.action)
    let wd = createCell(row.wednesday?.val, row.wednesday?.action)
    let th = createCell(row.thursday?.val, row.thursday?.action)
    let fr = createCell(row.friday?.val, row.friday?.action)
    let sa = createCell(row.saturday?.val, row.saturday?.action)
    let sn = createCell(row.sunday?.val, row.sunday?.action)

    tr.append(mn, tu, wd, th, fr, sa, sn)
    tableBody.append(tr)
  })

  function createCell(val, css = '') {
    let cell = document.createElement('td')
    cell.innerText = val || ''
    let classCss = css

    if (css) {
      if (css === 'add') classCss = 'plus'
      else if (css === 'sub') classCss = 'minus'
    }

    cell.className = classCss

    return cell
  }

}


export default {
  renderData,
}