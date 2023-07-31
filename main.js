import saveload from './js/table_saveload.js'
import render from './js/table_render.js'
import dom from './js/table_dom.js'

let tableData = [
  {
    monday: { val: 20, action: 'add' },
    tuesday: { val: 888, action: 'add' },
    wednesday: { val: 300, action: 'sub' },
    thursday: { val: 2000, action: 'add' },
    friday: { val: 46, action: 'add' },
    saturday: { val: 77, action: 'add' },
    sunday: { val: 8000, action: 'add' },
  },
  {
    monday: { val: 9990, action: 'add' },
    tuesday: {},
    wednesday: { val: 300, action: 'sub' },
    thursday: { val: 2000, action: 'add' },
    friday: { val: 46, action: 'add' },
    saturday: { val: 77, action: 'add' },
    sunday: { val: 8000, action: 'add' },
  },
  {
    monday: { val: 8000, action: 'add' },
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  },
]

render.renderData(tableData)