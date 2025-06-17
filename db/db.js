const mongoose = require('mongoose')

const dbconnect = (url)=>{
     mongoose.connect(url).then(()=>console.log('DB Connected.'))
}

module.exports = dbconnect