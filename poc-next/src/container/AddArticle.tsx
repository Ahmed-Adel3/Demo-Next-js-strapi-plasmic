// src/container/AddArticle.tsx
import { useState } from "react";
function AddArticle({ addArticle }: { addArticle: FunctionStringCallback }) {
  const [title, setArticle] = useState<string>("");
  return (
    <>
      <div className="addArticleContainer">
        <input
          className="articleInputText"
          type="text"
          placeholder="Add new article here..."
          id="Title"
          value={title}
          onChange={(e) => {
            setArticle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              addArticle(title);
              setArticle("");
            }
          }}
        />
        <button
          className="bg-default"
          onClick={() => {
            addArticle(title);
            setArticle("");
          }}
        > Add Article </button>
      </div>
    </>
  );
}
export default AddArticle;