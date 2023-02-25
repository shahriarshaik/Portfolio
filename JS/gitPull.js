document.addEventListener('DOMContentLoaded', function() {
    const fileInfoTest = document.getElementById('gitPullTest');
    const fileInfo = document.getElementById('noeAnnet');



    // Specify the repository owner, repository name, and the path to the folder you want to read
    const owner = 'shahriarshaik';
    const repoTest = 'git-api-pull-test';
    const repo = 'Portfolio';
    const pathTest = '';
    const path = '/playgroundFiles';

    // Build the URL for the GitHub API endpoint
    const apiUrlTest = `https://api.github.com/repos/${owner}/${repoTest}/contents/${pathTest}`;

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Make an HTTP GET request to the GitHub API endpoint

    fetch(apiUrlTest)
        .then(response => response.json())
        .then(data => {
        // Filter the response to include only the files in the folder
        const files = data.filter(file => file.type === 'file');

        // Log the number of files in the repository
        console.log(`The repository has ${files.length} files.`);
        const antall = document.createElement('p');
        antall.textContent = `The repository has ${files.length} files.`; 
        fileInfoTest.appendChild(antall);


        // Loop through the files and log their file names
        for (const file of files) {
            //console.log(`File name: ${file.name}`);
            const filnavn = document.createElement('p');
            filnavn.textContent = `File name: ${file.name}`;
            fileInfoTest.appendChild(filnavn);
        }
        })
        .catch(error => {
        console.error(`Error reading files: ${error}`);
        });


        

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const files = data.filter(file => file.name.endsWith('.html'));
        //q: how do i make it only show html files?
        //a: add a filter for file.name.endsWith('.html')

        
        const works = document.createElement('p');
        works.textContent = `The repository has ${files.length} files.`;
        fileInfo.appendChild(works);

        for (const file of files) {
            //console.log(`File name: ${file.name}`);
            const filnavn = document.createElement('button');
            filnavn.textContent = `${file.name}`;
            filnavn.setAttribute('href', `${file.name}`);
            filnavn.addEventListener('click', function() {
                window.location.href = `/playgroundFiles/${file.name}`;
            });
            fileInfo.appendChild(filnavn);
        }

        })
        .catch(error => {
        console.error(`Error reading files: ${error}`);
        });

});


