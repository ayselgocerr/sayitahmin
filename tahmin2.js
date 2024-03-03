// rasgele bir sayı üretmek için math.random() fonk kullanırız
//bu sayıyı 1-100 arasında bir tam sayıya dönüştürmek için
//Math.floor() fonk. kullanırız
//aklımızdaki sayı
var targetNumber = Math.floor(Math.random()*100);
var guess;

while(guess != targetNumber){
    guess = prompt("1 ile 100 arasında bir sayı tahmin edin");
     if(guess < targetNumber){
        alert("Daha yüksek bir sayı giriniz");

     }
     else if(guess > targetNumber){
        alert(" Daha dusuk bir sayı tahmin edin");
     }
     else{
        alert("tebrikler dogru sayı tahmin ettiniz");
     }
}