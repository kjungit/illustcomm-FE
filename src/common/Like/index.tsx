import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { likePost } from "../../apis/services/Post";
import { useMutation, useQueryClient } from "react-query";
import { LikeWrapper } from "./style";

interface LikeProps {
  postid: number;
  isMyLiked: boolean;
}

function Like({ postid, isMyLiked }: LikeProps) {
  const [isLiked, setIsLiked] = useState<boolean>(isMyLiked);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(likePost, {
    onSuccess: (data) => {
      console.log("like success", data);
      queryClient.refetchQueries("posts");
    },
  });

  const onClick = () => {
    mutate(postid);
    setIsLiked(() => !isLiked);
  };
  return (
    <LikeWrapper>
      {isLiked ? (
        <AiFillHeart className="icon" onClick={onClick} />
      ) : (
        <AiOutlineHeart className="icon" onClick={onClick} />
      )}
    </LikeWrapper>
  );
}

export default Like;
