import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const SERVER_URL1 = `${process.env.SERVER_URL1}/server1`;

async function checkHealth1() {
  try {
    const res = await fetch(SERVER_URL1);
    const data = await res.json();

    if (data.status) {
        console.log("server-1")
        console.log(JSON.stringify({ status: true }));
    } else {
        console.log("server-1")
        console.log(JSON.stringify({ status: false }));
    }
  } catch (error) {
    console.log("server-1")
    console.error(JSON.stringify({ status: false }));
  }
}


const SERVER_URL2 = `${process.env.SERVER_URL2}/server2`;

async function checkHealth2() {
  try {
    const res = await fetch(SERVER_URL2);
    const data = await res.json();

    if (data.status) {
        console.log("server-2")
        console.log(JSON.stringify({ status: true }));
    } else {
        console.log("server-2")
        console.log(JSON.stringify({ status: false }));
    }
  } catch (error) {
    console.log("server-2")
    console.error(JSON.stringify({ status: false }));
  }
}

setInterval(checkHealth1, 10000); 
checkHealth1(); // server 1 

setInterval(checkHealth2, 10000); 
checkHealth2(); // server 2