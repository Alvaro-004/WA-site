const LINKS = {
  AGENDAMENTO: "https://wa.me/qr/RZREFPGKWXAJC1",
};

document.querySelectorAll(".btn-agendar").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = LINKS.AGENDAMENTO;
  });
});
