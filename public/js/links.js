const LINKS = {
  AGENDAMENTO:
    "https://api.whatsapp.com/send/?phone=5591991124716&text=%EF%BF%BD+Ol%C3%A1%2C+vim+pelo+site.+Gostaria+de+conversar+sobre+servi%C3%A7os+automotivos&type=phone_number&app_absent=0",
};

document.querySelectorAll(".btn-agendar").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = LINKS.AGENDAMENTO;
  });
});
