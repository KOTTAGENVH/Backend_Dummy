

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://it21013300:ammadada@cluster0.xcpyt0w.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})