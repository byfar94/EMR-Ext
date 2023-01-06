import { formatDistanceToNowStrict, daysToWeeks } from "date-fns";
import "./popup.css";
//factory function to create elements
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

//DOM elements
let doiContain = elFactory("div", "doi-contain");
let btnDOI = elFactory("button", "DOI-button", "DOI");
let pInjury = elFactory("p", "injury-p", "");

let dosContain = elFactory("div", "dos-contain");
let btnDOS = elFactory("button", "DOS-button", "DOS");
let pSurgery = elFactory("p", "Surgery-p", "");

//Appends DOM elements to popup
function createPop() {
  document.body.appendChild(doiContain);
  doiContain.appendChild(btnDOI);
  doiContain.appendChild(pInjury);

  document.body.appendChild(dosContain);
  dosContain.appendChild(btnDOS);
  dosContain.appendChild(pSurgery);
}
createPop();

btnDOI.addEventListener("click", requestDOI);
function requestDOI() {
  chrome.tabs.query({ active: true, currentWindow: true }, gotTabs);

  function gotTabs(tabs) {
    console.log("Sent from pop up to content script");
    let msg = {
      txt: "get-DOI",
    };
    chrome.tabs.sendMessage(tabs[0].id, msg, function (response) {
      console.log(response.date);
      let doiString = `${response.date.toString()}`;
      let doiModDate = doiString.replace(/,/g, ", ");
      console.log(doiModDate);
      let doiInterval = formatDistanceToNowStrict(new Date(doiModDate), {
        unit: "day",
      });
      let doiNumOnly = doiInterval.replace(/[^0-9]/g, "");
      let doiWeeksInterval = daysToWeeks(doiNumOnly);
      console.log(doiNumOnly);
      pInjury.innerText = `${doiWeeksInterval} weeks`;
    });
  }
}

btnDOS.addEventListener("click", requestDOS);
function requestDOS() {
  chrome.tabs.query({ active: true, currentWindow: true }, gotTabs);

  function gotTabs(tabs) {
    console.log("Sent from pop up to content script");
    let msg = {
      txt: "get-DOS",
    };
    chrome.tabs.sendMessage(tabs[0].id, msg, function (response) {
      console.log(response.date);
      let dosString = `${response.date.toString()}`;
      let dosModDate = dosString.replace(/,/g, ", ");
      console.log(dosModDate);
      let dosInterval = formatDistanceToNowStrict(new Date(dosModDate), {
        unit: "day",
      });
      let dosNumOnly = dosInterval.replace(/[^0-9]/g, "");
      let dosWeeksInterval = daysToWeeks(dosNumOnly);
      console.log(dosNumOnly);
      pSurgery.innerText = `${dosWeeksInterval} weeks`;
    });
  }
}
