function time() {
  const clock = document.querySelector("h2");

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  const brasilDate = formatter.format(date);
  clock.innerHTML = brasilDate;
}

time();

setInterval(time, 1000);
