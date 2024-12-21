# express-lambda-web-adapter-test

## Quick start

```
git clone https://github.com/tseijp/express-lambda-web-adapter-test
cd express-lambda-web-adapter-test
sam build
sam deploy --guided
```

## Getting started

```ruby
mkdir express-lambda-web-adapter-test
cd express-lambda-web-adapter-test
npm init esnext
npm i express
npm i -D @types/express typescript
tsc --init
```

### The following steps shall be taken in advance.

- Add "outDir": "./dist" to the compilerOptions section tsconfig.json.
- Add "module": "exnext" to the compilerOptions section tsconfig.json.
- Add "exclude": ["node_modules"] to tsconfig.json.
- Add "build": "tsc" to script section of package.json.
- Add "type": "module" to package.json.

### Make 4 files

- src/index.ts
- Makefile
- run.sh
- template.yaml

### Deploy to lambda

before install docker and aws sam

```ruby
sam build
sam local invoke --region ap-northeast-1
sam deploy --guided
```

### Connect to CI/CD

```
echo dist >> .gitignore
echo 'samconfig.toml' >> .gitignore
echo '**/.aws-sam' >> .gitignore
sam pipeline init --bootstrap
git add .
git commit -m ":tada: init commit"
git push
```
