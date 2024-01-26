export const IconChevronDown = () => {
  function scrollToElement(el) {
    const section = document.getElementById(el)
    section.scrollIntoView({behavior: "smooth"})
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      style={{cursor: 'pointer'}}
      onClick={() => scrollToElement('intro')}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 9l8 8l8-8"
      ></path>
    </svg>
  );
}
