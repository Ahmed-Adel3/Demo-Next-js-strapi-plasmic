// src/containers/ArticlesList.tsx
import ArticleItem from "@/components/ArticleItem";
interface ListArticles {
  articles: any;
  editArticleItem: any;
  deleteArticleItem: any;
}
function ArticlesList({ articles, editArticleItem, deleteArticleItem }: ListArticles) {

  return (
    <>
      <h2 className="articlesText">All Articles</h2>
      <div className="articleListContainer">
        {articles
          ?.sort((a: any, b: any) =>
            b.attributes.createdAt.localeCompare(a.attributes.createdAt)
          )
          .map((article: any) => {
            return (
              <ArticleItem
                article={article}
                key={article.id}
                deleteArticleItem={deleteArticleItem}
                editArticleItem={editArticleItem}
              />
            );
          })}
      </div>
    </>
  );
}
export default ArticlesList;