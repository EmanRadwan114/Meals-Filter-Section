// todo: call html elements & declare global variables
let navLink = document.querySelectorAll(".nav-link"),
  singleMeal = document.querySelectorAll(".single-meal"),
  cols = document.querySelectorAll(".col-md-6.col-lg-4"),
  plusBtn = document.querySelectorAll(".plusIcon"),
  mealImg = document.querySelectorAll(".single-meal img"),
  mealBox = document.querySelector("#box"),
  mealInfo = document.querySelector(".mealContent"),
  innerImg = document.querySelector(".mealImgs img"),
  closeBtn = document.querySelector(".closeBtn i"),
  arrowRight = document.querySelector(".btnRight"),
  arrowLeft = document.querySelector(".btnLeft"),
  mealDesc = document.querySelector(".mealDesc"),
  mealheader = document.querySelector(".mealhead"),
  currentImg = 0,
  clickedImgSrc,
  meals = {
    pasta: {
      meatBalls: ["meatballs1.jpg", "meatballs2.jpg", "meatballs3.jpg"],
      tomatoSause: [
        "tomato-sauce1.jpg",
        "tomato-sauce2.jpg",
        "tomato-sauce3.jpg",
        "tomato-sauce4.jpg",
      ],
      tortellini: [
        "Tortellini-pasta1.jpg",
        "tortelloni-pasta2.jpg",
        "tortellini-pasta3.jpg",
      ],
    },
    burger: {
      singleBeef: [
        "single-beef-burger1.jpg",
        "single-beef-burger2.jpg",
        "single-beef-burger3.jpg",
      ],
      dbBeef: [
        "double-beef-burger1.jpg",
        "double-beef-burger2.jpg",
        "double-beef-burger3.jpg",
      ],
      chicken: [
        "chicken-burger1.jpg",
        "chicken-burger2.jpg",
        "chicken-burger3.jpg",
      ],
    },
    salads: {
      green: ["green-salad1.jpg", "green-salad2.jpg", "green-salad3.jpg"],
      potato: ["potato-salad1.jpg", "potato-salad2.jpg", "potato-salad3.jpg"],
      fruit: ["fruit-salad1.jpg", "fruit-salad2.jpg", "fruit-salad3.jpg"],
    },
    drinks: {
      orange: ["orange-juice1.jpg", "orange-juice2.jpg", "orange-juice3.jpg"],
      cola: ["cola1.jpg", "cola2.jpg"],
      tea: ["teacup1.jpg", "teacup2.jpg"],
      coffee: ["coffeecup1.jpg", "coffeecup2.jpg", "coffeecup3.jpg"],
    },
  };

//todo: change style of navlinks on click
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function (ev) {
    document.querySelector(".nav-link.active").classList.remove("active");
    ev.target.classList.add("active");

    // show meals of data-type === ev.target.innerText

    for (let j = 0; j < singleMeal.length; j++) {
      singleMeal[j].classList.add("hide");
      cols[j].classList.add("order-0");
      if (
        singleMeal[j].getAttribute("mealType") === ev.target.innerText ||
        ev.target.innerText === "All"
      ) {
        singleMeal[j].classList.remove("hide");
        cols[j].classList.add("order-first");
        cols[j].classList.remove("order-0");
      }
    }
  });
}

//todo: create a function that shows meal info
function showMealInfo() {
  mealBox.classList.replace("d-none", "d-flex");
}

//todo: create a function that hids meal info
function hideMealInfo() {
  mealBox.classList.replace("d-flex", "d-none");
}

//todo: show meals info when user click on meal image or plus btn
for (let i = 0; i < plusBtn.length; i++) {
  mealImg[i].addEventListener("click", function (ev) {
    showMealInfo();
    clickedImgSrc = ev.target.getAttribute("src");
    innerImg.setAttribute("src", `${clickedImgSrc}`);
    displayMealInfo();
  });
  plusBtn[i].addEventListener("click", function (ev) {
    showMealInfo();
    clickedImgSrc = mealImg[i].getAttribute("src");
    innerImg.setAttribute("src", `${clickedImgSrc}`);
    displayMealInfo();
  });
}

//todo: close meal info when user click on close btn
closeBtn.addEventListener("click", hideMealInfo);

//todo: close meal info when user click outside the meal info box
document.addEventListener("click", function (ev) {
  ev.stopPropagation();
  if (ev.target === mealBox) {
    hideMealInfo();
  }
});

//todo: create a function that changes meal description text
function changeMealDesc(mealtitle, descChanged) {
  mealheader.innerHTML = mealtitle;
  mealDesc.innerHTML = descChanged;
}

//todo: get next meal image when user click on right arrow btn
function getNextImg(arr, hint, open, alt) {
  if (clickedImgSrc.includes(hint)) {
    currentImg++;
    if (currentImg === arr.length) {
      currentImg = 0;
    }
    innerImg.setAttribute("src", `${open}${arr[currentImg]}`);
    innerImg.setAttribute("alt", `${alt}`);
  }
}

//todo: change meal info
function displayMealInfo() {
  if (clickedImgSrc.includes("meatballs")) {
    changeMealDesc("meatballs pasta", "Spaghetti - Beef - Tomato Sauce");
  } else if (clickedImgSrc.includes("tomato")) {
    changeMealDesc("Tomato Sauce pasta", "Spaghetti - Tomato Sauce");
  } else if (clickedImgSrc.includes("ortellini")) {
    changeMealDesc(
      "tortellini pasta",
      "Fresh Pasta - ricotta - Parmesan - fresh spinach - onion"
    );
  } else if (clickedImgSrc.includes("single")) {
    changeMealDesc(
      "single beef burger sandwitch",
      "Beef - bread - cheese - tomato - sauce"
    );
  } else if (clickedImgSrc.includes("double")) {
    changeMealDesc(
      "double beef burger sandwitch",
      "Beef - bread - cheese - tomato - sauce"
    );
  } else if (clickedImgSrc.includes("chicken")) {
    changeMealDesc(
      "chicken burger sandwitch",
      "chicken - bread - cheese - tomato - sauce"
    );
  } else if (clickedImgSrc.includes("green")) {
    changeMealDesc(
      "green salad",
      "lettuce - tomatoes - cucumber - red onion - sauce"
    );
  } else if (clickedImgSrc.includes("potato")) {
    changeMealDesc(
      "potato salad",
      "potato - mayonnaise - yellow mustard - pickle juice - sauce"
    );
  } else if (clickedImgSrc.includes("fruit")) {
    changeMealDesc("fruit salad", "mix of fruits - juice");
  } else if (clickedImgSrc.includes("orange")) {
    changeMealDesc("orange juice", "fresh orange juice - ice");
  } else if (clickedImgSrc.includes("cola")) {
    changeMealDesc("cola drink", "cola drink - ice");
  } else if (clickedImgSrc.includes("coffee")) {
    changeMealDesc("coffee", "hot cup of coffee");
  } else if (clickedImgSrc.includes("tea")) {
    changeMealDesc("tea", "hot cup of tea");
  }
}
//todo: get next img when user click on right arrow btn
arrowRight.addEventListener("click", function () {
  getNextImg(
    meals.pasta.meatBalls,
    "meatballs",
    "./imgs/pasta/",
    "meatballs pasta"
  );
  getNextImg(
    meals.pasta.tomatoSause,
    "tomato",
    "./imgs/pasta/",
    "tomato pasta"
  );
  getNextImg(
    meals.pasta.tortellini,
    "ortellini",
    "./imgs/pasta/",
    "tortellini pasta"
  );
  getNextImg(
    meals.burger.singleBeef,
    "single",
    "./imgs/burger/",
    "single beef burger sandwitch"
  );
  getNextImg(
    meals.burger.dbBeef,
    "double",
    "./imgs/burger/",
    "double beef burger sandwitch"
  );
  getNextImg(
    meals.burger.chicken,
    "chicken",
    "./imgs/burger/",
    "chicken burger sandwitch"
  );
  getNextImg(meals.salads.green, "green", "./imgs/salads/", "green salad");
  getNextImg(meals.salads.potato, "potato", "./imgs/salads/", "potato salad");
  getNextImg(meals.salads.fruit, "fruit", "./imgs/salads/", "fruit salad");
  getNextImg(meals.drinks.orange, "orange", "./imgs/drinks/", "orange juice");
  getNextImg(meals.drinks.cola, "cola", "./imgs/drinks/", "cola drink");
  getNextImg(meals.drinks.coffee, "coffee", "./imgs/drinks/", "coffee cup");
  getNextImg(meals.drinks.tea, "tea", "./imgs/drinks/", "tea cup");
});

//todo: get previous meal image when user click on left arrow btn
function getPrevImg(arr, hint, open, alt) {
  if (clickedImgSrc.includes(hint)) {
    currentImg--;
    if (currentImg < 0) {
      currentImg = arr.length - 1;
    }
    innerImg.setAttribute("src", `${open}${arr[currentImg]}`);
    innerImg.setAttribute("alt", `${alt}`);
  }
}

//todo: get prev img when user click on left arrow btn
arrowLeft.addEventListener("click", function () {
  getPrevImg(
    meals.pasta.meatBalls,
    "meatballs",
    "./imgs/pasta/",
    "meatballs pasta"
  );
  getPrevImg(
    meals.pasta.tomatoSause,
    "tomato",
    "./imgs/pasta/",
    "tomato pasta"
  );
  getPrevImg(
    meals.pasta.tortellini,
    "ortellini",
    "./imgs/pasta/",
    "tortellini pasta"
  );
  getPrevImg(
    meals.burger.singleBeef,
    "single",
    "./imgs/burger/",
    "single beef burger sandwitch"
  );
  getPrevImg(
    meals.burger.dbBeef,
    "double",
    "./imgs/burger/",
    "double beef burger sandwitch"
  );
  getPrevImg(
    meals.burger.chicken,
    "chicken",
    "./imgs/burger/",
    "chicken burger sandwitch"
  );
  getPrevImg(meals.salads.green, "green", "./imgs/salads/", "green salad");
  getPrevImg(meals.salads.potato, "potato", "./imgs/salads/", "potato salad");
  getPrevImg(meals.salads.fruit, "fruit", "./imgs/salads/", "fruit salad");
  getPrevImg(meals.drinks.orange, "orange", "./imgs/drinks/", "orange juice");
  getPrevImg(meals.drinks.cola, "cola", "./imgs/drinks/", "cola drink");
  getPrevImg(meals.drinks.coffee, "coffee", "./imgs/drinks/", "coffee cup");
  getPrevImg(meals.drinks.tea, "tea", "./imgs/drinks/", "tea cup");
});

//todo: change imgs when user use arrow keys
document.addEventListener("keyup", function (ev) {
  if (ev.key === "ArrowRight") {
    getNextImg(
      meals.pasta.meatBalls,
      "meatballs",
      "./imgs/pasta/",
      "meatballs pasta"
    );
    getNextImg(
      meals.pasta.tomatoSause,
      "tomato",
      "./imgs/pasta/",
      "tomato pasta"
    );
    getNextImg(
      meals.pasta.tortellini,
      "ortellini",
      "./imgs/pasta/",
      "tortellini pasta"
    );
    getNextImg(
      meals.burger.singleBeef,
      "single",
      "./imgs/burger/",
      "single beef burger sandwitch"
    );
    getNextImg(
      meals.burger.dbBeef,
      "double",
      "./imgs/burger/",
      "double beef burger sandwitch"
    );
    getNextImg(
      meals.burger.chicken,
      "chicken",
      "./imgs/burger/",
      "chicken burger sandwitch"
    );
    getNextImg(meals.salads.green, "green", "./imgs/salads/", "green salad");
    getNextImg(meals.salads.potato, "potato", "./imgs/salads/", "potato salad");
    getNextImg(meals.salads.fruit, "fruit", "./imgs/salads/", "fruit salad");
    getNextImg(meals.drinks.orange, "orange", "./imgs/drinks/", "orange juice");
    getNextImg(meals.drinks.cola, "cola", "./imgs/drinks/", "cola drink");
    getNextImg(meals.drinks.coffee, "coffee", "./imgs/drinks/", "coffee cup");
    getNextImg(meals.drinks.tea, "tea", "./imgs/drinks/", "tea cup");
  } else if (ev.key === "ArrowLeft") {
    getPrevImg(
      meals.pasta.meatBalls,
      "meatballs",
      "./imgs/pasta/",
      "meatballs pasta"
    );
    getPrevImg(
      meals.pasta.tomatoSause,
      "tomato",
      "./imgs/pasta/",
      "tomato pasta"
    );
    getPrevImg(
      meals.pasta.tortellini,
      "ortellini",
      "./imgs/pasta/",
      "tortellini pasta"
    );
    getPrevImg(
      meals.burger.singleBeef,
      "single",
      "./imgs/burger/",
      "single beef burger sandwitch"
    );
    getPrevImg(
      meals.burger.dbBeef,
      "double",
      "./imgs/burger/",
      "double beef burger sandwitch"
    );
    getPrevImg(
      meals.burger.chicken,
      "chicken",
      "./imgs/burger/",
      "chicken burger sandwitch"
    );
    getPrevImg(meals.salads.green, "green", "./imgs/salads/", "green salad");
    getPrevImg(meals.salads.potato, "potato", "./imgs/salads/", "potato salad");
    getPrevImg(meals.salads.fruit, "fruit", "./imgs/salads/", "fruit salad");
    getPrevImg(meals.drinks.orange, "orange", "./imgs/drinks/", "orange juice");
    getPrevImg(meals.drinks.cola, "cola", "./imgs/drinks/", "cola drink");
    getPrevImg(meals.drinks.coffee, "coffee", "./imgs/drinks/", "coffee cup");
    getPrevImg(meals.drinks.tea, "tea", "./imgs/drinks/", "tea cup");
  } else if (ev.key === "Escape") {
    hideMealInfo();
  }
});

//todo: create a function that search for a meal
let searchInput = document.getElementById("filterMeal"),
  recipeTitle = Array.from(document.querySelectorAll(".mealTitle"));
function searchMeal() {
  for (let i = 0; i < singleMeal.length; i++) {
    singleMeal[i].classList.add("hide");
    if (document.querySelector(".nav-link.active").innerText === "All") {
      cols[i].style.order = "0";
      if (
        recipeTitle[i].innerText
          .toLowerCase()
          .includes(searchInput.value.toLowerCase()) === true
      ) {
        singleMeal[i].classList.remove("hide", "order-0");
        cols[i].style.order = "-2";
      }
    } else if (document.querySelector(".nav-link.active").innerText !== "All") {
      // filter meals on search
      if (
        singleMeal[i].getAttribute("mealType") ===
        document.querySelector(".nav-link.active").innerText
      ) {
        cols[i].classList.remove("order-first");
        if (
          recipeTitle[i].innerText
            .toLowerCase()
            .includes(searchInput.value.toLowerCase()) === true
        ) {
          console.log(recipeTitle[i].innerText);
          singleMeal[i].classList.remove("hide");
          cols[i].classList.add("order-first");
        }
      }
    }
  }
}

//todo: search
searchInput.addEventListener("input", function () {
  searchMeal();
});
