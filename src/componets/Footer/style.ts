import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #555;
  padding: 30px 20px 40px;
`;

export const FooterLeftWrapper = styled.div``;

export const FooterRightWrapper = styled.div`
  width: 300px;
`;

export const LeftTopWrapper = styled.div``;

export const LeftBottomWrapper = styled.div``;

export const LightTopWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLogo = styled.div`
  line-height: 30px;
  img {
    width: 120px;
  }
`;

export const Title = styled.div`
  color: #fff;
  font-weight: 300;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 16px 0 40px;
  cursor: pointer;
  div {
    margin-right: 20px;
    &:hover {
      color: #333;
    }
  }
`;

export const CompanyTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const MiddelInfo = styled.div`
  font-size: 14px;
  & > div {
    margin-bottom: 8px;
  }
`;

export const MiddelInfoTopWrapper = styled.div`
  display: flex;
`;

export const MiddelInfoMiddleWrapper = styled.div``;

export const MiddelInfoBottomWrapper = styled.div`
  display: flex;
`;

export const BottomInfo = styled.div`
  font-weight: 600;
  margin-top: 40px;
  padding-bottom: 40px;
`;

export const NewTitle = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #fff;
`;

export const IconWrapper = styled.div`
  margin-top: 8px;
`;

export const IconList = styled.div`
  display: flex;
  width: 200px;
`;

export const Item = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;
