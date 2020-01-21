var coll = document.getElementsByClassName("collapsible");
var collUnit = document.getElementsByClassName("collapsible-unit");
var collCrit = document.getElementsByClassName("collapsible-crit");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

for (let i = 0; i < collUnit.length; i++) {
  collUnit[i].addEventListener("click", function() {
    this.classList.toggle("active-unit");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

for (let i = 0; i < collCrit.length; i++) {
  collCrit[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}