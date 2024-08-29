const Mongodb = require('mongodb');
const { default: mongoose } = require('mongoose');
const Connect_DB =()=>{
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log("Mongodb in host name : "+con.connection.host)
    })
}
module.exports = Connect_DB;
