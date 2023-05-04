import { createServer } from "node:http";

// export const server = …

export const server = createServer((req, res) => {
  console.log("Request: ", req.url);

  switch (req.url) {
    case "/api/fish/1":
      res.statusCode = 200;
      res.end("Shrimp");
      break;

    case "/api/fish/2":
      res.statusCode = 200;
      res.end("Anemonefish");
      break;
    default:
      res.statusCode = 404;
      res.end("Not Found");
      break;
  }
});
