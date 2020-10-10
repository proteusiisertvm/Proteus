//database
var firebaseConfig = {
  apiKey: "AIzaSyApNi5rYeVsVkyzs_URaNRISwRu8TXdNZM",
  authDomain: "proteus-blog-7bf97.firebaseapp.com",
  databaseURL: "https://proteus-blog-7bf97.firebaseio.com",
  projectId: "proteus-blog-7bf97",
  storageBucket: "proteus-blog-7bf97.appspot.com",
  messagingSenderId: "195466704947",
  appId: "1:195466704947:web:95e707ea051c47f9a98b46",
  measurementId: "G-P8VG30RTYF"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();

var ref = database.ref('blogposts');

ref.on('value', succ, fail){

}
//if value retrieval is success
function succ(data){
//set text value
  console.log(data.val());
}
//if value retrieval fails
function fail(data){
//set to 0 no need to throw error
  console.log("error");
}

//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
