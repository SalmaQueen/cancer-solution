from flask import Flask, render_template
# from newsapi import NewsApiClient
from newsapi.newsapi_client import NewsApiClient



app = Flask(__name__)

@app.route('/')
def index(name=None):
    return render_template('index.html',name=name)


@app.route('/news')
def bbc():
    newsapi = NewsApiClient(api_key="460f54dfe2d749b49c9c9bdb2509e2d0")
    topheadlines = newsapi.get_top_headlines(sources="bbc-news")

    articles = topheadlines['articles']

    desc = []
    news = []
    img = []

    for i in range(len(articles)):
        myarticles = articles[i]

        news.append(myarticles['title'])
        desc.append(myarticles['description'])
        img.append(myarticles['urlToImage'])

    mylist = zip(news, desc, img)

    return render_template('bbc.html', context=mylist)



if __name__ == "__main__":
    app.run(debug=True)