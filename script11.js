function fetchData() {
    fetch('https://api.example.com/data')
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Call a function to render the data on the webpage
        renderData(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  }

  // Function to render data on the webpage
  function renderData(data) {
    const container = document.getElementById('data-container');
    // Clear previous content
    container.innerHTML = '';
    // Create HTML elements to display the data
    const ul = document.createElement('ul');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name; // Assuming the API returns an array of objects with a 'name' property
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Call the fetchData function when the page loads
  window.onload = fetchData;