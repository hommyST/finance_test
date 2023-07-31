console.log('t1');

// 1. Строка ИТОГО - функционал (должна считать свой столбец)
// 2. Клик по кнопке + или - должен:
//    - найти свой столбец
//    - проверить нужно ли создавать новую строку (если нужно, то СОЗДАВАТЬ строку)
//    - создать в нужной ячейке инпут цифровой
//    - применить стили к нужной ячейке (красн или зел)
//    - перевести в только что созданный инпут фокус
// 3. Повесить событие на все АКТИВНЫЕ ячейки, по клику на ячейку нужно создать инпут в этой ячейки со старым значением




const tableData = [
  {
    monday: {val: 20, action: 'add'},
    tuesday: {val: 888, action: 'add'},
    wednesday: {val: 300, action: 'sub'},
    thursday: {val: 2000, action: 'add'},
    friday: {val: 46, action: 'add'},
    saturday: {val: 77, action: 'add'},
    sunday: {val: 8000, action: 'add'},
  },
  {
    monday: {val: 200, action: 'add'},
    tuesday: {},
    wednesday: {val: 300, action: 'sub'},
    thursday: {val: 2000, action: 'add'},
    friday: {val: 46, action: 'add'},
    saturday: {val: 77, action: 'add'},
    sunday: {val: 8000, action: 'add'},
  },
  {
    monday: {val: 8000, action: 'add'},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  },
]


let a = {
  monday: {val: 8000, action: 'add'},
  tuesday: {},
  wednesday: {},
  thursday: {},
  friday: {},
  saturday: {},
  sunday: {},
}