"use strict";
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const lines = text.split("\n");
  //   console.log(lines);
  for (const line of lines) {
    const [firstW, secondW] = line.toLocaleLowerCase().trim().split("_");
    // console.log(firstW, secondW);
    const result = `${firstW}${secondW.replace(
      secondW[0],
      secondW[0].toLocaleUpperCase()
    )}`;
    console.log(result);
  }
});
