// src/containers/News.tsx
import styles from '../src/app/news.module.css'

import NewsItem from "@/components/NewsItem";
interface ListNews {
  news: any;
}

export const getStaticProps = async () => {
    const res = await fetch('http://127.0.0.1:1337/api/articles?populate=*', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
  
    return {
      props: { news: data }
    }
  }

function NewsList({ news }: ListNews) {
  return (
    <>
      <h2 className="newsText">All News</h2>
      <div className={styles.pageContent}>
        {news.data
          ?.sort((a: any, b: any) =>
            b.attributes.createdAt.localeCompare(a.attributes.createdAt)
          )
          .map((data: any) => {
            return (
              <NewsItem
                newsData={data}
                key={data.id}
              />
            );
          })}
      </div>
    </>
  );
}
export default NewsList;