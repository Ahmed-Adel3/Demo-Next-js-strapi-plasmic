// src/coomponents/ItemNews.tsx
import styles from '../app/news.module.css'
interface ItemNews {
    newsData: any;
  }

function NewsItem({ newsData }: ItemNews) {

  const backgroundImageUrl = "http://127.0.0.1:1337"+newsData?.attributes.Cover.data.attributes.url;
  console.log(backgroundImageUrl)
  const divStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

    return (
      <>
        <div className={styles.card} style={divStyle}>
          <div className={styles.content}>
            <h2 className={styles.title}>{newsData?.attributes?.Title}</h2>
            <p className={styles.copy}>{newsData?.attributes?.Subtitle}</p>
            <button className={styles.btn}>View Details</button>
          </div>
        </div>
      </>
    );
  }
  export default NewsItem;