const userData = [
  {
    userId: 1,
    userName: "Alice",
    birthYear: 1990,
    gender: "Female",
  },
  {
    userId: 2,
    userName: "Bob",
    birthYear: 1985,
    gender: "Male",
  },
  {
    userId: 3,
    userName: "Carol",
    birthYear: 2010,
    gender: "Female",
  },
  {
    userId: 4,
    userName: "David",
    birthYear: 1982,
    gender: "Male",
  },
  {
    userId: 5,
    userName: "Eve",
    birthYear: 1995,
    gender: "Female",
  },
  {
    userId: 6,
    userName: "Frank",
    birthYear: 1977,
    gender: "Male",
  },
  {
    userId: 7,
    userName: "Grace",
    birthYear: 1993,
    gender: "Female",
  },
  {
    userId: 8,
    userName: "Henry",
    birthYear: 1989,
    gender: "Male",
  },
  {
    userId: 9,
    userName: "Ivy",
    birthYear: 2000,
    gender: "Female",
  },
  {
    userId: 10,
    userName: "Jack",
    birthYear: 1980,
    gender: "Male",
  },
];

//Buttons
const checkEligibilityBtn = document.querySelector("#chkElig");
const idVerificationBtn = document.querySelector("#idElig");
const ageVerificationBtn = document.querySelector("#ageElig");
const voteBtn = document.querySelector("#voteBtn");
//Input Values
const idInput = document.getElementById("userId");
const ageInput = document.getElementById("ageVri");
//Pages
const introPage = document.querySelector(".intro");
const idPage = document.querySelector(".step-1");
const agePage = document.querySelector(".step-2");
const votePage = document.querySelector(".step-3");
const resultPage = document.querySelector(".step-4");

//HTML Page Text
const idMsg = document.getElementById("IdresultMessage");
const ageMsg = document.getElementById("ageresultMessage");
const voteMsg = document.querySelector("#candidateSelectMsg");
const candidate1Count = document.querySelector("#candidate1Count");
const candidate2Count = document.querySelector("#candidate2Count");
const candidate3Count = document.querySelector("#candidate3Count");

//Proceed Button
const IdProceedBtn = document.getElementById("idPageBtn");
const ageProceedBtn = document.getElementById("agePageBtn");
//Radio Buttons
const candidate1 = document.getElementById("candidate1");
const candidate2 = document.getElementById("candidate2");
const candidate3 = document.getElementById("candidate3");
const candidates = document.querySelectorAll('input[type="radio"]');
const select = document.querySelectorAll('input[type="candidate"]');
//Cureent Vote Counts
const candidate1Score = 50;
const candidate2Score = 80;
const candidate3Score = 40;

//Intro Page Button
checkEligibilityBtn.addEventListener("click", function () {
  introPage.style.display = "none";
  idPage.style.display = "block";
});

//ID VERIFICATION
idVerificationBtn.addEventListener("click", function () {
  //turn the user input to integer
  const userInput = parseInt(idInput.value);
  //use find method to search through the array
  const findUser = userData.find((user) => user.userId === userInput);

  if (findUser) {
    // Show the proceed button and clear any previous error message
    IdProceedBtn.style.display = "block";
    idMsg.textContent = "";
  } else {
    idMsg.textContent = "Invalid User ID. Please enter a valid ID.";
    IdProceedBtn.style.display = "none";
  }
});
//button function on to proceed to the next page if the ID id found
IdProceedBtn.addEventListener("click", function () {
  idPage.style.display = "none";
  agePage.style.display = "block";
});

//AGE VERIFICATION
ageVerificationBtn.addEventListener("click", function () {
  const userAge = parseInt(ageInput.value);
  //calculate users current age
  const ageLimit = 2023 - userAge;
  //check if the user is 18 years and above or not
  if (ageLimit >= 18) {
    // Check if user's birth year matches the record in userData
    const userInput = parseInt(idInput.value);
    //using find method to verify if the user birthyear provided matches the user database record
    const findUser = userData.find(
      (user) => user.userId === userInput && user.birthYear === userAge
    );
    if (findUser) {
      ageProceedBtn.style.display = "block";
      ageMsg.textContent = "";
    } else {
      //if birthyear does not match record
      ageMsg.textContent =
        "Your provided birth year does not match the record.";
      ageProceedBtn.style.display = "none";
    }
  } else {
    //if user is not up to 18
    ageMsg.textContent = `You are not Currently Eligible to Vote \n Your Current Age is (${ageLimit})`;
    ageProceedBtn.style.display = "none";
  }
});
//Proceed Button on Age Verification Page
ageProceedBtn.addEventListener("click", function () {
  agePage.style.display = "none";
  votePage.style.display = "block";
});

//Vote
//iterate through the candidate list to validate selection
candidates.forEach((candidate) => {
  candidate.addEventListener("change", function () {
    if (candidate.checked) {
      voteMsg.textContent = `You selected: ${candidate.value}`;
      voteBtn.classList.add("selected-vote");
    }
  });
});

voteBtn.addEventListener("click", function () {
  const selectedRadioButton = document.querySelector(
    'input[name="candidate"]:checked'
  );
  if (selectedRadioButton === candidate1) {
    increasecandidate1Score = candidate1Score + 1;
    voteBtn.style.display = "none";
    resultPage.style.display = "block";
    candidate1Count.textContent = `Atiku Abubakar = ${increasecandidate1Score}`;
    candidate2Count.textContent = `Peter Obi = ${candidate2Score}`;
    candidate3Count.textContent = `Bola Tinubu = ${candidate3Score}`;
  } else if (selectedRadioButton === candidate2) {
    increasecandidate2Score = candidate2Score + 1;
    voteBtn.style.display = "none";
    resultPage.style.display = "block";
    candidate1Count.textContent = `Atiku Abubakar = ${candidate1Score}`;
    candidate2Count.textContent = `Peter Obi = ${increasecandidate2Score}`;
    candidate3Count.textContent = `Bola Tinubu = ${candidate3Score}`;
  } else if (selectedRadioButton === candidate3) {
    increasecandidate3Score = candidate3Score + 1;
    voteBtn.style.display = "none";
    resultPage.style.display = "block";
    candidate1Count.textContent = `Atiku Abubakar = ${candidate1Score}`;
    candidate2Count.textContent = `Peter Obi = ${candidate2Score}`;
    candidate3Count.textContent = `Bola Tinubu = ${increasecandidate3Score}`;
  } else {
    voteMsg.textContent = "You have note selected Any Candidate";
  }
});
