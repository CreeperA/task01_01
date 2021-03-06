const fp=require('lodash/fp')
//horsepower 马力, dollar_value 价格,in_stock 库存
const cars=[
    {
        name:'Ferrari FF',
        horsepower:660,
        dollar_value:700000,
        in_stock:true
    },
    {
        name:'Spyker c12 Zagato',
        horsepower:650,
        dollar_value:648000,
        in_stock:false
    } ,
    {
        name:'Jaguar XKR-S',
        horsepower:550,
        dollar_value:132000,
        in_stock:false
    },
    {
        name:'Audi R8',
        horsepower:525,
        dollar_value:114200,
        in_stock:false
    },
    {
        name:'Aston Martin One-77',
        horsepower:750,
        dollar_value:1850000,
        in_stock:true
    },
    {
        name:'Pagani Huayra',
        horsepower:700,
        dollar_value:1300000,
        in_stock:false
    }
]

//练习1
let lastStock = fp.flowRight(fp.prop('in_stock'),fp.last);

//练习2
let firstName = fp.flowRight(fp.prop('name'),fp.first);

//练习3
let _average = (xs) =>{
    return fp.reduce(fp.add,0,xs);
}
let averageDollar = fp.flowRight(_average,fp.map(fp.prop('dollar_value')));

//练习4
let _undersource = fp.replace(/\W+/g,'_');
let nameChange = fp.flowRight(fp.map(_undersource),fp.map(fp.prop('name')));