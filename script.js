function setLang(btn, sectionPrefix) {
  const parent = btn.closest("div");
  if (!parent) return;

  parent.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const lang = btn.textContent.trim().toUpperCase(); 

  const blockES = document.getElementById(`${sectionPrefix}-ES`);
  const blockEN = document.getElementById(`${sectionPrefix}-EN`);

  if (blockES && blockEN) {
    if (lang === 'ES') {
      blockES.classList.add('active');
      blockEN.classList.remove('active');
    } else if (lang === 'EN') {
      blockEN.classList.add('active');
      blockES.classList.remove('active');
    }
  }
}

function guardarReflexion() {
  const txtElement = document.getElementById("reflexionTexto");
  const alertaElement = document.getElementById("reflexionGuardada");
  
  if (txtElement && txtElement.value.trim() !== "") {
    // Mostrar mensaje verde de éxito
    alertaElement.style.display = "block";
    // Limpiar el cuadro de texto
    txtElement.value = "";
    
    setTimeout(() => {
      alertaElement.style.display = "none";
    }, 3000);
  }
}

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";
  
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});