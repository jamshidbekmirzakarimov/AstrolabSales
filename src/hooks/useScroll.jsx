import { useEffect } from "react";
import { useState } from "react";

function useScroll() {
  const [scrollNumber, setScrollNumber] = useState();

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const a = document.querySelector("#Services").offsetTop - 80;
    const b = document.querySelector("#Portfolio").offsetTop - 80;
    const c = document.querySelector("#Client").offsetTop - 100;

    const scroll = document.documentElement.scrollTop;
    let navbarlinks = document.querySelectorAll(".nav-title");
    setScrollNumber(scroll);

    if (a <= scroll && scroll < b) {
      navbarlinks[0].classList.add("nav-title-active")
      navbarlinks[1].classList.remove("nav-title-active");
      navbarlinks[2].classList.remove("nav-title-active");
    } else if (b <= scroll && scroll < c) {
      navbarlinks[1].classList.add("nav-title-active")
      navbarlinks[2].classList.remove("nav-title-active");
      navbarlinks[0].classList.remove("nav-title-active");
    } else if(c < scroll){
      navbarlinks[2].classList.add("nav-title-active")
      navbarlinks[1].classList.remove("nav-title-active");
      navbarlinks[0].classList.remove("nav-title-active");
    }else {
      navbarlinks[0].classList.remove("nav-title-active")
      navbarlinks[1].classList.remove("nav-title-active");
      navbarlinks[2].classList.remove("nav-title-active");
    }
  }

  useEffect(() => {
    myFunction();
  }, [scrollNumber]);

  return [scrollNumber];
}
export default useScroll;
