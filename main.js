const server = require("./server/settings");
const login = require("./server/login");
const { app, database, db } = require("./server/settings");
const colors = require('colors');

server.app.listen(server.port, () => {
  console.log(colors.blue("웹 서버가 " + server.port + " 포트에서 실행되었습니다."));
});

/* oracle db connect */
server.db.getConnection({
  user: server.user,
  password: server.password,
  host: server.host,
  database: server.database
}, (error, connect) => {
  if (error) {  // 에러 발생 시
    console.log("faild to connect to db".red + "\nreason for connect faild : ", err);
    return;
  } else if (connect) {  // 연결 성공 시
    console.log("succecs to connect to db!!".blue);
    connect.execute(server.SELECT_QUERY, (error, result) => {
      if (error) {
        console.log("faild loading data..".bgRed);
        console.log(error);
      } else if (result) {
        console.log("succecs loading data!!".blue);
        console.log(result);
        console.log(result.metaData);
        console.log(result.rows);
        console.log(result.column);  // 데이터를 받아오지 못함
      }
    });
  }
});
/* oracle db connect */

login.goLogin();
login.joinAccount();
