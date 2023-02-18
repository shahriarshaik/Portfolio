
const fileInfo = document.getElementById('gitPull');


// Specify the repository owner, repository name, and the path to the folder you want to read
const owner = 'shahriarshaik';
const repo = 'git-api-pull-test';
const path = '';

// Build the URL for the GitHub API endpoint
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

// Make an HTTP GET request to the GitHub API endpoint
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // Filter the response to include only the files in the folder
    const files = data.filter(file => file.type === 'file');

    // Log the number of files in the repository
    console.log(`The repository has ${files.length} files.`);
    const antall = document.createElement('p');
    antall.textContent = `The repository has ${files.length} files.`; 
    fileInfo.appendChild(antall);


    // Loop through the files and log their file names
    for (const file of files) {
        console.log(`File name: ${file.name}`);
        const filnavn = document.createElement('p');
        filnavn.textContent = `File name: ${file.name}`;
        fileInfo.appendChild(filnavn);
    }
    })
    .catch(error => {
    console.error(`Error reading files: ${error}`);
    });
