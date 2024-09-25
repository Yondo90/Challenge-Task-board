import express, {Express} from "express";
import taskRoute from "./routes/task.route";

const app: Express = express();
const PORT: number = 5004;

app.use(express.json());
app.use('/api/task', taskRoute);

app.listen(PORT, () => {
  console.log("SERVER RUNNING");
});
