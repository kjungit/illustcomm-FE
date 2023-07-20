# illustcomm
## ⭐️ 프로젝트 소개
![main](https://user-images.githubusercontent.com/100064540/235041658-533acc2a-3390-4d0a-a230-530881c4f0ae.png)
> 일러스트 작가들을 위한 SNS 커뮤니티

### ⏰ 개발 기간
- 2023.04.14  ~ 2023.04.28

### 📝 작업내용
  - 회원가입, 로그인 기능 (이메일 중복확인, 비밀번호 확인)
  - 게시물 작성, 수정
  - 게시물 좋아요 기능
  - 게시물 댓글 기능

### ⚙️ 개발 조건 및 환경
- 사용언어: `React`, `Typecript`
- HTTp Client: `axios`
- style: `styled-components`
- 상태관리: `zustand` `react-query`
- 라이브러리:`react-router-dom` `react-hook-form` `react-cookie` `react-masonry-css` `react-slick`
- [BackEnd](https://github.com/kjungit/illustcomm-BE): `Node.js` `Express` `MySQL` `AWS RDS` `AWS S3`

---

### 📦 프로젝트 폴더 구조

```
📦 illustcomm-FE
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂apis
 ┃ ┣ 📂components
 ┃ ┣ 📂hooks
 ┃ ┣ 📂interface
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂ArtLabPage
 ┃ ┃ ┣ 📂LoginPage
 ┃ ┃ ┣ 📂MainPage
 ┃ ┃ ┣ 📂MyLabPage
 ┃ ┃ ┣ 📂NotFoundPage
 ┃ ┃ ┣ 📂PicLabDetailPage
 ┃ ┃ ┣ 📂PicLabPage
 ┃ ┃ ┣ 📂PostUpdatePage
 ┃ ┃ ┗ 📂RegisterPage
 ┃ ┣ 📂routers
 ┃ ┣ 📂store
 ┃ ┣ 📂styles
 ┃ ┣ 📂utils
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```


---
### 🖥 프로젝트 미리보기

|**메인 페이지**|**ArtLab**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/45769b22-8caf-4463-aa79-0ad95cf3d4b8" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/c36e43f2-dc02-4011-b8b5-a983f39d8006" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">작품들의 작품리스트들을 확인 가능</p>|<p align="center">작가 리스트를 확인 가능</p>|

</br>

|**회원가입**|**로그인**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/1d61ad6a-d6b6-4794-b130-f0362b5ce991" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/a35a76eb-252f-46bc-a10f-4638bdf7db4a" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">이메일 중복 체크 후 회원가입 가능하도록 구현</p>|<p align="center">로그인 후 엑세스 토큰, 리프레시토큰을 쿠키에 저장</p>|

</br>

|**작품 등록**|**작품 수정**|
| --- | --- |
|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/c4b7ac80-1271-4ca1-b4f2-832185ad05aa" width="500"  style="object-fit: cover; object-position: center;"></p>|<p align="center"><img src="https://github.com/kjungit/illustcomm-FE/assets/100064540/5898eabf-1d62-4f97-8f37-40ec6f33cd31" width="500" style="object-fit: cover; object-position: center;"></p>|
|<p align="center">작가들은 작품 등록 가능</p>|<p align="center">작품, 타이틀, 설명 수정 가능</p>|


