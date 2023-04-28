import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import verifyToken from "../hooks/verifyToken";
import { getCookie } from "../utils/cookies";
import { useQueryClient } from "react-query";

function ProtectedRouter() {
  const queryClient = useQueryClient();
  const isAuthenticated = verifyToken();
  const token = getCookie("accessToken");
  const navigate = useNavigate();

  //  로그인이 되어있지 않으면 로그인 페이지로 이동
  useEffect(() => {
    if (isAuthenticated === "FAILED") {
      queryClient.clear();
      alert("로그인을 해주세요.");
      navigate("/signin");
    }
  }, [isAuthenticated]);

  if (!token && isAuthenticated === "SUCCESS") return <>로딩 중</>;
  return <Outlet />;
}

export default ProtectedRouter;
