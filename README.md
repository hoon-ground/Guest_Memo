# 방명록 프로젝트

---

## 1. 개괄 ✨  
🎥 [데모 비디오 보기](https://youtu.be/IKBGnXQRDUY)

- **Main**  
- **About Me (Self-introduction)**  
- **Features (Programming Language Skills)**  
- **Guest's Memo**  

---

## 2. 기능 구현 🛠️  
🎥 [데모 비디오 보기](https://youtu.be/yeH0VNyq9XA)

### 1) CRUD 기능 구현  
- **기능**: Create, Read, Update, Delete  
- 간단하면서도 직관적인 방명록 시스템  
  - **타임스탬프**: 작성(Create) 및 수정(Update)된 시각을 표시  
  - **페이징**: 방명록을 5개의 항목 단위로 페이지 처리  

### 2) 영역 구현 (Area)  
- **구성 요소**: Header, Main, Section, Background  
- Header 메뉴 클릭 시 해당 영역으로 부드럽게 이동  

### 3) 기타 동적 요소  
- **텍스트 입력 애니메이션**: 사용자가 텍스트를 입력하는 듯한 효과  
- **부드러운 스크롤 애니메이션**: 자연스러운 화면 전환 구현  

---

## 3. 반응형 웹 🌐  
🎥 [데모 비디오 보기](https://youtu.be/IGyOQgm_07k)

CSS **Media Query**를 활용하여 다양한 화면 크기에 대응:  

| 기준 화면 크기 | 설명                            |
|---------------|---------------------------------|
| `1140px`      | 큰 데스크톱에서 중간 크기 화면으로 넘어가는 기준 |
| `992px`       | 태블릿과 작은 데스크톱 화면 기준          |
| `768px`       | 태블릿 화면 기준                     |
| `576px`       | 큰 스마트폰 화면 기준                 |
| `400px`       | 작은 스마트폰 화면 기준               |

---

## 4. 유효성 검증 ✅  

### 1) HTML 코드 유효성 검사  
- [HTML Validator](https://validator.w3.org/#validate_by_input) 결과:  
  > **Document checking completed. No errors or warnings to show.**  

### 2) CSS 코드 유효성 검사  
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 결과:  
  > **축하합니다! 발견된 오류가 없습니다.**
