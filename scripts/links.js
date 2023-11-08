const baseURL = "https://github.com/nilberth-escobar/wdd230";

const linksURL = "https://github.com/nilberth-escobar/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data)
}
function displayLinks(lessons){
  const linksContainer = document.getElementById("#links-container");
  weeks.forEach(week => {
  const weekElement = document.createElement("div");
  weekElement.classList.add("week");

  const weekTitle = document.createElement("h2");
  weekTitle.textContent = 'Week ${week.week}';

  const linksList = document.createElement("ul");

  week.links.forEach(link => {

    const linkItem = document.createElement("li");
    const linkAnchor = document.createElement("a");
    linkAnchor.href = '${baseURL}/${link.url}';
    linkAnchor.textContent = link.title;
    linkItem.appendChild(linkAnchor);
    linksList.appendChild(linkItem);
  });

  weekElement.appendChild(weekTitle);
  weekElement.appendChild(linksList);
  weekElement.appendChild(weekElement);

  });

}
getLinks();

