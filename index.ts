import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get(
//     "/",
//     async (req: Request, res: Response): Promise<Response> => {
//         return res.status(200).send({
//             message: "Hello World!",
//         });
//     }
// );
app.use('/api/user', require('./routes/user'));
app.use('/api/user/fund', require('./routes/fundusermapping'));

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}

