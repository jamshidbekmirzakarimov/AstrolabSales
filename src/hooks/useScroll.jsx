import { useEffect } from "react";
import { useState } from "react";

function useScroll() {
  const [scrollNumber, setScrollNumber] = useState();

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    const a = document.querySelector("#header").offsetTop - 80;
    // const b = document.querySelector("#Services").offsetTop - 60;
    // const c = document.querySelector("#Portfolio").offsetTop - 60;
    // const d = document.querySelector("#Client").offsetTop - 60;
    // const v = document.querySelector("#article").offsetTop - 80;

    const scroll = document.documentElement.scrollTop;
    let navbarlinks = document.querySelectorAll(".nav-title");
    setScrollNumber(scroll);

    // if (b <= scroll && scroll < c) {
    //   navbarlinks[1].classList.add("nav-title-active")
    //   navbarlinks[0].classList.remove("nav-title-active");
    //   navbarlinks[2].classList.remove("nav-title-active");
    // } else if (c <= scroll && scroll < d) {
    //   navbarlinks[2].classList.add("nav-title-active")
    //   navbarlinks[0].classList.remove("nav-title-active");
    //   navbarlinks[1].classList.remove("nav-title-active");
    // } else if (d <= scroll && scroll < v) {
    //   navbarlinks[0].classList.remove("nav-title-active");
    //   navbarlinks[2].classList.remove("nav-title-active");
    //   navbarlinks[1].classList.remove("nav-title-active");
    // } else if(v < scroll){
    //   navbarlinks[0].classList.remove("nav-title-active")
    //   navbarlinks[1].classList.remove("nav-title-active");
    //   navbarlinks[2].classList.remove("nav-title-active");
    // }else {
    //   navbarlinks[0].classList.add("nav-title-active")
    //   navbarlinks[1].classList.remove("nav-title-active");
    //   navbarlinks[2].classList.remove("nav-title-active");
    // }
  }

  useEffect(() => {
    myFunction();
  }, [scrollNumber]);

  return [scrollNumber];
}
export default useScroll;
