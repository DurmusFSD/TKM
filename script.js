const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image img");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    console.log("tıklandı")
    userResult.src = cpuResult.src = "tas.svg";
    result.textContent = "Bekleyiniz...";

    optionImages.forEach((image2, index2) => {
      if (index !== index2) {
        image2.parentElement.classList.remove("active");
      }
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      let imgSrc = e.target.src;
      userResult.src = imgSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["tas.svg", "kagit.svg", "makas.svg"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Berabere",
        PP: "Berabere",
        SS: "Berabere",
        RP: "Bilgisayar",
        PS: "Bilgisayar",
        SR: "Bilgisayar",
        RS: "Oyuncu",
        PR: "Oyuncu",
        SP: "Oyuncu",
      };

      let outcomeValue = outcomes[userValue + cpuValue];

      result.textContent =
        userValue === cpuValue ? "Berabere" : `${outcomeValue} Kazandı!!`;

    }, 2500);
  });
});
