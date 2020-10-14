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

function getLikes(bpid){
  var bp = database.ref('blogposts/blog'+bpid+'/');
  var templikes = 0;
  bp.on('value', snap => {
    templikes = snap.val().likes;
  });
  return templikes;
}

console.log(getLikes("0001"));

//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
