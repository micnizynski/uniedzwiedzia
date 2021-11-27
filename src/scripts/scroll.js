export const scrollTo = (value) => {
  document
    .getElementById(`${value}-section`)
    .scrollIntoView({ behavior: "smooth" });
};
