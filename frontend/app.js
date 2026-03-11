const SUPABASE_URL = "https://szofzuiydjkycnjctrpk.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6b2Z6dWl5ZGpreWNuamN0cnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDcyMDEsImV4cCI6MjA4ODgyMzIwMX0.sQXtcF3SwCatyoL4yzNO4uNMqQ7ZX3stHR-xklbQ_0Q";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
async function checkUser() {
  const { data: {user} } = await supabaseClient.auth.getUser();

  if (user) {
    window.location.href = "dashboard.html";
  }
}
checkUser();

async function login() {

  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:5500/dashboard.html" 
    }
  });

  if (error) {
    console.error(error);
  }

}

document.getElementById("login").onclick = login;