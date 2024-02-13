import app from "./app";

const port = process.env.PORT || 8080;

process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing cleanup...');
  process.exit();
});

app.listen(port, () => console.log(`Server is running on port ${port}`));