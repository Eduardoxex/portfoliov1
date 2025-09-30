const langbtn = document.getElementById("langbtn");
const mainnav = document.getElementById("mainnav");
const comen1 = document.getElementById("comen1");
const downloadbtn = document.getElementById("downloadbtn");
const aboutmetl = document.getElementById("aboutmetl");
const aboutme1 = document.getElementById("aboutme1");
const aboutme2 = document.getElementById("aboutme2");
const skill = document.getElementById("skill");
const soundclick = new Audio('/sounds/downdclick.mp3');




const click = () =>{
soundclick.currentTime = 0;
soundclick.play();
}

const changeLangv=() =>{
mainnav.innerHTML = `<ul>
                    <li><a>About me</a></li>
                    <li><a>My projects</a></li>
                    <li><a>What I'm looking for</a></li>
                    <li><a>Talk to me</a></li>
                </ul>`;
comen1.textContent = "Junior web developer";
downloadbtn.textContent = "Download CV";
aboutmetl.innerText = "About me";
aboutme1.innerHTML = `Software developer with experience in
                 designing, developing, and improving web 
                 and mobile applications. Advanced knowledge 
                 of JavaScript, TypeScript, HTML, CSS, Angular, 
                 and Ionic, as well as knowledge in C#, Xamarin, 
                 React, MongoDB, SQL Server, and Express. 
                 Used to working with agile methodologies 
                 and version control tools like Git/GitHub 
                 and Firebase.`;
aboutme2.innerHTML = `I complement my technical skills 
                    with experience in IT risk management, 
                    information security (ISO 27001),
                    server administration, process improvement, 
                    and IT auditing.`;
skill.innerText = "My skills";

langbtn.textContent = "esp";
langbtn.removeEventListener("click", changeLangv);
langbtn.addEventListener("click", changeLangs);
}

const changeLangs=() =>{
    mainnav.innerHTML = `<ul>
                        <li><a>Hacerca de mi</a></li>
                        <li><a>Mis proyectos</a></li>
                        <li><a>Que busco</a></li>
                        <li><a>Contactame</a></li>
                    </ul>`;
    comen1.textContent = "Desarrollador web junior";
    downloadbtn.textContent = "Descargar CV";
    aboutmetl.innerText = "Hacerca de mi";
    aboutme1.innerHTML = `Desarrollador de software 
    con experiencia en el diseño, desarrollo y mejora 
    de aplicaciones web y móviles. Manejo avanzado de 
    JavaScript, TypeScript, HTML, CSS, Angular e Ionic,
     además de conocimientos en C#, Xamarin, React, MongoDB,
      SQL Server y Express. Acostumbrado a trabajar con 
      metodologías ágiles y herramientas de control de 
      versiones como Git/GitHub y Firebase.
`;
    aboutme2.innerHTML = `Complemento mis habilidades técnicas
     con experiencia en gestión de riesgos informáticos, 
     seguridad de la información (ISO 27001), administración 
     de servidores, mejora de procesos y auditoría informática.`;
skill.innerText = "My skills";


  langbtn.textContent = "eng";
  langbtn.removeEventListener("click", changeLangs);
  langbtn.addEventListener("click", changeLangv);
    }


langbtn.addEventListener("click", changeLangv);
downloadbtn.addEventListener("click", click);
