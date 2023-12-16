function calculateAge(dob='1990-01-01') {
    const today = new Date();
    const dobArray = dob.split("-");

    const dobYear = parseInt(dobArray[0]);
    const dobMonth = parseInt(dobArray[1]) - 1; // Months are zero-indexed
    const dobDay = parseInt(dobArray[2]);

    const birthDate = new Date(dobYear, dobMonth, dobDay);

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    const arrow_bracket = ">"

    return age;
  }