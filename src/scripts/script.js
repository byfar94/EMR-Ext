import "./content.css";
//<------------------------------DOI/DOS Section ---------------------------->
//get date of injury functions (will run when message is recieved via chrome adlistner) if the the patient presentation is open document.querySelector will be true and the function will return a DOI (which may be blank). If the patient presentation section is not open it will return "no DOI Section". These outputs will be used in if statements in chrome.runtime.onMessage.addListener to trigger one of three evenets.
function getDOI() {
  if (
    document.querySelector(
      "#root_subjective_patient_presentation_date_of_injury_onset"
    )
  ) {
    let dOI = document.querySelector(
      "#root_subjective_patient_presentation_date_of_injury_onset"
    );
    return dOI.value;
  } else {
    return "no DOI Section";
  }
}

function getDOS() {
  if (
    document.querySelector(
      "#root_subjective_patient_presentation_date_of_surgery"
    )
  ) {
    let dOS = document.querySelector(
      "#root_subjective_patient_presentation_date_of_surgery"
    );
    return dOS.value;
  } else {
    return "no DOS Section";
  }
}

//listener will triggger one of three events for each request (there are two different requests).[response type one example]: First being the DOI section DOM element exists on the page(Patient presentation is open) and the DOI DOM element had a date. This will send that date to popup.js. The second is the getDOI function returns no DOI section (the patient presentation is not open and therefore there is no DOM element) and will return a popup stating "open patient presentation". The third is if the DOI DOM element exists, but has not date this will return No DOI entered as dateofInjury variable is false. Reponse two is the same but for DOS.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //if DOI request is sent
  if (request.txt == "get-DOI") {
    console.log("recieved DOI");
    let dateofInjury = getDOI();
    console.log(dateofInjury);
    if (dateofInjury && dateofInjury != "no DOI Section") {
      sendResponse({ date: `${dateofInjury}` });
    } else if (dateofInjury == "no DOI Section") {
      alert("Open Patient Presentation");
      return;
    } else {
      alert("No DOI entered");
      return;
    }
  }

  //if DOI request is sent
  if (request.txt == "get-DOS") {
    console.log("recieved DOS");
    let dateofSurgery = getDOS();
    console.log(dateofSurgery);
    if (dateofSurgery && dateofSurgery != "no DOS Section") {
      sendResponse({ date: `${dateofSurgery}` });
    } else if (dateofSurgery == "no DOS Section") {
      alert("Open Patient Presentation");
      return;
    } else {
      alert("No DOS entered");
      return;
    }
  }
});

//<----------------------Counter Section--------------------------------------->
let elFactory = function (type, cls, inText) {
  let element = document.createElement(type);
  if (cls != undefined) {
    element.classList.add(cls);
  }
  if (inText != undefined) {
    element.innerText = inText;
  }
  return element;
};

let alertContain = elFactory("div", "alert-contain");
let alertInfo = elFactory("p", "alert-info", "Conflict!");

function appendAlert() {
  let reactDOM = document.querySelector("#react");
  reactDOM.append(alertContain);
  alertContain.append(alertInfo);
}
appendAlert();

//creates each counter
let counterFactory = function (count) {
  return {
    count,
  };
};
//counters
let lCounter = counterFactory(0);
let rCounter = counterFactory(0);

//event listener for main counter function
document.body.addEventListener("click", counterr);

//main Counter function
function counterr() {
  rCounter.count = 0;
  lCounter.count = 0;

  console.log(rCounter.count);
  console.log(lCounter.count);

  countSpan();
  countObjBoxes();
  countTrtSide();

  displayCount();
}

//runs through all span elements of the document and checks for if the innerText includes "right" or "left". If the inner text does include "right" or "left" a count will be added to the appropriate counter. The nested if statement will highlight the span component red if the opposite side it found (e.g. right or left) has a counter greater than one and the opposing side counter is greater than or equal to the side it found in the element.
function countSpan() {
  let spanElements = document.querySelectorAll("span");
  spanElements.forEach(function (span) {
    if (
      span.innerText.toLowerCase().includes("right") == true ||
      span.innerText.includes(" R ") == true
    ) {
      rCounter.count += 1;
      if (lCounter.count > 0 && lCounter.count >= rCounter.count) {
        span.style.color = "red";
      }
    } else if (
      span.innerText.toLowerCase().includes("left") == true ||
      span.innerText.includes(" L ") == true
    ) {
      lCounter.count += 1;
      if (rCounter.count > 0 && rCounter.count >= lCounter.count) {
        span.style.color = "red";
      } else {
        console.log("no L or R");
      }
    }
  });
}

//runs through all the elements with the class ".sc-jtRlXQ.eFAlaQ.pre-p". These elements innerText are where data points e.g. measurements are displayed. The elements id will be check for "right" or "left" and if the elements inner text has an input.
function countObjBoxes() {
  let objBoxes = document.querySelectorAll(".sc-jtRlXQ.eFAlaQ.pre-p");
  objBoxes.forEach(function (box) {
    if (box.id.includes("right") == true && box.innerText != "") {
      rCounter.count += 1;
      if (lCounter.count > 0 && lCounter.count >= rCounter.count) {
        box.style.color = "red";
      }
    } else if (box.id.includes("left") == true && box.innerText != "") {
      lCounter.count += 1;
      if (rCounter.count > 0 && rCounter.count >= lCounter.count) {
        box.style.color = "red";
      }
    } else {
      console.log("no L or R");
    }
  });
}

//detects if trtment side variable (w/ id of "root_subjective_patient_presentation_treatment_side") innerText is "Right" or "Left".
function countTrtSide() {
  let trtSide = document.querySelector(
    "#root_subjective_patient_presentation_treatment_side"
  );

  if (trtSide == true && trtSide.innerText == "Right") {
    rCounter.count += 1;
    if (lCounter.count > 0 && lCounter.count >= rCounter.count) {
      trtSide.style.color = "red";
    }
  } else if (trtSide == true && trtSide.innerText == "Left") {
    lCounter.count += 1;
    if (rCounter.count > 0 && rCounter.count >= lCounter.count) {
      trtSide.style.color = "red";
    }
  } else {
    console.log("No treatment side");
  }
}

function displayCount() {
  console.log(rCounter.count);
  console.log(lCounter.count);

  if (rCounter.count > 0 && lCounter.count > 0) {
    console.log("CONFLICT!!");
    alertContain.classList.add("show");
  } else {
    console.log("No Conflict noted");
    alertContain.classList.remove("show");
  }
}
