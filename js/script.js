function updatePrompt(){
  var h = document.getElementById("holiday").value || '[Holiday]';
  var locInput = document.getElementById("location").value || '[Location]';
  var s = document.getElementById("style").value || 'realistic';
  var m = document.getElementById("mood").value || 'festive lightning';
  var a = document.getElementById("aspect").value || 'ar 16:9';
  var e = document.getElementById("exclude").value || '';

  output.value = 'A beautiful ' + h + ' celebration at ' + locInput + ', in ' + s + ' style, with ' + m + ', ultra-high quality, cinematic lighting, 4K resolution, aspect ratio ' + a + ', ' + e + '.';


}

function resetForm(){
  document.getElementById("holiday").value = "";
  document.getElementById("location").value = "";
  document.getElementById("style").value = "";
  document.getElementById("mood").value = "";
  document.getElementById("aspect").value = "";
  document.getElementById("exclude").value = "";
  output.value = "";

}


function sendToChatGPT(){
  const url = "https://chat.openai.com/?q=" + encodeURIComponent(output.value);
  window.open(url, "_blank");
}

function copyForMidjourney(){
  output.select();
  document.execCommand("copy");
  alert("Prompt copied!");
}


function sendEmail(){
  var name = document.getElementById("cname").value;
  var email = document.getElementById("cemail").value;
  var message = document.getElementById("cmessage").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  var subject = "Contact Message from " + name;
  var body =
    "Name: " + name + "%0D%0A" +
    "Email: " + email + "%0D%0A%0D%0A" +
    "Message:%0D%0A" + message;

  window.location.href =
    "mailto:Rassbtanoli27@gmail.com" +
    "?subject=" + subject +
    "&body=" + body;
}



