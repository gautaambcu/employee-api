const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

app.use(bodyParser.json());

// Load Swagger file
const swaggerDocument = YAML.load("./swagger.yaml");

// Routes
const employeeRoutes = require("./routes/employeeRoutes");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/employees", employeeRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Employee API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});