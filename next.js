let day = 2;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  default: console.log("Invalid");
}

for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}