# Pythonイメージをベースに使用
FROM python:3.10

# 環境変数の設定
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# 作業ディレクトリの設定
WORKDIR /app

# 必要なパッケージのインストール
RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc python3-dev curl gnupg \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Google Cloud NDBとその他の依存関係のインストール
COPY requirements.txt /app/
RUN pip install -r requirements.txt \
    # Google Cloud NDBクライアントライブラリをインストール
    && pip install google-cloud-ndb

# プロジェクトのコピー
COPY . /app/

# 開発サーバーの起動コマンド
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
