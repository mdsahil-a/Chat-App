    const bio=document.querySelector("#bio");
    const p_name=document.querySelector("#profileName");

    const edit_button=document.querySelector('#edit');
    const edit_menu=document.querySelector(".edit_menu");
    const change_button=document.querySelector("#change_button");
     
edit_button.addEventListener('click',()=>{
    edit_menu.classList.toggle("hidden");

})






const currentPic=document.querySelector("#currentPic");

change_button.addEventListener('click', async (event)=>{


//     change_button.addEventListener("click", async (event) => {
//   event.preventDefault();

//   const fileInput = document.querySelector("#fileInput");
//   const selectedFile = fileInput.files[0];

//   if (!selectedFile) {
//     alert("Please select a file");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("profilePic", selectedFile);

//   const token = localStorage.getItem("token");

//   try {
//     const response = await axios.post(
//       "http://localhost:3000/api/auth/profile-update",
//       formData,
//       {
//         headers: {
//           Authorization: token,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     alert(response.data.message);
//     edit_menu.classList.add("hidden");
//     currentPic.src = response.data.user.profilePic;
//   } catch (err) {
//     console.error(err);
//     alert("Failed to update profile");
//   }
// });

// event.preventDefault();



// const profilePic=document.querySelector("#fileInput");

// const selectedFile=profilePic.files[0];


// if(!selectedFile){
//     alert("Please select a file");
//     return ;
// }


// const formData=new FormData();
// formData.append("profilePic",selectedFile);




// const token=localStorage.getItem("token");
// const response=await axios.post("http://localhost:3000/api/auth/profile-update",formData,{headers:{ Authorization: token }});






// const pname=document.querySelector("#p_name").value;
// const bio_p=document.querySelector("#p_bio").value;


// bio.textContent=bio_p;

// p_name.textContent=pname;
// edit_menu.classList.add('hidden');

        })