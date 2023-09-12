// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddArticle from "@/container/AddArticle";
import ArticlesList from "@/container/ArticlesList";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useMutation } from "@apollo/client";
import { GETQUERY, ADDMUT, UPDATEMUT, DELETEMUT } from "@/query/schema";

export default function Home() {
  const [articles, setArticles] = useState<[]>([]);
  const [createArticle] = useMutation(ADDMUT);
  const [updateArticle] = useMutation(UPDATEMUT);
  const [deleteMUT] = useMutation(DELETEMUT);
  const { loading, error, data } = useQuery(GETQUERY, {
    fetchPolicy: "no-cache",
  }); 
  
  //Fetching all articles
  useEffect(() => {
    setArticles(data?.articles?.data); //Storing all the articles
  }, [data]);

  const addArticle = async (Title: string) => {
    await createArticle({
      //Creating a new article
      variables: {
        Title: Title, //Passing the article text
      },
    }).then(({ data }: any) => {
      setArticles([...articles, data?.createArticle?.data] as any); //Adding the new article to the list
    });
  };


  const editArticleItem = async (article: any) => {
    const newArticleTitle = prompt("Enter new article title:");
    if (newArticleTitle != null) {
      await updateArticle({
        variables: {
          id: article.id,
          Title: newArticleTitle,
        },
      }).then(({ data }: any) => {
        const moddedArticles: any = articles.map((_article: any) => {
          if (_article.id === article.id) {
            return data?.updateArticle?.data;
          } else {
            return _article;
          }
        });
        setArticles(moddedArticles);
      });
    }
  };

  const deleteArticleItem = async (article: any) => {
    if (confirm("Do you really want to delete this article?")) {
      await deleteMUT({
        //Deleting the article
        variables: {
          id: article.id,
        },
      }).then(({ data }: any) => {
        const newArticles = articles.filter((_article: any) => _article.id !== article.id);
        setArticles(newArticles as any);
      });
    }
  };

  return (
    <div>
      <main className="main">
        <AddArticle addArticle={addArticle} />
        <ArticlesList
          articles={articles}
          deleteArticleItem={deleteArticleItem}
          editArticleItem={editArticleItem}
        />
      </main>
    </div>
  );
}