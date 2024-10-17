const userRouter=require('./routes/users')
const express=require('express');
const path=require('path')

const app=express();
const port=3000;

const indexpath=path.resolve('../','client');
app.use(express.static(indexpath))

app.use(express.urlencoded({extended : true}));

app.use('/',userRouter)

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});

