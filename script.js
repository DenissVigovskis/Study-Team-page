window.addEventListener("load", () => {
alert("Hello! 👋Welcome to our group page!")
})
const btnToggle = document.querySelector("#btnToggleTheme");
btnToggle.addEventListener("click",() => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    sessionStorage.setItem("prefersDark", isDark);
});
if (sessionStorage.getItem ("prefersDark") === "true") {
    document.body.classList.add("dark");
}
const btnSurprise = document.querySelector("#btnSurprise");
const factBox = document.querySelector("#random-fact");
btnSurprise.addEventListener("click", () => 
    {
    const lis = document.querySelectorAll(".user-fun-facts li, .user-fun-facts p");
    const facts = [...lis].map(li => li.textContent.trim()).filter(Boolean);
    if (facts.length === 0) {
        factBox.textContent= "No facts to show.";
        return;
    }
    const i = Math.floor(Math.random() * facts.length);
    factBox.textContent = facts[i];
    factBox.style.display = "inline-block";
});
