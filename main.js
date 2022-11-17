function ageClassification(num) {
  return num > 0
    ? num > 24
      ? num > 44
        ? num > 65
          ? num > 75
            ? num > 90
              ? num > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}

console.log("-1 :", ageClassification(-1)); // -1 : null

console.log("5 :", ageClassification(5)); // 5 : детский возраст

console.log("34 :", ageClassification(34)); // 34 : молодой возраст

console.log("50 :", ageClassification(50)); // 50 : средний возраст

console.log("65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст

console.log("80 :", ageClassification(80)); // 80 : старческий возраст

console.log("110 :", ageClassification(110)); // 110 : долгожители

console.log("130 :", ageClassification(130)); // 130 : null
