const submit = document.querySelector("form");

submit.addEventListener("submit", async (e) => {
  
  e.preventDefault();
  const data = new FormData(submit);
  let string = [...data.values()].toString()
  console.log(string)
  
  const response = await fetch("http://localhost:8080/dream", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: `provide a detailed recommendation if ${string }is safe during pregnancy or breastfeeding. Please provide rationale. If it is not safe, please provide alternate recommendations`,
    }),
  });

  const  answer  = await response.json()
  console.log(answer)
  
});
