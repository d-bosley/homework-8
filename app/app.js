/* function intiListeners()
{
    $("nav a").click(function(e){
        console.log("click");
    })
}

function initApp()
{
    intiListeners();
}

$(document).ready(function()
{

}
); */

var front_page =
`
    <div id="page_split">
    WELCOME
    </div>

    <div id="front_hero">
    <h1>NEW ADVENTURES ARE JUST OVER THE HORIZON</h1>
    <img src="assets/logo.png" alt="">
    </div>

    <div id="front_table">
    <a id="isr" href=""><p>MAR 20</p><img src="assets/group.jpg" alt=""><p>This news story is a story about the news</p></a>
    <a id="usa" href=""><p>APR 4</p><img src="assets/islad.jpg" alt=""><p>This news story is a story about the news</p></a>
    <a id="aus" href=""><p>FEB 14</p><img src="assets/flag.jpg" alt=""><p>This news story is a story about the news</p></a>
    <a id="nwz" href=""><p>JAN 8</p><img src="assets/space.jpg" alt=""><p>This news story is a story about the news</p></a>
    </div>

    <div id="front_banner"><a href=""></a></div>

    <div id="front_motto">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis qui nobis corporis omnis laborum? Veritatis tenetur vel a enim magnam eum. Aspernatur laudantium iusto, esse asperiores repudiandae, quibusdam adipisci temporibus voluptatem beatae ex odio? Fuga neque aspernatur provident blanditiis eos ullam quasi nostrum placeat. Quo culpa, voluptates libero, accusantium vel dolor esse vero numquam blanditiis odit officiis, debitis voluptatum quisquam eveniet itaque! Rem nisi a illo totam consequatur quo assumenda deserunt amet, excepturi ipsum placeat odio eos porro sint laboriosam.
    </p>
    <a id="" href=""><img src="assets/logo.png" alt=""><h1></h1></a>
    </div>
`

var about_page =
`
    <div id="page_split">
    ABOUT
    </div>

    <div id="about_banner">
    <h1>A New Adventure Is Just Over The Horizon</h1>
    <p>With our site you can get all the info you need to start planning your next journey</p>
    <img src="assets/travel.png" alt="">
    </div>

    <div id="about_area">
    <img src="assets/about.jpg" alt="">
    <div class="line"></div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis qui nobis corporis omnis laborum? Veritatis tenetur vel a enim magnam eum. Aspernatur laudantium iusto, esse asperiores repudiandae, quibusdam adipisci temporibus voluptatem beatae ex odio? Fuga neque aspernatur provident blanditiis eos ullam quasi nostrum placeat.</p>
    </div>

    <div class="about_box">
    <div><img src="assets/islad.jpg" alt=""><p>This news story is a story about the news</p></div>
    <div><img src="assets/islad.jpg" alt=""><p>This news story is a story about the news</p></div>
    <div><img src="assets/islad.jpg" alt=""><p>This news story is a story about the news</p></div>
    </div>

    
`

var other_page =
`
    <div id="page_split">
    EXPLORE
    </div>

    <h1>POPULAR LOCATIONS</h1>

    <div id="other_table">
    <a id="ind" href=""><img src="assets/flg_ind.png" alt=""><p>INDIA</p></a>
    <a id="usa" href=""><img src="assets/flg_usa.png" alt=""><p>UNITED STATES</p></a>
    <a id="ntl" href=""><img src="assets/flg_ntl.png" alt=""><p>NETHERLANDS</p></a>
    <a id="chi" href=""><img src="assets/flg_chi.png" alt=""><p>CHINA</p></a>
    <a id="mxo" href=""><img src="assets/flg_mxo.png" alt=""><p>MEXICO</p></a>
    <a id="frn" href=""><img src="assets/flg_frn.png" alt=""><p>FRANCE</p></a>
    <a id="grc" href=""><img src="assets/flg_grc.png" alt=""><p>GREECE</p></a>
    <a id="jpn" href=""><img src="assets/flg_jpn.png" alt=""><p>JAPAN</p></a>
    <a id="can" href=""><img src="assets/flg_can.png" alt=""><p>CANADA</p></a>
    </div>
`

var contact_page =
`
    <div id="page_split">
    CONTACT
    </div>

    <div class="contact_form">
    <form id="form_area">
      <label for="fname"></label>
      <input type="text" id="first" name="firstname" placeholder="Email Address..."><br><br>

      <textarea name="message" placeholder="What Can We Do For You..."></textarea>
      <br><br>

      <input type="submit" value="REACH OUT">
    </form>
    </div>

    <div class="contact_box">
    <div><img src="assets/twit.png" alt=""></div>
    <div><img src="assets/face.png" alt=""></div>
    <div><img src="assets/insta.png" alt=""></div>
    </div>
`

var ind_page =
`
TEMPLATE
`

var usa_page =
`
TEMPLATE
`

var ntl_page =
`
TEMPLATE
`

var chi_page =
`
TEMPLATE
`

function showContent()
{
    $("#app").html(front_page);
    //$("#app").append(footerContent)
    initListeners();
}

function initListeners() 
    {
      $("nav a").click(function(e){
          let btnID = this.id;
          let contentID = btnID + "_page";
      
          $("#app").html(eval(contentID));
          //s$("#app").append(footerContent)
          console.log("what id " + contentID)
        })
        
        
        $("div a").click(function(e){
            let btnID = this.id;
            let contentID = btnID + "_page";
        
            $("#app").html(eval(contentID));
            //s$("#app").append(footerContent)
            console.log("what id " + contentID)
          });
    }

$(document).ready(function(){
    try {
    showContent();
    $("a").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
            });
            } catch (e) {
            console.error(e);
            }
          });