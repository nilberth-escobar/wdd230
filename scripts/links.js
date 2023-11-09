//creating the variables for the data

const baseURL = "https://nilberth-escobar.github.io/wdd230/";
const linksURL = "https://nilberth-escobar.github.io/wdd230/data/links.json";
const cards = document.querySelector('.card')

async function getLinks() { //creating the fetch function to get the data from the JSON file
  const response = await fetch(linksURL);//fetching the data from the url and saving it into 'response'
  const data = await response.json();//converting the response object into a JSON object and safing it into 'data'
  displayLinks(data.lessons);//calling the function with data.lessons as argument
}

const displayLinks = (lessons) => {//creating the function to display the data
  const h3 = document.createElement('h3')//creating the h3 element
  h3.textContent = 'Learning Activities';//adding content to h3 to be displayed

  const ul = document.createElement('ul');//creating the ul document

  lessons.forEach((weeks) => {//iterating through the data, each lesson
    const li = document.createElement('li');//for each lesson, it creates a 'li' element

    li.textContent = `Lesson ${weeks.lesson}: `;//for each lesson, it adds the content from the JSON file
    
    const a = document.createElement('a');//creating the 'a' element
    a.href = weeks.links[0].url;//passing the value to the property href, which are the links
    a.textContent = weeks.links[0].title;//passing the title of the lesson, which is in the 'title' from the JSON file

    li.appendChild(a);//it appends the 'a' elements to the li list
    ul.appendChild(li);//it appends the 'li' elements to the ul list

  });

  cards.appendChild(h3);//it appends the 'h3' element to the div that contains the menu
  cards.appendChild(ul);//it appends the 'ul' that contains the 'li' elemnt that creates the list of lessons.

}

getLinks();
