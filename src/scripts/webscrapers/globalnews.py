import requests
from bs4 import BeautifulSoup
import json 
import numpy as np

def global_scrape(request):
  if request.method == 'OPTIONS':
       
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '3600' }

    return ('', 204, headers)

    
  headers = {'Access-Control-Allow-Origin': '*' }
  
  
  
  r1 = requests.get('https://www.aljazeera.com/news/')
  coverpage = r1.content 
  soup1 = BeautifulSoup(coverpage, 'html5lib')
  coverpage_news = soup1.find_all('article', 'gc u-clickable-card gc--type-post gc--list gc--with-image')


  number_of_articles = 5

  articlelist = [ ]
  for n in np.arange(0, number_of_articles):
    temp = {}

    link = coverpage_news[n].find('a')['href']
    link = 'https://www.aljazeera.com' + link
    temp['link'] = link 

    title = coverpage_news[n].find('a').get_text()
    temp['title'] = title

    image = coverpage_news[n].find('img')['src']
    image = 'https://www.aljazeera.com' + image
    temp['image'] = image

    alt = coverpage_news[n].find('img')['alt']
    temp['alt'] = alt
    articlelist.append(temp)


  
  return (json.dumps(articlelist), 200, headers)
