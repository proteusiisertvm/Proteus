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
  var bp = database.ref('blogposts/blog'+bpid+'/likes_count');
  var templikes = 0;
  bp.on('value', snap => {
    templikes = snap.val();
    //console.log(snap.val());
    document.getElementById("blog"+bpid+"counter").innerText = templikes;
  });
  //for debugging purposes
  return templikes;
}

//if local storage doesnt have key
if (localStorage.getItem("likey")===null){
  //generate key
  //console.log("run");
  var acc = firebase.database().ref().child('Users').push().getKey();
  var updates={};
  updates[acc]="";
  firebase.database().ref('Users/').push(updates);
  localStorage.setItem("likey", acc);
}

//for all buttons
getLikesOnButton("0001");
getLikesOnButton("0002");


function updateLikes(bpid){
  var dbRef= firebase.database().ref("/blogposts/blog"+bpid+'/likes');
  checkLiked(bpid, function(boo){
    if(boo){
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) - 1;
      });
      //console.log("removing");
      //set to unliked heart
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/'+localStorage["likey"]).remove();
    }
    else{
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) + 1;
      });
      var updates = {};
      updates[localStorage["likey"]]="";
      //set to liked heart
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/').update(updates);
    }
  });
}

//do for every button
checkLiked("0001", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});



document.getElementById("b0001button").addEventListener("click", function(){
  updateLikes("0001");
});


function checkLiked(bpid, callback){
  var boo;
  var bp = firebase.database().ref("/blogposts/blog"+bpid+"/likes/").child(localStorage["likey"]);
  bp.once("value", snap => {
    var obj = snap.val();
    if (obj === null){
      //console.log("not liked");
      boo = false;
      //set to unclicked heart

      callback(boo);
    }
    else{
      //console.log("liked");
      boo= true;
      //set to clicked heart

      callback(boo);
    }
  });
}

//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
