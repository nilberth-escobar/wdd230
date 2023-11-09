const baseURL = "https://nilberth-escobar.github.io/wdd230/";
const linksURL = "https://nilberth-escobar.github.io/wdd230/data/links.json";
const cards = document.querySelector('.card')

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
  const h3 = document.createElement('h3')
  h3.textContent = 'Learning Activities';

  const ul = document.createElement('ul');

  lessons.forEach((weeks) => {
    const li = document.createElement('li');

    li.textContent = `Lesson ${weeks.lesson}: `;
    
    const a = document.createElement('a');
    a.href = weeks.links[0].url;
    a.textContent = weeks.links[0].title;

    li.appendChild(a);
    ul.appendChild(li);

  });

  cards.appendChild(h3);
  cards.appendChild(ul);

}

getLinks();
