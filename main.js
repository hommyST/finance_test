import data from './js/data.js'
import logick from './js/logick.js'
import saveload from './js/table_saveload.js'
import render from './js/table_render.js'
import dom from './js/table_dom.js'


render.renderData(data.tableData)
for (let i = 0; i < 7; i++) logick.calcTotal(data.tableData, data.dict, i)


let alert = document.querySelector('.alert')
animation.onclick = () => {
  let state = JSON.parse(alert.dataset.visible || false)

  alert.dataset.visible = !state
}



let observer = new MutationObserver(closeAlert);
observer.observe(alert, {attributes: true});

function closeAlert(MutationRecord) {
  if (alert.dataset.visible === 'false') return
  let dur = getComputedStyle(alert)
    .getPropertyValue('--animation-duration');
  dur = parseInt(dur)

  setTimeout(() => {
    alert.dataset.visible = 'false'
  }, dur * 1000)
}