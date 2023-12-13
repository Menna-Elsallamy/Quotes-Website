function randomText(){
    var Quotes = [
        { quote: "The best revenge is massive success.", author: "--Frank Sinatra" },
        { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "--Robert Frost" },
        { quote: "The only way to do great work is to love what you do.", author: "--Steve Jobs" },
        { quote: "أقصى درجات السعادة هو أن نجد من يحبنا فعلاً، يحبنا على ما نحن عليه، أو بمعنى أدق يحبنا برغم ما نحن عليه", author: "نجيب محفوظ--" },
        { quote: "من لا يرى الأحزان، لا يرى الفرح", author: "جبران خليل جبران--" },
        { quote: "لو لم يزدك البعد حبًا فأنت لم تُحبْ حقًا", author: "نزار قباني--" },
        { quote: "فكلما عظمت الأهداف .. طال الطريق", author: "نجيب محفوظ--" },
        { quote:"The only way to do great work is to love what you do.", author: "--Steve Jobs" },
        { quote:"The best way to predict the future is to create it.",author: "--Peter Drucker" },
        { quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",author: "--Winston Churchill" },
        { quote:"The only limit to our realization of tomorrow will be our doubts of today.",author: "--Franklin D. Roosevelt"},
        { quote:".الأمل ليس في انتظار شيء، بل في الاستعداد لكل شي",author: "جبران خليل جبران--"},
        { quote:".الأمل ليس في انتظار شيء، بل في الاستعداد لكل شي",author: "جبران خليل جبران--"},
        { quote:"التسامح هو أعلى درجات القوة",author: "غاندي--"},

      ];
      
var random=Math.floor(Math.random()*Quotes.length);
var randomQuote=Quotes[random].quote;
var randomAuthor=Quotes[random].author;
// alert(userNames[random]);
// console.log(randomQuote+"/n"+randomAuthor);
// alert(randomQuote+"\n"+randomAuthor);
document.getElementById('randomid').innerHTML='<div class="randomquote">'+randomQuote+"<br/>"+randomAuthor+'</div>';

}

