import data from './js/data.js'
import logick from './js/logick.js'
import saveload from './js/table_saveload.js'
import render from './js/table_render.js'
import dom from './js/table_dom.js'


render.renderData(data.tableData)
for (let i = 0; i < 7; i++) logick.calcTotal(data.tableData, data.dict, i)