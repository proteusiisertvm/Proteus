/**
 * Links our JS to Firebase Realtime Database /proteus-blog-7bf97
 */
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

/**
 * Checks if the user's browser's localStorage has the variable likey. This variable is used to store a unique userid for firebase. If the variable is not present, it will generate a unique key specific to this browser.
 */
if (localStorage.getItem("likey")===null){
  var acc = firebase.database().ref().child('Users').push().getKey();
  var updates={};
  updates[acc]="";
  firebase.database().ref('Users/').push(updates);
  localStorage.setItem("likey", acc);
}

/**
 * To add a new blog post, just add its id to the array below! If a blogpost is not on the page, remember to remove it from the array. You do not need to change anything else in this file.
 */
var arr = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0010", "0011", "0012", "0013", "0014"];
arr.forEach(function initPost(bpid){
    //this is a loop that runs for every element in the array
  
    getLikesOnButton(bpid);
    //displays the number of likes

    checkLiked(bpid, function(boo){});
    //checks if the post had been liked previously

    document.getElementById("b"+bpid+"button").addEventListener("click", function(){
      updateLikes(bpid);
    });
    //this line is responsible for letting the buttons work after being clicked
  }
);

/**
 * Checks the number of likes on the blogpost and displays it
 * @param {string} bpid - the blogid of the blogpost.
 * @returns {int} templikes - doesn't do anything as the code is asynchronous. Still useful for future debugging.
 */
function getLikesOnButton(bpid){
  var bp = database.ref('blogposts/blog'+bpid+'/likes_count');
  var templikes = 0;
  bp.on('value', snap => {
    templikes = snap.val();
    document.getElementById("blog"+bpid+"counter").innerText = templikes;
  });
  return templikes;
}


/**
 * This adds or removes likes on click. This is asynchronous programming. The firebase server will take some time to respond, and this can mess up normal synchronous code.
 * @param {string} bpid 
 * @returns {int}
 */
function updateLikes(bpid){
  var dbRef= firebase.database().ref("/blogposts/blog"+bpid+'/likes');
  checkLiked(bpid, function(boo){
    if(boo){
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) - 1;
      });
      document.getElementById("b"+bpid+"heart").style.color = "#000000";
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/'+localStorage["likey"]).remove();
    }
    else{
      firebase.database().ref("/blogposts/blog"+bpid+'/likes_count').transaction(function(value) {
        return (value || 0) + 1;
      });
      var updates = {};
      updates[localStorage["likey"]]="";
      document.getElementById("b"+bpid+"heart").style.color = "#FF0000";
      firebase.database().ref("/blogposts/blog"+bpid+'/likes/').update(updates);
    }
  });
}

/**
 * This is a callback function that will check if the user had liked the post before.
 * @param {string} bpid - stores blog id
 * @param {function(boolean)} callback(boo) - The code passed in this parameter will be run with the boolean boo as its parameter
 */
function checkLiked(bpid, callback){
  var boo;
  var bp = firebase.database().ref("/blogposts/blog"+bpid+"/likes/").child(localStorage["likey"]);
  bp.once("value", snap => {
    var obj = snap.val();
    if (obj === null){
      document.getElementById("b"+bpid+"heart").style.color = "#000000";
      boo = false;
      callback(boo);
    }
    else{
      document.getElementById("b"+bpid+"heart").style.color = "#FF0000";
      boo= true;
      callback(boo);
    }
  });
}

//for darkmode.js
const options = {
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();
