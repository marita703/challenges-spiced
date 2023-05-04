// import { server } from "./server.js";
import { server } from "./server.js";
// server.listen(…

const PORT = 9000;
server.listen(PORT, () => {
  console.log(`server running at <http://localhost>:${PORT}/`);
});
