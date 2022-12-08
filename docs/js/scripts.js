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
const modalContainer = document.getElementById("modal-container");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

const data = [
  {
    title: "Publicidad",
    src: "assets/images/modal-publicitario2.jpg",
    text: "Como diseñador he realizado varios proyectos en el entorno publicitario como carteleria aplicada a eventos o desarrollo de marca. Aqui muestro varios ejemplos de carteles desarrollados por mi con propuesta de aplicacion en un entorno real.",
  },
  {
    title: "Proyecto Your Reality",
    src: "assets/images/modal-your-reality.jpg",
    text: "Como proyecto de fin de carrera, realizé un proyecto de un laboratorio cultural de desarrollo de videojuegos, en el cual desarrolle la marca, el branding y la propuesta de marketing, la propuesta espacial para el desarrollo del evento y una propuesta de diseño de objeto para el evento. Aqui se muestran varias piezas del proyecto realizado.",
  },
  {
    title: "Proyectos OMD",
    src: "assets/images/modal-omd.jpg",
    text: "En mi tiempo trabajando como diseñador en la empresa OMD realice varias piezas visuales, logotipos y propuestas de branding para marcas internas de la empresa. Aqui muestro algunas piezas realizadas por mi y miembros de la empresa OMD.",
  },
  {
    title: "Ilustracion",
    src: "assets/images/modal-ilustration.jpg",
    text: "Como hobby personal, aprendo a realizar ilustraciones digitales. La mayoria de las ilustraciones quedan innacabadas o en simples bocetos. Algunas ilustraciones estan finalizadas, pero aun me queda un largo camino de aprendizaje y desarrollo personal.",
  },
  {
    title: "Tokyo Stand",
    src: "assets/images/modal-tokyo.jpg",
    text: "Este proyecto fue un proyecto realizado en la universidad, en la que desarrolle una estructura efímera que sirviera para la representacion de un país, en mi caso fue Japon. Realizé los planos estructurales, de iluminacion y de mobiliario y despues mostré el resultado final con un renderizado 3D.",
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
    modalContainer.classList.add("modal__container--show");
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
  modal.classList.remove("modal--show");
  modalContainer.classList.remove("modal__container--show");
});

window.addEventListener("resize", () => {
  rootStyles.setProperty("--transition-duration", 0);
});

const fadeLeft = document.querySelectorAll(".fade-left");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-left-on");
    }
  });
};

const elementobserver = new IntersectionObserver(callback, options);

fadeLeft.forEach((fade) => {
  elementobserver.observe(fade);
});

const fadeBottom = document.querySelectorAll(".fade-bottom");
const optionBottom = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const callbackBottom = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-bottom-on");
    }
  });
};

const elementobserverBottom = new IntersectionObserver(
  callbackBottom,
  optionBottom
);

fadeBottom.forEach((fade) => {
  elementobserverBottom.observe(fade);
});

const hr = document.querySelectorAll(".hr");
const optionHr = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const callbackHr = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("hr-out");
    }
  });
};

const elementObserverHr = new IntersectionObserver(callbackHr, optionHr);

hr.forEach((hr) => {
  elementObserverHr.observe(hr);
});
