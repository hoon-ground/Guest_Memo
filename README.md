# 방명록 프로젝트

## 📽️ 데모 영상
- [Main 데모](https://youtu.be/IKBGnXQRDUY)
- [기능 구현 데모](https://youtu.be/yeH0VNyq9XA)
- [반응형 웹 데모](https://youtu.be/IGyOQgm_07k)

---

## 📋 개괄
1. **Main**
2. **About Me (Self-introduction)**  
3. **Features (Programming Language Skills)**  
4. **Guest's Memo**

---

## 🛠️ 기능 구현
### 1. CRUD 기능 구현  
간단하면서도 직관적인 방명록 시스템을 구현하였습니다.  
- **타임스탬프**: 작성(Create) 및 수정(Update)된 시각을 표시합니다.  
- **페이징 기능**: 방명록 개수를 5의 배수 단위로 페이지 처리합니다.  

### 2. 영역 구성 (Area)
- **Header**, **Main**, **Section**, **Background**로 구성  
- Header의 각 메뉴 클릭 시 해당 영역으로 부드럽게 이동  

### 3. 기타 동적 요소
- **텍스트 입력 애니메이션**: 사용자가 텍스트를 입력하는 것처럼 보이는 애니메이션 추가  
- **부드러운 스크롤 애니메이션**: 스크롤 이동 시 자연스러운 화면 전환 구현  

---

## 📱 반응형 웹
CSS의 **Media Query**를 이용하여 다양한 화면 크기에 적합하도록 반응형 코드를 적용했습니다.

| 기준 화면 크기  | 설명                        |
|----------------|---------------------------|
| `1140px`      | 큰 데스크톱 화면에서 중간 크기 화면 기준 |
| `992px`       | 태블릿과 작은 데스크톱 화면 기준      |
| `768px`       | 태블릿 화면 기준                |
| `576px`       | 큰 스마트폰 화면 기준            |
| `400px`       | 작은 스마트폰 화면 기준          |

---

## ✅ 유효성 검증
### 1. HTML 코드 유효성 검사  
[HTML Validator](https://validator.w3.org/#validate_by_input) 결과:  
> **Document checking completed. No errors or warnings to show.**

### 2. CSS 코드 유효성 검사  
[CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 결과:  
> **축하합니다! 발견된 오류가 없습니다.**

---

## 📂 프로젝트 구조
```plaintext
📦 프로젝트 루트
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # 기능 구현을 위한 자바스크립트 파일
├── assets/             # 이미지 및 리소스 파일
└── README.md           # 프로젝트 설명 파일
