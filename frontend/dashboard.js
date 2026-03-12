const SUPABASE_URL = "https://szofzuiydjkycnjctrpk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6b2Z6dWl5ZGpreWNuamN0cnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDcyMDEsImV4cCI6MjA4ODgyMzIwMX0.sQXtcF3SwCatyoL4yzNO4uNMqQ7ZX3stHR-xklbQ_0Q";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

async function initUser(){

  const { data:{ user } } = await supabaseClient.auth.getUser();

  if(!user){
    window.location.href="index.html";
    return;
  }

  document.getElementById("userEmail").innerText =
  "Logged in as: " + user.email;

  document.getElementById("profileName").innerText =
  user.user_metadata.full_name;

}

initUser();


document.getElementById("logout").onclick = async () => {

await supabaseClient.auth.signOut();

window.location.href="index.html";

};


document.getElementById("addMedicine").onclick = () => {

const name = document.getElementById("medicineName").value;

const time = document.getElementById("medicineTime").value;

const list = document.getElementById("medicineList");

const item = document.createElement("li");

item.innerHTML = name + " <span>" + time + "</span>";

list.appendChild(item);

};