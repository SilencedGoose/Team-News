import requests 
from bs4 import BeautifulSoup
import json 
import numpy as np



def makeurl(country): 
  return f'https://www.google.com/search?q=weather+{country}'


USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36"
LANGUAGE = "en-US,en;q=0.5"


def weather_scraper(request):
  if request.method == 'OPTIONS':
       
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600' }

    return ('', 204, headers)
  
  headers = {'Access-Control-Allow-Origin': '*' }
  
  session = requests.Session()
  session.headers['User-Agent'] = USER_AGENT
  session.headers['Accept-Language'] = LANGUAGE
  session.headers['Content-Language'] = LANGUAGE
  
  url = makeurl(request.args.get('country'))
  html = session.get(url)
  soup = BeautifulSoup(html.text, "html.parser")
  
  result = {}
    
  result['region'] = soup.find("div", attrs={"id": "wob_loc"}).text
   
  result['temp_now'] = soup.find("span", attrs={"id": "wob_tm"}).text
    
  result['dayhour'] = soup.find("div", attrs={"id": "wob_dts"}).text
    
  result['weather_now'] = soup.find("span", attrs={"id": "wob_dc"}).text
  
  return (json.dumps(result), 200, headers)