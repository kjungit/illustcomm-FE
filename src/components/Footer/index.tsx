import styled from "styled-components";
import { iconList } from "./SvgIcon";
import {
  BottomInfo,
  CompanyTitle,
  FooterLeftWrapper,
  FooterRightWrapper,
  FooterWrapper,
  IconList,
  IconWrapper,
  InfoWrapper,
  Item,
  LeftBottomWrapper,
  LeftTopWrapper,
  LightTopWrapper,
  MiddelInfo,
  MiddelInfoBottomWrapper,
  MiddelInfoMiddleWrapper,
  MiddelInfoTopWrapper,
  NewTitle,
  Title,
  TitleLogo,
  TitleWrapper,
} from "./style";

function Footer() {
  return (
    <FooterWrapper>
      <FooterLeftWrapper>
        <LeftTopWrapper>
          <TitleWrapper>
            <TitleLogo>
              <img src="/illust-logo-white.png" alt="" />
            </TitleLogo>
            <Title>ㅣ illustCommunity</Title>
          </TitleWrapper>
          <InfoWrapper>
            <div>이용약관</div>
            <div>개인정보처리방침</div>
            <div>고객센터</div>
            <div>공지사항</div>
            <div>FAQ</div>
            <div>브랜드 제휴</div>
          </InfoWrapper>
        </LeftTopWrapper>
        <LeftBottomWrapper>
          <CompanyTitle>
            주식회사 <span>illustCommunity</span>
          </CompanyTitle>
          <MiddelInfo>
            <MiddelInfoTopWrapper>
              대표 : kwonbeomjun ㅣ 개인정보관리책임자 : kwonbeomjun ㅣ
              사업자등록번호 : 123-12-1234 ㅣ
            </MiddelInfoTopWrapper>
            <MiddelInfoMiddleWrapper>
              통신판매업 신고번호 : 2023-서울강남-12345 ㅣ 주소 : 서울특별시
              강남구 강남로 123 강남빌딩 7층
            </MiddelInfoMiddleWrapper>
            <MiddelInfoBottomWrapper>
              TEL : 02-1234-1234 ㅣ E-MAIL : kjun_all@naver.com
            </MiddelInfoBottomWrapper>
          </MiddelInfo>
          <BottomInfo>
            <div>V.1.0.0 ㅣ © 2023. All rights reserved.</div>
          </BottomInfo>
        </LeftBottomWrapper>
      </FooterLeftWrapper>
      <FooterRightWrapper>
        <LightTopWrapper>
          <NewTitle>최신 소식 받기</NewTitle>
          <IconWrapper>
            <IconList>
              {iconList.map(({ icon, id }) => (
                <Item key={id}>
                  <IconWrapper>{icon()}</IconWrapper>
                </Item>
              ))}
            </IconList>
          </IconWrapper>
        </LightTopWrapper>
      </FooterRightWrapper>
    </FooterWrapper>
  );
}

export default Footer;
