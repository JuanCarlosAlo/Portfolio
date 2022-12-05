const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const rootStyles = document.documentElement.style;
const arrowLeft = document.getElementById("arrow-left-slider");
const arrowRight = document.getElementById("arrow-right-slider");
const slider = document.getElementById("slider");
const menuItem = document.getElementById("menu-item");

const modalCross = document.getElementById("cross-icon");

const allMenuLinks = document.querySelectorAll(".menu__link");
const allMenuItem = document.querySelectorAll(".menu__item");

const design = document.getElementById("design");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

const data = [
  {
    title: "Publicidad",
    src: "assets/images/modal-publicitario2.jpg",
    text: "Modal diseño publicitario,Lorem ipsum dolor sit amet consectetur adipiscing elit viverra pharetra et, odio curabitur lobortis netus aliquam vestibulum fringilla dui duis euismod, penatibus ultrices id aliquet tortor",
  },
  {
    title: "Proyecto Your Reality",
    src: "assets/images/modal-your-reality.jpg",
    text: "Modal proyecto Your Reality,Lorem ipsum dolor sit amet consectetur adipiscing elit viverra pharetra et, odio curabitur lobortis netus aliquam vestibulum fringilla dui duis euismod, penatibus ultrices id aliquet tortor",
  },
  {
    title: "Proyectos OMD",
    src: "assets/images/modal-omd.jpg",
    text: "Modal proyectos OMD,Lorem ipsum dolor sit amet consectetur adipiscing elit viverra pharetra et, odio curabitur lobortis netus aliquam vestibulum fringilla dui duis euismod, penatibus ultrices id aliquet tortor",
  },
  {
    title: "Ilustracion",
    src: "assets/images/modal-ilustration.jpg",
    text: "Modal Ilustracion,Lorem ipsum dolor sit amet consectetur adipiscing elit viverra pharetra et, odio curabitur lobortis netus aliquam vestibulum fringilla dui duis euismod, penatibus ultrices id aliquet tortor",
  },
  {
    title: "Tokyo Stand",
    src: "assets/images/modal-tokyo.jpg",
    text: "Modal Tokyo Stand,Lorem ipsum dolor sit amet consectetur adipiscing elit viverra pharetra et, odio curabitur lobortis netus aliquam vestibulum fringilla dui duis euismod, penatibus ultrices id aliquet tortor",
  },
];

design.addEventListener("click", (e) => {
  if (!e.target.classList.contains("grid-container")) {
    let currentElement;

    if (e.target.classList.contains("design")) {
      currentElement = e.target;
    } else if (e.target.parentElement.classList.contains("design")) {
      currentElement = e.target.parentElement;
    } else if (e.target.classList.contains("design__header__title")) {
      currentElement = e.target.parentElement.parentElement;
    }
    const index = Array.from(design.children).indexOf(currentElement);

    modal.classList.add("modal--show");
    console.log(design.children);
    console.log(e.target);

    modalTitle.textContent = data[index].title;
    modalImg.src = data[index].src;
    modalText.textContent = data[index].text;
  }
});

const allSliderContent = Array.from(
  document.querySelectorAll(".slider__content")
);

let counter = 0;
let translate = 0;

const moveSlide = () => {
  rootStyles.setProperty("--slider-translate", 100 * translate * -1 + "%");
};

const nextSlide = () => {
  if (counter >= allSliderContent.length - 1) {
    counter = 0;
    translate = 0;
  } else {
    counter = counter + 1;
    translate = translate + 1;
  }

  moveSlide();
};

const prevSlide = () => {
  if (counter <= 0) {
    counter = allSliderContent.length - 1;
    translate = allSliderContent.length - 1;
  } else {
    counter = counter - 1;
    translate = translate - 1;
  }

  moveSlide();
};

arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);

menuIcon.addEventListener("click", () => {
  rootStyles.setProperty("--transition-duration", 1 + "s");
  menu.classList.toggle("menu--show");
  allMenuLinks.forEach((menuLink) => {
    menuLink.classList.toggle("menu__link--show");
  });
  allMenuItem.forEach((menuItem) => {
    menuItem.classList.toggle("menu__item--show");
  });
});

modalCross.addEventListener("click", () => {
  modal.classList.toggle("modal--show");
});

window.addEventListener("resize", () => {
  rootStyles.setProperty("--transition-duration", 0);
});
