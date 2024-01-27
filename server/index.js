import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`);
});
