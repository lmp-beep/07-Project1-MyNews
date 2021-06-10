const usNews1 = document.querySelectorAll(".usNews1");
const usNews2 = document.querySelectorAll(".usNews2");
const unitedStatesNews = document.querySelectorAll(".unitedStatesNews");

const worldNews1 = document.querySelectorAll(".worldNews1");
const worldNews2 = document.querySelectorAll(".worldNews2");
const worldNews3 = document.querySelectorAll(".worldNews3");

const sportsNews1 = document.querySelectorAll(".sportsNews1");
const sportsNews2 = document.querySelectorAll(".sportsNews2");
const sportsNews3 = document.querySelectorAll(".sportsNews3");

const travelNews1 = document.querySelectorAll(".travelNews1");
const travelNews2 = document.querySelectorAll(".travelNews2");
const travelNews3 = document.querySelectorAll(".travelNews3");

const healthNews1 = document.querySelectorAll(".healthNews1");
const healthNews2 = document.querySelectorAll(".healthNews2");
const healthNews3 = document.querySelectorAll(".healthNews3");

$(document).ready(function () {
  console.log("ready!");
  usNewsAPI1();
  usNewsAPI2();
  unitedStatesNewsAPI();
  worldNewsAPI1();
  worldNewsAPI2();
  worldNewsAPI3();
  sportsNewsAPI1();
  sportsNewsAPI2();
  sportsNewsAPI3();
  travelNewsAPI1();
  travelNewsAPI2();
  travelNewsAPI3();
  healthNewsAPI1();
  healthNewsAPI2();
  healthNewsAPI3();

  //API KEY #1: VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR
  //API KEY #2: h1gbPIIsvahfSwOaxmKaqjKglHnssTIo

  // US NEWS ----------------------------------------------------------
  function usNewsAPI1() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestUSNews1 =
      "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestUSNews1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        const usNewsPhoto = document.getElementById("usNewsPhoto");
        usNewsPhoto.setAttribute("src", data.results[0].multimedia[0].url);
        usNews1[0].append(usNewsPhoto);
      });
  }

  function usNewsAPI2() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestUSNews2 =
      "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestUSNews2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        const usNewsHeadline = document.getElementById("usNewsHeadline");
        usNewsHeadline.innerHTML = data.results[0].title;
        usNews2[0].append(usNewsHeadline);

        const usNewsAbstract = document.getElementById("usNewsAbstract");
        usNewsAbstract.innerHTML = data.results[0].abstract;
        usNews2[0].append(usNewsAbstract);
      });
  }

  function unitedStatesNewsAPI() {
    const nyTimesAPIKey = "h1gbPIIsvahfSwOaxmKaqjKglHnssTIo";
    const requestUSNews =
      "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=" +
      nyTimesAPIKey;
    fetch(requestUSNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 1; i < unitedStatesNews.length; i++) {
          const unitedStatesNewsPhoto = document.createElement("img");
          unitedStatesNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          unitedStatesNews[i].append(unitedStatesNewsPhoto);
          unitedStatesNewsPhoto.setAttribute("width", "100%");

          const unitedStatesNewsHeadline = document.createElement("h7");
          unitedStatesNewsHeadline.innerHTML = data.results[i].title;
          unitedStatesNews[i].append(unitedStatesNewsHeadline);

          const unitedStatesNewsAbstract = document.createElement("h8");
          unitedStatesNewsAbstract.innerHTML = data.results[i].abstract;
          unitedStatesNews[i].append(unitedStatesNewsAbstract);
        }
      });
  }

  // WORLD NEWS ----------------------------------------------------------
  function worldNewsAPI1() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestWorldNews1 =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestWorldNews1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < worldNews1.length; i++) {
          const worldNewsPhoto = document.getElementById("worldNewsPhoto");
          worldNewsPhoto.setAttribute("src", data.results[i].multimedia[0].url);
          worldNews1[i].append(worldNewsPhoto);
        }
      });
  }

  function worldNewsAPI2() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestWorldNews2 =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestWorldNews2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < worldNews2.length; i++) {
          const worldNewsHeadline =
            document.getElementById("worldNewsHeadline");
          worldNewsHeadline.innerHTML = data.results[i].title;
          worldNews2[i].append(worldNewsHeadline);

          const worldNewsAbstract =
            document.getElementById("worldNewsAbstract");
          worldNewsAbstract.innerHTML = data.results[i].abstract;
          worldNews2[i].append(worldNewsAbstract);
        }
      });
  }

  function worldNewsAPI3() {
    const nyTimesAPIKey = "h1gbPIIsvahfSwOaxmKaqjKglHnssTIo";
    const requestWorldNews3 =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
      nyTimesAPIKey;
    fetch(requestWorldNews3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 1; i < worldNews3.length; i++) {
          const worldNews3Photo = document.createElement("img");
          worldNews3Photo.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          worldNews3[i].append(worldNews3Photo);
          worldNews3Photo.setAttribute("width", "100%");

          const worldNews3Headline = document.createElement("h7");
          worldNews3Headline.innerHTML = data.results[i].title;
          worldNews3[i].append(worldNews3Headline);

          const worldNews3Abstract = document.createElement("h8");
          worldNews3Abstract.innerHTML = data.results[i].abstract;
          worldNews3[i].append(worldNews3Abstract);
        }
      });
  }

  // SPORTS ----------------------------------------------------------
  function sportsNewsAPI1() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestSportsNews1 =
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestSportsNews1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < sportsNews1.length; i++) {
          const sportsNewsPhoto = document.getElementById("sportsNewsPhoto");
          sportsNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          sportsNews1[i].append(sportsNewsPhoto);
        }
      });
  }

  function sportsNewsAPI2() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestSportsNews2 =
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestSportsNews2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < sportsNews2.length; i++) {
          const sportsNewsHeadline =
            document.getElementById("sportsNewsHeadline");
          sportsNewsHeadline.innerHTML = data.results[i].title;
          sportsNews2[i].append(sportsNewsHeadline);

          const sportsNewsAbstract =
            document.getElementById("sportsNewsAbstract");
          sportsNewsAbstract.innerHTML = data.results[i].abstract;
          sportsNews2[i].append(sportsNewsAbstract);
        }
      });
  }

  function sportsNewsAPI3() {
    const nyTimesAPIKey = "h1gbPIIsvahfSwOaxmKaqjKglHnssTIo";
    const requestSportsNews3 =
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" +
      nyTimesAPIKey;
    fetch(requestSportsNews3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 1; i < sportsNews3.length; i++) {
          const sportsNews3Photo = document.createElement("img");
          sportsNews3Photo.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          sportsNews3[i].append(sportsNews3Photo);
          sportsNews3Photo.setAttribute("width", "100%");

          const sportsNews3Headline = document.createElement("h7");
          sportsNews3Headline.innerHTML = data.results[i].title;
          sportsNews3[i].append(sportsNews3Headline);

          const sportsNews3Abstract = document.createElement("h8");
          sportsNews3Abstract.innerHTML = data.results[i].abstract;
          sportsNews3[i].append(sportsNews3Abstract);
        }
      });
  }

  // TRAVEL ----------------------------------------------------------
  function travelNewsAPI1() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestTravelNews1 =
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestTravelNews1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < travelNews1.length; i++) {
          const travelNewsPhoto = document.getElementById("travelNewsPhoto");
          travelNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          travelNews1[i].append(travelNewsPhoto);
        }
      });
  }

  function travelNewsAPI2() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestTravelNews2 =
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestTravelNews2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < travelNews2.length; i++) {
          const travelNewsHeadline =
            document.getElementById("travelNewsHeadline");
          travelNewsHeadline.innerHTML = data.results[i].title;
          travelNews2[i].append(travelNewsHeadline);

          const travelNewsAbstract =
            document.getElementById("travelNewsAbstract");
          travelNewsAbstract.innerHTML = data.results[i].abstract;
          travelNews2[i].append(travelNewsAbstract);
        }
      });
  }

  function travelNewsAPI3() {
    const nyTimesAPIKey = "h1gbPIIsvahfSwOaxmKaqjKglHnssTIo";
    const requestTravelNews3 =
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=" +
      nyTimesAPIKey;
    fetch(requestTravelNews3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 1; i < travelNews3.length; i++) {
          const travelNews3Photo = document.createElement("img");
          travelNews3Photo.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          travelNews3[i].append(travelNews3Photo);
          travelNews3Photo.setAttribute("width", "100%");

          const travelNews3Headline = document.createElement("h7");
          travelNews3Headline.innerHTML = data.results[i].title;
          travelNews3[i].append(travelNews3Headline);

          const travelNews3Abstract = document.createElement("h8");
          travelNews3Abstract.innerHTML = data.results[i].abstract;
          travelNews3[i].append(travelNews3Abstract);
        }
      });
  }

  // HEALTH ----------------------------------------------------------
  function healthNewsAPI1() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestHealthNews1 =
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestHealthNews1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < healthNews1.length; i++) {
          const healthNewsPhoto = document.getElementById("healthNewsPhoto");
          healthNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          healthNews1[i].append(healthNewsPhoto);
        }
      });
  }

  function healthNewsAPI2() {
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    const requestHealthNews2 =
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestHealthNews2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 0; i < healthNews2.length; i++) {
          const healthNewsHeadline =
            document.getElementById("healthNewsHeadline");
          healthNewsHeadline.innerHTML = data.results[i].title;
          healthNews2[i].append(healthNewsHeadline);

          const healthNewsAbstract =
            document.getElementById("healthNewsAbstract");
          healthNewsAbstract.innerHTML = data.results[i].abstract;
          healthNews2[i].append(healthNewsAbstract);
        }
      });
  }

  function healthNewsAPI3() {
    const nyTimesAPIKey = "h1gbPIIsvahfSwOaxmKaqjKglHnssTIo";
    const requestHealthNews3 =
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" +
      nyTimesAPIKey;
    fetch(requestHealthNews3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i = 1; i < healthNews3.length; i++) {
          const healthNews3Photo = document.createElement("img");
          healthNews3Photo.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          healthNews3[i].append(healthNews3Photo);
          healthNews3Photo.setAttribute("width", "100%");

          const healthNews3Headline = document.createElement("h7");
          healthNews3Headline.innerHTML = data.results[i].title;
          healthNews3[i].append(healthNews3Headline);

          const healthNews3Abstract = document.createElement("h8");
          healthNews3Abstract.innerHTML = data.results[i].abstract;
          healthNews3[i].append(healthNews3Abstract);
        }
      });
  }
});
