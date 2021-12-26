//this file will get the data Object and process it and then write that very data to ../dist/index.html to display to the User
const generateEngineers = engineers => {
    if (!engineers) {
      return '';
    }
  
    return `
      ${engineers.map(engineer=>{
        return `
          <div class="card" style="width: 18rem; height: 17rem;">
          <div class="card-body">
            <div class="cardheader">
              <h4 class="card-title">${engineer.name}</h4>
              <h5 class="card-subtitle mb-2"><img src="../icons/engineer.png" alt="engineer icon" height="25px" width="25px">Engineer</h5>
            </div>
            <div class="details">
              <h6>ID : ${engineer.id}</h6>
              <h6>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h6>
              <h6>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></h6>
            </div>
          </div>
        </div>
    `
      }).join("")}
    
    `
    ;
  };
const generateInterns = interns => {
    if (!interns) {
      return '';
    }
  
    return `
    ${interns.map(intern=>{
      return `
        <div class="card" style="width: 18rem; height: 17rem;">
          <div class="card-body">
            <div class="cardheader">
              <h4 class="card-title">${intern.name}</h4>
              <h5 class="card-subtitle mb-2"><img src="../icons/intern.png" alt="intern icon" height="25px" width="25px">Intern</h5>
            </div>
            <div class="details">
              <h6>ID : ${intern.id}</h6>
              <h6>Email: <a href="mailto:${intern.email}">${intern.email}</a></h6>
              <h6>School: ${intern.school}</h6>
            </div>
          </div>
        </div>
  `
    }).join("")}
  
  `
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header><div><h1>The A-TEAM</h1></div></header>
      <div class="container d-flex justify-content-around flex-wrap maincontent">
        <!--this is the manager section-->
        <div class="card" style="width: 18rem; height: 17rem;">
        <div class="card-body">
          <div class="cardheader">
            <h4 class="card-title">${manager.name}</h4>
            <h5 class="card-subtitle mb-2"><img src="../icons/manager.png" alt="manager icon" height="25px" width="25px">Manager</h5>
          </div>
          <div class="details">
            <h6>ID : ${manager.id}</h6>
            <h6>Email: <a href="mailto:${manager.email}">${manager.email}</a></h6>
            <h6>Office Number: ${manager.officeNumber}</h6>
          </div>
        </div>
      </div>
      ${generateEngineers(engineers)}
      ${generateInterns(interns)}
      </div>
      <footer>
      <h3>&copy; ${new Date().getFullYear()} by Karan Sodhi</h3>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      
      </body>
    </html>
    `;
}
module.exports = createHtmlTemplate
