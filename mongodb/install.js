//TODO
//import mongodb
import updateMonthlySales from './core/updateMonthlySales'


updateMonthlySales(new ISODate("1970-01-01"));

db.bakesales.insertMany([
    { date: new ISODate("2018-12-01"), item: "Cake - Chocolate", quantity: 2, amount: new NumberDecimal("60") },
    { date: new ISODate("2019-01-28"), item: "Cake - Chocolate", quantity: 3, amount: new NumberDecimal("90") },
    { date: new ISODate("2019-02-01"), item: "Cake - Red Velvet", quantity: 5, amount: new NumberDecimal("100") },
])

updateMonthlySales(new ISODate("2019-01-01"));