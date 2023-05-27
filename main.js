// выбираем все квадраты
var squares = document.querySelectorAll('.square');

// выбираем кнопку
var button = document.querySelector('button');

// функция для генерации случайного цвета
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// обработчик события для кнопки
button.addEventListener('click', function() {
  // для каждого квадрата меняем цвет
  squares.forEach(function(square) {
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
  });
});
