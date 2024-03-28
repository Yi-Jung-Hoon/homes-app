# 프로젝트 설정하기

## Git 저장소 clone하기

1. Git 저장소를 복제(clone)합니다.
  ```
  git clone <저장소 URL>
  ```

2. 복제한 저장소 디렉토리로 이동합니다.
  ```
  cd <저장소 디렉토리>
  ```

## db.json 서비스 구동하기

1. `db.json`을 제공하는 서비스를 구동하기 위해 `json-server`를 설치합니다.
  ```
  npm install -g json-server
  ```

2. `db.json` 파일이 있는 디렉토리로 이동합니다.
  ```
  cd <db.json 파일이 있는 디렉토리>
  ```

3. `json-server`를 실행합니다.
  ```
  json-server --watch db.json
  ```

## 프로젝트 시작하기

1. 프로젝트 디렉토리로 이동합니다.
  ```
  cd <프로젝트 디렉토리>
  ```

2. 필요한 종속성(dependencies)을 설치합니다.
  ```
  npm install
  ```

3. 프로젝트를 실행합니다.
  ```
  npm start
  ```