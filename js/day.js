var mydate=new Date() 
var year=mydate.getYear() 
if (year < 1000) year+=1900 
var day=mydate.getDay() 
var month=mydate.getMonth() 
var daym=mydate.getDate() 
if (daym<10) 
daym="0"+daym 
var dayarray=new Array("Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятница","Субота") 
var montharray=new Array("січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня") 
document.write(""+dayarray[day]+", "+daym+" "+montharray[month]+" "+year+" року") 