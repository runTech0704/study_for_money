# ベースイメージ
FROM node:14

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のインストール
COPY package.json /app/
RUN npm install

# アプリケーションのコピー
COPY . /app/

# アプリケーションの起動
CMD ["npm", "start"]
