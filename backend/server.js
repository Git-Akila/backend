const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const authRoutes=require('./routes/auth');
// Product routes
const productRoutes = require('./routes/products');

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/products', productRoutes);

// mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error(err));




mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err))




app.listen(process.env.PORT || 5000,()=>{
    console.log('Server running on port 5000');
})