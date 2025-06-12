function handleMenu() {
  const navDialog = document.getElementById("nav-dialog");

  if (navDialog.classList.contains("translate-x-full")) {
    navDialog.classList.remove(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
    navDialog.classList.add(
      "translate-x-0",
      "opacity-100",
      "pointer-events-auto"
    );
  } else {
    navDialog.classList.add(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
    navDialog.classList.remove(
      "translate-x-0",
      "opacity-100",
      "pointer-events-auto"
    );
  }
}

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line4 = document.getElementById("line-4");

setupIntersectionObserver(line4, true, 0.6);

// faqs

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});
