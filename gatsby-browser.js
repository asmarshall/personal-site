import "./src/styles/global.css"

const $ = require("jquery")

export const onInitialClientRender = () => {
  $(function() {
    $('#about').on("mousewheel", function() {
      $('#scroll').fadeOut(500);
    });
  });
}
