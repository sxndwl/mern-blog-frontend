import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../components/Post";
import axios from "../../axios";
import { generateImageUrl } from "../../utils";

export const Tags = () => {
  const { tag } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`posts/tag/${tag}`)
        .then((res) => {
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          alert("Не удалось получить посты");
        });
    }, 1000);
  }, [tag]);
  return (
    <>
      {(isLoading ? [...Array(5)] : data).map((obj, index) =>
        isLoading ? (
          <Post key={`skeleton-${index}`} isLoading={true} />
        ) : (
          <Post
            key={obj._id}
            id={obj._id}
            title={obj.title}
            imageUrl={obj.imageUrl ? generateImageUrl(obj.imageUrl) : ""}
            user={obj.user}
            createdAt={obj.createdAt}
            viewsCount={obj.viewsCount}
            commentsCount={3}
            tags={obj.tags}
            // isEditable={userData?._id === obj.user._id} - TODO!
          />
        )
      )}
    </>
  );
};
