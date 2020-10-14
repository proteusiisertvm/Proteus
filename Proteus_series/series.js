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

function getLikesOnButton(bpid){
  var bp = database.ref('blogposts/blog'+bpid+'/');
  var templikes = 0;
  bp.on('value', snap => {
    templikes = snap.val().likes;
    document.getElementById("blog"+bpid+"counter").innerText = templikes;
  });
  //for debugging purposes
  return templikes;
}

getLikesOnButton("0001");
getLikesOnButton("0002");

//boo = whether button is liked
/*
function updateLikes(bpid, boo){
  var bp = database.ref('blogposts/blog'+bpid+'/');
  bp.transaction(function(post){
    if(boo){
      bp.likes--;
    }
    else{
      bp.likes++;
    }
    return post;
  });
}

console.log(updateLikes("0001", false));
*/

//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
