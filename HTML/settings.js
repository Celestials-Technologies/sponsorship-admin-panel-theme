let coinImage = document.getElementById("coin-img");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  coinImage.src = URL.createObjectURL(this.files[0]);
};

function removeCoinImage() {
  coinImage.src = "./src/images/upload.png";
  inputFile.value = "";
}