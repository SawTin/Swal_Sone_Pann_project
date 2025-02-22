document.getElementById('fetchDataBtn').addEventListener('click', () => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        document.getElementById('dataDisplay').innerText = data.message;
      })
      .catch(error => console.error('Error fetching data:', error));
  });
