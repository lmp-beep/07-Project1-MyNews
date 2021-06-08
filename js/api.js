const usNews1 = document.querySelectorAll(".usNews1");
const usNews2 = document.querySelectorAll(".usNews2");
const unitedStatesNews = document.querySelectorAll(".unitedStatesNews");
const worldNews1 = document.querySelectorAll(".worldNews1");
const worldNews2 = document.querySelectorAll(".worldNews2");
const sportsNews1 = document.querySelectorAll(".sportsNews1");
const sportsNews2 = document.querySelectorAll(".sportsNews2");

$(document).ready(function () {
  console.log("ready!");
  usNewsAPI1();
  usNewsAPI2();
  unitedStatesNewsAPI();
  worldNewsAPI1();
  worldNewsAPI2();
  sportsNewsAPI1();
  sportsNewsAPI2();

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
    const nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
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
});
