import cors from "cors"
import express from "express"
const app = express()
const port = 5000


import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";
//라우터 추가
import {userRouter} from './src/user/userRouter.js'
import { mountainRouter } from "./src/mountain/mountainRouter.js"


app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
/*
@swagger
/product :
    get:
        tags:
        -pro
*/
app.get('/', (req,res) => {
    res.send('hello world')
})

app.use('/user', userRouter)
app.use('/mountain', mountainRouter)

app.use(errorMiddleware);



app.listen(port, ()=>{
    console.log(`${port}에 연결되었습니다`)
})