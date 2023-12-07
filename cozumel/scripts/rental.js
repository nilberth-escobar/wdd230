/*
const vehicles = 'data/rental-info.json';

fetch(vehicles) // Fetch JSON data
    .then(response => response.json()) // Parse JSON data
    .then(data => {
        // Do something with the data
        console.log(data);
    })
*/

document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Fetch data from the JSON file using async/await
        const response = await fetch('data/rental-info.json');
        const data = await response.json();

        // Get the table element
        const table = document.getElementById('rentalTable');

        // Iterate over the vehicles array in the JSON data
        data.vehicles.forEach(vehicle => {
            // Create a new row for each vehicle
            const row = table.insertRow();

            // Populate the cells with data
            const nameCell = row.insertCell(0);
            const maxPersonsCell = row.insertCell(1);
            const resHalfCell = row.insertCell(2);
            const resFullCell = row.insertCell(3);
            const inHalfCell = row.insertCell(4);
            const inFullCell = row.insertCell(5);

            nameCell.textContent = vehicle.name;
            maxPersonsCell.textContent = vehicle.max_persons;
            resHalfCell.textContent = vehicle.res_half;
            resFullCell.textContent = vehicle.res_full;
            inHalfCell.textContent = vehicle.in_half;
            inFullCell.textContent = vehicle.in_full;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});