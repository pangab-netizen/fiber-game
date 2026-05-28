const socket = io();

socket.on("players", (count) => {

document.getElementById("playerCount").innerHTML =
"Player Online: " + count;

});

const questions = [

{
question:"Apa fungsi OTDR?",
answers:[
"Mencari gangguan fiber",
"Memotong kabel",
"Menyambung fiber",
"Mengukur listrik"
],
correct:0
},

{
question:"Alat untuk menyambung fiber optik adalah?",
answers:[
"Splicer",
"Router",
"Switch",
"LAN Tester"
],
correct:0
},

{
question:"Power Meter digunakan untuk?",
answers:[
"Mengukur sinyal optik",
"Memotong kabel",
"Mencari internet",
"Menyambung fiber"
],
correct:0
},

{
question:"Cleaver digunakan untuk?",
answers:[
"Mengukur listrik",
"Memotong fiber",
"Menghubungkan WiFi",
"Menyambung kabel"
],
correct:1
},

{
question:"Apa fungsi Stripper Core?",
answers:[
"Mengukur sinyal",
"Mengupas core",
"Menyambung fiber",
"Memotong tiang"
],
correct:1
},

{
question:"Apa warna core pada urutan 117?",
answers:[
"Merah",
"Biru",
"Kuning",
"Hijau"
],
correct:2
},

{
question:"Berapa konversi dari 1 Watt ke dBm?",
answers:[
"10 dBm",
"20 dBm",
"30 dBm",
"40 dBm"
],
correct:2
},

{
question:"Pada panjang kabel fiber optik 10KM, attenuation 0.35dB/KM, splice 10 dengan loss 0.05dB/splice, dan konektor loss 0.75dB sebanyak 2 konektor, berapa link budget?",
answers:[
"4.5 dBm",
"5.5 dBm",
"6.0 dBm",
"7.2 dBm"
],
correct:1
},

{
question:"Penurunan intensitas sinyal yang mengurangi jarak jangkau fiber optik disebut?",
answers:[
"Refleksi",
"Dispersi",
"Redaman",
"Noise"
],
correct:2
},

{
question:"Apa fungsi Patchcord pada fiber optik?",
answers:[
"Menghubungkan perangkat FO",
"Mengukur sinyal",
"Memotong kabel",
"Menyambung core"
],
correct:0
}

];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question").innerHTML =
"SOAL " + (currentQuestion + 1) + " / " + questions.length +
"<br><br>" + q.question;

const answersDiv =
document.querySelector(".answers");

answersDiv.innerHTML = "";

q.answers.forEach((answer,index)=>{

const button = document.createElement("button");

button.innerHTML = answer;

button.onclick = ()=>checkAnswer(index);

answersDiv.appendChild(button);

});

}

function checkAnswer(selected){

const q = questions[currentQuestion];

const buttons =
document.querySelectorAll(".answers button");

buttons.forEach(btn=>btn.disabled = true);

if(selected === q.correct){

buttons[selected].style.background =
"green";

document.getElementById("result").innerHTML =
"✅ Jawaban Benar";

score += 100;

}else{

buttons[selected].style.background =
"red";

buttons[q.correct].style.background =
"green";

document.getElementById("result").innerHTML =
"❌ Jawaban Salah";

}

setTimeout(()=>{

currentQuestion++;

if(currentQuestion < questions.length){

document.getElementById("result").innerHTML =
"";

loadQuestion();

}else{

showFinalResult();

}

},1500);

}

function showFinalResult(){

let grade = "";

if(score >= 900){

grade = "🏆 MASTER FIBER OPTIK";

}else if(score >= 700){

grade = "🥇 TEKNISI FIBER";

}else if(score >= 500){

grade = "🥈 TEKNISI JUNIOR";

}else{

grade = "🥉 SISWA MAGANG";

}

document.querySelector(".container").innerHTML = `

<h1>Quiz Selesai 🎉</h1>

<h2>Score Akhir</h2>

<h1>${score}</h1>

<h2>${grade}</h2>

<button onclick="location.reload()">
Main Lagi
</button>

`;

}

loadQuestion();