import React, { useEffect, useState } from 'react';
import NewsItems from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  document.title = `${props.category}- NewsHuB`
  const updateNews = () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setTotalResult(data.totalResults);
        setLoading(false);
        props.setProgress(100);
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page + 1);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(articles.concat(data.articles));
        setTotalResult(data.totalResults);
      })
      .catch(error => console.error('Error fetching more data:', error));
  };

  return (
    <>
      <h1 className='text-center my-3'>NewsHuB - Top Headlines from {props.category}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((element) => (
              <div className='col-md-4 my-3' key={element.url}>
                <NewsItems
                  title={element.title || ""}
                  description={element.description || ""}
                  btnText="Know More..."
                  imageUrl={element.urlToImage || ""}
                  newsUrl={element.url || ""}
                  author={element.author || ""}
                  date={element.publishedAt || ""}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  setProgress: PropTypes.func
}

export default News;
