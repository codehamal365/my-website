#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:codehamal365/codehamal365.github.io.git main
# git push -f https://${access_token}@github.com/codehamal365/codehamal365.github.io.git main


# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:codehamal365/my-website.git main:gh-pages
git push -f https://${access_token}@github.com/codehamal365/my-website.git main:gh-pages


cd -