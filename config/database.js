const { Client } = require('pg');
const client=new Client({
host:"dev.db.fft.org.uk",
port:5432,
user:"dnair",
password:"Hard-Uncle$Small*Elsewhere-4",
database:"assessment_v2_test"

})

client.on("connect",()=>{

    console.log("Database connected");
})

client.on("end",()=>{

    console.log("Database closed");

})

module.exports = client;