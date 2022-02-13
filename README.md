![logo](https://user-images.githubusercontent.com/33594615/153739454-1ccc43c3-5bbd-48eb-8268-9e6d7e10f6eb.png)

See the site live [here](https://team-news-3f573.web.app/)!


Made for the JPMorgan challenge at GUTS 2022 hackathon.

A website which allows teams to quickly see the news in the area that their team member lives, helping people stay connected while working remotely.


## Features
:zap: Read news about the country your teammates are in  
:cloud_rain: including the weather! :sunny:  
:sparkles: See a list of your teammates and the country they live in  
:zap: Read about global events through the global news section  


## Technologies Used
on the frontend we used
- React
- Astro
- leaflet js (for the map)
- firebase (for hosting and user auth)

on the backend we used:
- firebase (for data storage)  
- google cloud functions to scrape news (written in python)

There is also an automatic github action to build and the deploy the site whenever a new release is published

## future development
there are a few places where this project could be improved if there were more time:
- improving web scraper:
    - to scrape more news site (atm only aljazeera is used)
    - to scrape with finer locations - beyond just "country"
- improvements to the user input
    - ensure integritybetween lat&long coordinates and semantic location
    - allow user to enter an address
    - or to drop a pin on a map
- allow users to "join" teams, making the site closer to a small social network
- allow users to have several teams 
- allow users to set custom pins for each team member to make dinstinguishing them on the map easier
    

## Screenshots

<< front page with a popup open, global news, one country news, add new team members page >>
