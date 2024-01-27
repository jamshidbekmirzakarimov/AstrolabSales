function useJavaScript() {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop - 80;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  const navbarlinksActive = (link) => {
    let navbarlinks = select(".nav-title", true);
    navbarlinks.forEach((navbarlink) => {
      const dataLink = link.slice(1);
      if (navbarlink.classList.contains(dataLink)) {
        navbarlink.classList.add("nav-title-active");
      } else {
        navbarlink.classList.remove("nav-title-active");
      }
    }); 
  };
  function onActive(e, link) {
    if (select(link)) {
      e.preventDefault();
      scrollto(link);
      // navbarlinksActive(link);
    }
  }

  return { select, scrollto, onActive, navbarlinksActive };
}
export default useJavaScript;
