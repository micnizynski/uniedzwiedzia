export const scrollTo = (value)=>{
  console.log(value)
  document.getElementById(`${value}-section`).scrollIntoView({behavior: "smooth"})
}

