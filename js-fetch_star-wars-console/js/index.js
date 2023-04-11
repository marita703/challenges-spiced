console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  console.log(response);

  try {
    if (!response.ok) {
      console.log("fetch did not work");
    } else {
      console.log("fetch worked!!");
      const dataInJavaScriptFormat = await response.json();
      console.log(dataInJavaScriptFormat);
      const completeObject = dataInJavaScriptFormat.results;
      console.log(completeObject);
      console.log(completeObject[3].name);
    }
  } catch (e) {
    console.error(e);
  }
}

fetchData();

console.log();
