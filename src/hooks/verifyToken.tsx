import React, { useState } from "react";
import { useQuery } from "react-query";
import { getCookie, setCookie } from "../utils/cookies";
import { refresh, verify } from "../apis/services/Auth";

type authType = "PENDING" | "SUCCESS" | "FAILED";

function verifyToken() {
  const [isAuthenticated, setIsAuthenticated] = useState<authType>("PENDING");
  const token = getCookie("accessToken");
  const verifyResult = useQuery(["auth", "verify"], verify, {
    onSuccess: () => {
      setIsAuthenticated("SUCCESS");
    },
    onError: () => {
      setIsAuthenticated("FAILED");
    },
    retry: 0, // 실패했더라도 다시 요청하지 않음
    enabled: !!token, // 토큰이 있을 때만 verify
  }); // 쿠키가 없으면 undefined 라서, boolean 타입으로 변환하기 위해 !! 사용

  const refreshResult = useQuery(["auth", "refresh"], refresh, {
    onSuccess: (data) => {
      setCookie("accessToken", data.accessToken, {
        path: "/",
        maxAge: data.exp - data.iat,
      });
      setIsAuthenticated("SUCCESS");
    },
    onError: () => {
      setIsAuthenticated("FAILED");
    },
    retry: 0, // 실패했더라도 다시 요청하지 않음
    enabled: !token, // 토큰이 있을 때만 refresh
  });

  return isAuthenticated; // 인증 여부 값을 리턴해서 사용
}

export default verifyToken;
