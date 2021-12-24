//this file will get the data Object and process it and then write that very data to ../dist/index.html to display to the User
const generateEngineers = engineers => {
    if (!engineers) {
      return '';
    }
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers:</h2>
        <p>
            ${engineers.map(eng=>{
            return `
                <h2>${eng.name} ---- ${eng.email}</h2>
            `
            }).join("")}
        </p>
      </section>
    `;
  };
const generateInterns = interns => {
    if (!interns) {
      return '';
    }
  
    return `
      <section class="my-3" id="about">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Interns:</h2>
        <p>
            ${interns.map(int=>{
            return `
                <h2>${int.name} ---- ${int.email}</h2>
            `
            }).join("")}
        </p>
      </section>
    `;
  };
const createHtmlTemplate = (infoObject)=>{
    const {manager,engineers,interns} = infoObject
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    
        <h1>Manager: ${manager.name}---->${manager.email}</h1>
        
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}

    </body>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${manager.name}</h3>
    </footer>
    </html>
    `;
}
module.exports = createHtmlTemplate