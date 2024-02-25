import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "Ana"} ${
    variables.lastName ? variables.lastName : "Campello"
  }</h1>
          <h2>${variables.role ? variables.role : "Studente"}</h2>
          <h3>${variables.city ? variables.city : "Elche"}, ${
    variables.country ? variables.country : "España"
  } </h3>
          <ul class= ${variables.socialMediaPosition}>
          
            <li><a href="https://twitter.com/${
              variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github ? variables.github : "Mjuliafb"
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/${
              variables.linkedin ? variables.linkedin : "mjfbalice"
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/${
              variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>

        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://img.freepik.com/vector-gratis/fondo-onda-particulas-degradado_23-2150428788.jpg?w=1800&t=st=1701814263~exp=1701814863~hmac=831a48a02a53129b2fa1cda3482ef68b8f6af4ab51d6b8858f5c89b288f81270",
    // this is the url for the profile avatar
    avatarURL:
      "https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671140.jpg?w=826&t=st=1701719558~exp=1701720158~hmac=21f3f72df8d55428076cb030f3fbad6251ceef812a693b1547d4dedfdfc977ab",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};