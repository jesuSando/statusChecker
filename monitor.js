import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const SERVER_URL = `${process.env.SERVER_URL}/health`;

async function checkHealth() {
  try {
    const res = await fetch(SERVER_URL);
    const data = await res.json();

    if (data.status) {
        console.log(JSON.stringify({ status: 1 }));
    } else {
        console.log(JSON.stringify({ status: 0 }));
    }
  } catch (error) {
    console.error(JSON.stringify({ status: 0 }));
    console.log("no hay respuesta del server");
  }
}
setInterval(checkHealth, 3000); 

checkHealth(); // Initial check