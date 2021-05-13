const usNews = document.querySelectorAll(".usNews");
const usNewsFeatured = document.querySelectorAll(".usNewsFeatured");
const worldNews = document.querySelectorAll(".worldNews");
const businessNews = document.querySelectorAll(".businessNews");
const sportsNews = document.querySelectorAll(".sportsNews");
const techNews = document.querySelectorAll(".techNews");
const entertainmentNews = document.querySelectorAll(".entertainmentNews");
const healthNews = document.querySelectorAll(".healthNews");
const travelNews = document.querySelectorAll(".travelNews");

$(document).ready(function () {
  console.log("ready!");
  usNewsAPI();
    worldNewsAPI();
    businessNewsAPI();
    sportsNewsAPI();
    technologyNewsAPI();
    entertainmentNewsAPI();
    healthNewsAPI();
    travelNewsAPI();

  // newscasterNewsAPI();

  // var myCarousel = document.getElementsById("myCarousel");
  // var carousel = new bootstrap.Carousel(myCarousel, {
  //   interval: 2000,
  //   wrap: false
  // })

  // var categoryChoice = document.getElementById("category");
  // var submitBtn = document.getElementById("submit");

  // var newsAPIKey = "850cb5d6549542ee848e80d5d1910b21"

  // var rapidAPIKey = "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e"
  // "https://newscatcher.p.rapidapi.com/v1/sources?topic=news&lang=en"
  // news
  // sport
  // tech
  // world
  // business
  // entertainment
  // travel

  // function newscasterNewsAPI() {
  //     // var rapidAPIKey = "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e";
  //     // var requestNewscasterNews = "https://newscatcher.p.rapidapi.com/v1/sources?topic=news&lang=en" + rapidAPIKey;

  //     fetch("https://newscatcher.p.rapidapi.com/v1/search_free?topic=sport&lang=en", {
  //         "method": "GET",
  //         "headers": {
  //             "x-rapidapi-key": "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e",
  //             "x-rapidapi-host": "newscatcher.p.rapidapi.com"
  //         }
  //     })

  //         .then(function (response) {
  //             return response.json();
  //     })
  //     .then(function (data) {
  //         console.log(data);
  //     })
  // };

  function usNewsAPI() {
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

        const usNewsFeaturedPhoto = document.getElementById(
          "usNewsFeaturedPhoto"
        );
        usNewsFeaturedPhoto.setAttribute(
          "src",
          data.results[0].multimedia[0].url
        );
        usNewsFeatured[0].append(usNewsFeaturedPhoto);
        // usNewsFeaturedPhoto.setAttribute("width", "50%");
        // usNewsFeaturedPhoto.style.margin = '0 auto';

        const usNewsFeaturedHeadline = document.getElementById(
          "usNewsFeaturedHeadline"
        );
        usNewsFeaturedHeadline.innerHTML = data.results[0].title;
        usNewsFeatured[0].append(usNewsFeaturedHeadline);
        // usNewsFeaturedHeadline.style.margin = '0 auto';

        const usNewsFeaturedAbstract = document.getElementById(
          "usNewsFeaturedAbstract"
        );
        usNewsFeaturedAbstract.innerHTML = data.results[0].abstract;
        usNewsFeatured[0].append(usNewsFeaturedAbstract);
        // usNewsFeaturedAbstract.style.margin = '0 auto';
        // usNewsFeaturedAbstract.setAttribute("width", "10%");

        const usNewsFeaturedCategory = document.getElementById(
          "usNewsFeaturedCategory"
        );
        usNewsFeaturedCategory.innerHTML = "US News";
        usNewsFeatured[0].append(usNewsFeaturedCategory);
        // usNewsFeaturedCategory.style.margin = '0 auto';




        for (i = 0; i < usNews.length; i++) {
          //   const usNewsLink = document.querySelectorAll(".usNews");
          //   usNewsLink.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const usNewsCategory = document.createElement("h8");
          usNewsCategory.innerHTML = "US News";
          usNews[i].append(usNewsCategory);

          const usNewsPhoto = document.createElement("img");
          usNewsPhoto.setAttribute("src", data.results[i].multimedia[0].url);
          usNews[i].append(usNewsPhoto);
          usNewsPhoto.setAttribute("width", "100%");
          //   usNewsPhoto.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const usNewsHeadline = document.createElement("h5");
          usNewsHeadline.innerHTML = data.results[i].title;
          usNews[i].append(usNewsHeadline);
          //   usNewsHeadline.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const usNewsAbstract = document.createElement("p");
          usNewsAbstract.innerHTML = data.results[i].abstract;
          usNews[i].append(usNewsAbstract);
          //   usNewsAbstract.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });
        }
      });
  }

  function worldNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestWorldNews =
      "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestWorldNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < worldNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const worldNewsCategory = document.createElement("h8");
          worldNewsCategory.innerHTML = "World News";
          worldNews[i].append(worldNewsCategory);

          const worldNewsPhoto = document.createElement("img");
          worldNewsPhoto.setAttribute("src", data.results[i].multimedia[0].url);
          worldNews[i].append(worldNewsPhoto);
          worldNewsPhoto.setAttribute("width", "100%");
          worldNewsPhoto.addEventListener("click", function () {
            window.open(data.results[i].url, "_blank");
          });

          const worldNewsHeadline = document.createElement("h5");
          worldNewsHeadline.innerHTML = data.results[i].title;
          worldNews[i].append(worldNewsHeadline);

          const worldNewsAbstract = document.createElement("p");
          worldNewsAbstract.innerHTML = data.results[i].abstract;
          worldNews[i].append(worldNewsAbstract);
        }
      });
  }

  function businessNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestBusinessNews =
      "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestBusinessNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < businessNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const businessNewsCategory = document.createElement("h8");
          businessNewsCategory.innerHTML = "Business News";
          businessNews[i].append(businessNewsCategory);

          const businessNewsPhoto = document.createElement("img");
          businessNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          businessNews[i].append(businessNewsPhoto);
          businessNewsPhoto.setAttribute("width", "100%");

          const businessNewsHeadline = document.createElement("h5");
          businessNewsHeadline.innerHTML = data.results[i].title;
          businessNews[i].append(businessNewsHeadline);

          const businessNewsAbstract = document.createElement("p");
          businessNewsAbstract.innerHTML = data.results[i].abstract;
          businessNews[i].append(businessNewsAbstract);
        }
      });
  }

  function sportsNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestSportsNews =
      "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestSportsNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < sportsNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const sportsNewsCategory = document.createElement("h8");
          sportsNewsCategory.innerHTML = "Sports News";
          sportsNews[i].append(sportsNewsCategory);

          const sportsNewsPhoto = document.createElement("img");
          sportsNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          sportsNews[i].append(sportsNewsPhoto);
          sportsNewsPhoto.setAttribute("width", "100%");

          const sportsNewsHeadline = document.createElement("h5");
          sportsNewsHeadline.innerHTML = data.results[i].title;
          sportsNews[i].append(sportsNewsHeadline);

          const sportsNewsAbstract = document.createElement("p");
          sportsNewsAbstract.innerHTML = data.results[i].abstract;
          sportsNews[i].append(sportsNewsAbstract);
        }
      });
  }

  function technologyNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestTechnologyNews =
      "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestTechnologyNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < techNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const techNewsCategory = document.createElement("h8");
          techNewsCategory.innerHTML = "Technology News";
          techNews[i].append(techNewsCategory);

          const techNewsPhoto = document.createElement("img");
          techNewsPhoto.setAttribute("src", data.results[i].multimedia[0].url);
          techNews[i].append(techNewsPhoto);
          techNewsPhoto.setAttribute("width", "100%");

          const techNewsHeadline = document.createElement("h5");
          techNewsHeadline.innerHTML = data.results[i].title;
          techNews[i].append(techNewsHeadline);

          const techNewsAbstract = document.createElement("p");
          techNewsAbstract.innerHTML = data.results[i].abstract;
          techNews[i].append(techNewsAbstract);
        }
      });
  }

  function entertainmentNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestEntertainmentNews =
      "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestEntertainmentNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < entertainmentNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const entertainmentNewsCategory = document.createElement("h8");
          entertainmentNewsCategory.innerHTML = "Entertainment News";
          entertainmentNews[i].append(entertainmentNewsCategory);

          const entertainmentNewsPhoto = document.createElement("img");
          entertainmentNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          entertainmentNews[i].append(entertainmentNewsPhoto);
          entertainmentNewsPhoto.setAttribute("width", "100%");

          const entertainmentNewsHeadline = document.createElement("h5");
          entertainmentNewsHeadline.innerHTML = data.results[i].title;
          entertainmentNews[i].append(entertainmentNewsHeadline);

          const entertainmentNewsAbstract = document.createElement("p");
          entertainmentNewsAbstract.innerHTML = data.results[i].abstract;
          entertainmentNews[i].append(entertainmentNewsAbstract);
        }
      });
  }

  function healthNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestHealthNews =
      "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestHealthNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < healthNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const healthNewsCategory = document.createElement("h8");
          healthNewsCategory.innerHTML = "Health News";
          healthNews[i].append(healthNewsCategory);

          const healthNewsPhoto = document.createElement("img");
          healthNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          healthNews[i].append(healthNewsPhoto);
          healthNewsPhoto.setAttribute("width", "100%");

          const healthNewsHeadline = document.createElement("h5");
          healthNewsHeadline.innerHTML = data.results[i].title;
          healthNews[i].append(healthNewsHeadline);

          const healthNewsAbstract = document.createElement("p");
          healthNewsAbstract.innerHTML = data.results[i].abstract;
          healthNews[i].append(healthNewsAbstract);
        }
      });
  }

  function travelNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR";
    var requestTravelNews =
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=" +
      nyTimesAPIKey;

    fetch(requestTravelNews)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (i = 0; i < travelNews.length; i++) {
          //   var usNewsFlash = document.getElementById("us-news-flash");
          //   usNewsFlash.addEventListener("click", function () {
          //     window.open(data.results[i].url, "_blank");
          //   });

          const travelNewsCategory = document.createElement("h8");
          travelNewsCategory.innerHTML = "Travel News";
          travelNews[i].append(travelNewsCategory);

          const travelNewsPhoto = document.createElement("img");
          travelNewsPhoto.setAttribute(
            "src",
            data.results[i].multimedia[0].url
          );
          travelNews[i].append(travelNewsPhoto);
          travelNewsPhoto.setAttribute("width", "100%");

          const travelNewsHeadline = document.createElement("h5");
          travelNewsHeadline.innerHTML = data.results[i].title;
          travelNews[i].append(travelNewsHeadline);

          const travelNewsAbstract = document.createElement("p");
          travelNewsAbstract.innerHTML = data.results[i].abstract;
          travelNews[i].append(travelNewsAbstract);
        }
      });
  }
});
