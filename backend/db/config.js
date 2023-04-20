const mongoose= require('mongoose');
const connstr="mongodb+srv://aaryasmriti1:12012096@cluster0.ou54s3i.mongodb.net/e-commerce?retryWrites=true&w=majority"
mongoose.connect(connstr)

mongoose.connection.on('connected',()=>{
    console.log('connected')
})