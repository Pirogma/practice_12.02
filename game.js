let location1 = 5
let location2 = 6
let location3 = 7
/*Создаем переменную currentShot*/
let currentShot
//создаем переменную, чтобы считать выстрелы
let shots = 0
//создаем переменную для количества попаданий hits
let hits = 0
//создаем переменную чтобы отслеживать потоплен или нет
let isSunk = false

while (isSunk === false) {
//получить координаты выстрела
currentShot = Number(prompt("Введите число от 0 до 9:"))
shots += 1

//сравнить координаты выстрела с координатами корабля
if (currentShot === location1 || currentShot === location2 || currentShot || location3) {
//если игрок попал, то увеличиваем счетчик попаданий на 1
hits +=1
// если количество попаданий равно 3, то меняем значение переменной isSunk на true и сообщаем о победе
if (hits === 3) {
isSunk = true
alert ("Победа!")
}
}
}

let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось " + shots + " выстрелов, чтобы потопить корабль. Ваш рейтинг: " + rating)
