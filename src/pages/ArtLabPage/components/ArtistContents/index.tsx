import { useQuery } from "react-query";
import ArtistItem from "../../../../common/ArtistItem";
import {
  ArtistContentsWrapper,
  ArtistList,
  ArtistTitle,
  ArtistWrapper,
} from "./style";
import { getUsers } from "../../../../apis/services/Auth";

function ArtistContents() {
  const { data: users, error, isLoading } = useQuery("users", getUsers);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error || !users) {
    return <div>error...</div>;
  }

  return (
    <ArtistWrapper>
      <ArtistTitle>Artist List</ArtistTitle>
      <ArtistContentsWrapper>
        <ArtistList>
          {users.map((user) => {
            return (
              <ArtistItem
                key={user.id}
                src={user.profileImage}
                alt={user.username}
                username={user.username}
                width={300}
              />
            );
          })}
        </ArtistList>
      </ArtistContentsWrapper>
    </ArtistWrapper>
  );
}

export default ArtistContents;
