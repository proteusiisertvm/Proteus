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

//fetches likes
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

//toggles liked/unliked
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

//callback function to return boolean (true=liked, false=not liked)
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

//to be completed

//do for every button
//blog post 1
getLikesOnButton("0001");
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

//blog post 2
getLikesOnButton("0002");
checkLiked("0002", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0002button").addEventListener("click", function(){
  updateLikes("0002");
});

//blog post 3
getLikesOnButton("0003");
checkLiked("0003", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0003button").addEventListener("click", function(){
  updateLikes("0003");
});

//blog post 4
getLikesOnButton("0004");
checkLiked("0004", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0004button").addEventListener("click", function(){
  updateLikes("0004");
});

//blog post 5
getLikesOnButton("0005");
checkLiked("0005", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0005button").addEventListener("click", function(){
  updateLikes("0005");
});

//blog post 6
getLikesOnButton("0006");
checkLiked("0006", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0006button").addEventListener("click", function(){
  updateLikes("0006");
});

//blog post 7
getLikesOnButton("0007");
checkLiked("0007", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0007button").addEventListener("click", function(){
  updateLikes("0007");
});

//blog post 8
getLikesOnButton("0008");
checkLiked("0008", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0008button").addEventListener("click", function(){
  updateLikes("0008");
});

//blog post 9
getLikesOnButton("0009");
checkLiked("0009", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0009button").addEventListener("click", function(){
  updateLikes("0009");
});

//blog post 10
getLikesOnButton("0010");
checkLiked("0004", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0010button").addEventListener("click", function(){
  updateLikes("0010");
});

//blog post 11
getLikesOnButton("0011");
checkLiked("0011", function(boo){
  if (boo){
    //set to liked heart
  }
  else{
    //set to unliked heart
  }
});
document.getElementById("b0011button").addEventListener("click", function(){
  updateLikes("0011");
});



//darkmode
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
