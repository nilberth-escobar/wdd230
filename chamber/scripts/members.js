async function getBusinesses() {
    const requestURL = 'https://nilberth-escobar.github.io/wdd230/chamber/data/members.json';
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
}
  
  function displayBusinesses(business) {
    let card = document.createElement('section');
    let iconImg = document.createElement('img');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
      
    iconImg.setAttribute('src', business.imageurl);
    iconImg.setAttribute('alt', `Icon image for ${business.name}`);
    iconImg.setAttribute('loading', 'lazy');
  
    h2.textContent = `${business.name}`;
  
    p1.innerHTML = business.address + "<br>" + business.phone;
  
    p2.textContent = business.membership_level;

    a.textContent = business.website;
    a.setAttribute('href', '#');
  
    card.appendChild(iconImg);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);
    
  
    document.querySelector('.directory-grid').appendChild(card);
  }
  
  const directory = document.querySelector('.directory-grid')
  const dirpanelbutton = document.querySelector('#panel');
  const dirlistbutton = document.querySelector('#list');
  
  dirpanelbutton.addEventListener('click', () => {directory.classList.add('panelview')}, false);
  dirlistbutton.addEventListener('click', () => {directory.classList.remove('panelview')}, false);
  
  getBusinesses();