const image = document.querySelector("img"),
      input = document.querySelector("input"),
      button = document.querySelector("button"),
      api = `https://api.qrserver.com/v1/`,
      api2 = `create-qr-code/?size=160x160&data=`;

button.addEventListener("click", () => {
    image.src = `${api}${api2}${input.value}`
});