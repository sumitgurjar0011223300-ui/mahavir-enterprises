const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

const whatsappNumber = "919867893670";
document.querySelectorAll(".whatsapp-form").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const lines = [`Hello MAHAVIR ENTERPRISES,`, `Enquiry: ${form.dataset.formTitle}`, ""];
    new FormData(form).forEach((value, key) => {
      if (String(value).trim()) lines.push(`${key}: ${value}`);
    });
    lines.push("", "Please contact me regarding this enquiry.");
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
