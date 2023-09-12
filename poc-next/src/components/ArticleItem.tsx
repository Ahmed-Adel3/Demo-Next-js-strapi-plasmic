// src/coomponents/ItemArticle.tsx
interface ItemArticle {
    article: any;
    editArticleItem: FunctionStringCallback;
    deleteArticleItem: FunctionStringCallback;
  }
  function ArticleItem({ article, editArticleItem, deleteArticleItem }: ItemArticle) {
    return (
      <>
        <div className="articleItem">
          <div>{article?.attributes?.Title}</div>
          <div>
            <i>
              <button className="bg-default" onClick={() => editArticleItem(article)}>
                Edit
              </button>
            </i>
            <i>
              <button className="bg-danger" onClick={() => deleteArticleItem(article)}>
                Delete
              </button>
            </i>
          </div>
        </div>
      </>
    );
  }
  export default ArticleItem;