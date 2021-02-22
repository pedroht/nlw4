import express, { Request, Response } from "express";

const PORT = process.env.PORT || 3333;

const app = express();

app.get("/", (request: Request, response: Response) => {
  return response.json({
    message: "Hello World - NLW4",
  });
});

app.post("/", (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Seus dados foram salvos com sucesso",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port:${PORT}`);
});
