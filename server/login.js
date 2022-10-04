const server = require("./settings");


function goLogin() {
  server.app.get('/', (request, response) => {
    response.render("login");
  });
}

function joinAccount() {
  server.app.post("/login", (request, response) => {
    console.log("post 정상 작동");
  });
}

module.exports = {
  goLogin,
  joinAccount
}
