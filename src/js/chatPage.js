
const search=document.getElementById("search");
const users=document.querySelector(".results");
const userList=document.querySelector(".user-list");
let token=localStorage.getItem("token");
const userName=document.querySelector(".name");
    const userInput=document.querySelector("#userInput");
    const chatHeader=document.querySelector("#chatHeader");
let userId;
 let i=0;

window.onload=async()=>{
  try{
    const response=await axios.post("http://localhost:3000/api/auth/checkAuth",{token});
userId=response.data._id;
userName.textContent=response.data.fullName;
  }catch(error){
    console.log(error.message);
  }
}

search.addEventListener("input",async()=>{
const name=document.querySelector("#search").value;
  try{

    const filteredUsers = chatUsers.filter(user =>
      user.fullName.toLowerCase().includes(name)

    );


  // const response=await axios.post("http://localhost:3000/api/friend/search",{name});

//  if(response.data.length==0){
//   users.style.display='none';
//  }


filteredUsers.forEach(user=>{
  users.innerHTML="";

const SearchedUserInfo=document.createElement("div");
SearchedUserInfo.innerHTML=`
<div class="searchedUserDetails">
<img src="../../public/avatar.jpeg" id="searchedUserProfile">
<span id="searchedUserName">${user.fullName}</span>
</div>
<button id="addFriend" onclick="selectUser('${user.email}')">Message</button>`;
SearchedUserInfo.classList.add("SearchedUserInfo");

users.appendChild(SearchedUserInfo);
    });
  users.style.display='block';

  }
  catch(error){
    console.log(error.message);
  }
})

const addUser=async(receiverId)=>{
  try{
    const response=await axios.post("http://localhost:3000/api/friend/send",{userId,receiverId});


userList.innerHTML=`
<div class="user active" onclick="switchUser('Alice', event)">
          <img src="../../public/avatar.jpeg" a0.lt="Alice">
          <span class="username">${response.data.fullName}</span>
        </div>
`
    
  }
  
  catch(error){
    console.log(error.message);

  }


}

   const chats = {

      Sahil: [{ sender: 'bot', text: 'Hey! This is Alice.' }],
      Jigyasa: [{ sender: 'bot', text: 'Yo! Bob here.' }],
      Charlie: [{ sender: 'bot', text: 'Hey! Charlie is online.' }]

    };

    const chatUsers=[
      {
fullName:"Md Sahil",
profilePic:"",
email:"mdsahil@gmail.com"
    },
      {
fullName:"Jigyasa Yadav",
profilePic:"",
email:"jigyasayadav@gmail.com",
profilePic:"../../public/jiggu.jpg"

    },
      {
fullName:"Jay kamati",
profilePic:"",
email:"jaykamati@gmail.com"
,
profilePic:"../../public/avatar.jpeg"
    },
      {
fullName:"Raju Mistri",
profilePic:"",
email:"rajumisti@gmail.com"
,
profilePic:"../../public/avatar.jpeg"
    },
      {
fullName:"Abhay mandal",
profilePic:"",
email:"abhaymandal@gmail.com"
,
profilePic:"../../public/avatar.jpeg"
    },
      {
fullName:"Saurav Jha",
profilePic:"",
email:"sauravjha@gmail.com"
,
profilePic:"../../public/avatar.jpeg"
    },
      {
fullName:"Dipesh Sahani",
profilePic:"",
email:"dipeshsahan@gmail.com"
,
profilePic:"../../public/avatar.jpeg"
    },
  ]


const selectUser=async(email)=>{
chatUsers.forEach(user=>{
if(user.email==email){

  userList.innerHTML+=`

           <div class="user-list" id="userList" onclick="showUser('${user.fullName}')">
        <div class="user active" onclick="switchUser('Alice', event)">
          <img src="${user.profilePic}" alt="Alice">
          <span class="username">${user.fullName}</span>
        </div>
        </div>
  `
}
 users.innerHTML="";
})



}

const showUser=(fullName)=>{
chatHeader.textContent=`Chat with ${fullName}`
}
   
  function sendMessage(){
   

     const chatBox = document.getElementById('chatBox');
     msg=userInput.value.trim();
     chatBox.innerHTML+=`
     <div class="message user">${msg}</div>
     `
     userInput.value="";
        setTimeout(() => {
      getMessage();
     }, 2500
    );
  }

  const chatWithJiggu=["hello","i am fine","have a good day"];

function getMessage(){

  chatBox.innerHTML+=`
     <div class="message bot">${chatWithJiggu[i]}</div>
     `
     i++;

  
}
