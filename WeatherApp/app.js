var city = "Bismarck"

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=22e2f82e26170ec0d643b93c332e4cb5", function(data) {
  var wind = data.wind.speed;
  var temp = Math.floor(data.main.temp);
  var humidity = data.main.humidity;
  var weather = data.weather[0].main;
  
  $('.wind-num').append(wind);
  $('.weather').append(weather);
  $('.temp-num').append(temp + '&#176;F');
  $('.humidity-num').append(humidity + '%');
  
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const date = new Date();
  
  const currentMonth = months[date.getMonth()];
  const currentDay = date.getDate()
  const todaysDate = `Today, ${currentMonth} ${currentDay}`
  
  $('.todays-date').append(todaysDate) 
  
  var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
  $('.icon').attr('src', icon);
  $('.icon').attr('alt', weather);
})