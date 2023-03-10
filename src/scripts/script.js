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
