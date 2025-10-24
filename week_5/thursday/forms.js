// Real-time validation
document.getElementById("demoName").addEventListener("input", function () {
  let msg = document.getElementById("nameMsg");
  if (this.value.length < 2) {
    msg.textContent = "❌ Too short";
    msg.style.color = "red";
  } else {
    msg.textContent = "✓";
    msg.style.color = "green";
  }
});

document.getElementById("demoEmail").addEventListener("input", function () {
  let msg = document.getElementById("emailMsg");
  if (!this.value.includes("@")) {
    msg.textContent = "❌ Missing @";
    msg.style.color = "red";
  } else {
    msg.textContent = "✓";
    msg.style.color = "green";
  }
});

function validateDemo() {
  let name = document.getElementById("demoName").value;
  let email = document.getElementById("demoEmail").value;
  let costume = document.getElementById("demoCostume").value;
  let result = document.getElementById("formResult");

  if (!name || !email || !costume) {
    result.className = "invalid";
    result.textContent = "Please fill in all required fields!";
  } else {
    result.className = "valid";
    result.innerHTML = `🎃 Success! ${name} is coming as a ${costume}!`;
  }
  result.style.display = "block";
}
