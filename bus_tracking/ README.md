# 🚍 Bus Live Tracking System (Node.js + Leaflet + GPS)

## 📌 Project Overview

This is a real-time **bus tracking system** built using:

- Node.js (Express backend)
- Leaflet.js (interactive maps)
- OpenStreetMap / Esri Satellite tiles
- Mobile GPS (browser geolocation API)
- Ngrok for public access

The system tracks a mobile device's live location and displays it on a web map in real-time.

---

## ⚙️ How It Works

1. Mobile phone opens `mobile.html`
2. Browser continuously reads GPS using `navigator.geolocation.watchPosition()`
3. GPS data is sent to server using `/update-location`
4. Server stores latest coordinates
5. Web dashboard fetches data from `/location` every 2 seconds
6. Leaflet map updates marker + draws route path

---

## 🗂️ Project Structure or architecture

bus_tracking/
│
├── server.js
├── package.json
├── public/
│ ├── index.html (Map Dashboard)
│ ├── mobile.html (GPS Sender)
│ ├── app.js (Map logic)
│ └── style.css

## 🗂️  HOW TO RUN IN VS CODE

STEP 1. 

pavanbr@Pavans-MacBook-Air bus tracking protitype % ls                ## this cmd ls  list out the files 
AAPP.PY     bus-tracker  bus_tracking      bus_tracking_copy
pavanbr@Pavans-MacBook-Air bus tracking protitype % cd bus_tracking   ## go into the file bus_tracking by this command
pavanbr@Pavans-MacBook-Air bus_tracking % npm start                   ## this npm cmd starts to run it in localserver

> bus-tracking-protitype@1.0.0 start
> node server.js

Server running at http://localhost:3000 

#run this in first terminal 
it shows :
node server.js
Server running at http://localhost:3000

STEP 2 
ngrok http 3000                                                        ## run this ngrok http 3000 cmd in the second terminal

it shows :
ngrok                                                 (Ctrl+C to quit)
                                                                                               
LLMs 4x smaller, 2x faster: https://ngrok.com/blog/quantization                                
                                                                                               
Session Status                online                                                           
Account                       pavanbr041207@gmail.com (Plan: Free)                             
Version                       3.37.3                                                           
Region                        India (in)                                                       
Web Interface                 http://127.0.0.1:4040                                            
Forwarding                    https://pseudoviperous-krysta-dampishly.ngrok-free.dev -> http://

STEP 3. 
https://pseudoviperous-krysta-dampishly.ngrok-free.dev/mobile.html  
##run this in the moble of driver allow the location access

STEP 4.
http://localhost:3000   (this is for the local system which cannot be accesed in the internet)

or 

 https://pseudoviperous-krysta-dampishly.ngrok-free.dev/index.html (this is the ngrok link that can be accesed in the internet)

 
---

# ✅ Why this README is important

It helps you:
- Show project in interviews 🎯
- Upload to GitHub 💼
- Understand full system flow
- Rebuild project later easily

---

# 🚀 If you want next upgrade (optional)

I can help you next with:

- 🔥 Multiple bus tracking system  
- 🔥 Save route history in database (MongoDB)  
- 🔥 Show speed + distance traveled  
- 🔥 Real-time dashboard UI upgrade  
- 🔥 Mobile app version (no browser limit)

Just tell 👍