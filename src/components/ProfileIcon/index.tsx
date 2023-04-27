import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getCookie } from "../../utils/cookies";
import { useLoginStore, useUserDataStore } from "../../store";
import { removeCookie } from "../../utils/cookies";
import { useMutation } from "react-query";
import { logout } from "../../apis/services/Auth";
import { persist } from "zustand/middleware";

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SignInButton = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`;
const SignOutButton = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`;

const ProfileIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fff;
  display: block;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

function TopProfile() {
  const { isLogin, setIsLogin } = useLoginStore();
  const { userData, setUserData } = useUserDataStore();
  const { mutate: logoutMutation } = useMutation(logout, {
    onSuccess: (data) => {
      removeCookie("accessToken");
      console.log("logout success", data);
      alert("로그아웃 되었습니다.");
    },
  });

  const onClickFunc = () => {
    setIsLogin(!isLogin);
    logoutMutation();
    setUserData({
      id: 0,
      email: "",
      profileImage: "",
      username: "",
    });
  };

  return (
    <ProfileWrapper>
      {isLogin ? (
        <SignInButton to="/signin" onClick={onClickFunc}>
          SIGN OUT
        </SignInButton>
      ) : (
        <SignOutButton to="/signin">SIGN IN</SignOutButton>
      )}
      <ProfileIcon>
        <ProfileImage
          src={isLogin ? userData.profileImage : "../public/noprofile.png"}
        />
      </ProfileIcon>
    </ProfileWrapper>
  );
}

export default TopProfile;
