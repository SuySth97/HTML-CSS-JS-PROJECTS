let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener("input", function () {
  let c = this.value;
  let fh = (c * 9 / 5) + 32;
  if (!Number.isInteger(fh)) {
    fh = fh.toFixed(3);
  }
  fah.value = fh;
});

fah.addEventListener("input", function () {
  let f = this.value;
  let cl = (f - 32) * 5 / 9;
  if (!Number.isInteger(cl)) {
    cl = cl.toFixed(3);
  }
  cel.value = cl;
});