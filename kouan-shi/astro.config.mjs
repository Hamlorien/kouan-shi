import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

  i18n: {
    // デフォルトの言語は日本語
    defaultLocale: 'ja',
    // サポートする言語のリスト
    locales: ['ja', 'en'],
  },

  // GitHub Pagesでサイトを公開するための設定
  site: 'https://Hamlorien.github.io', // 基本となるドメイン
  // 公開用ビルドの時だけリポジトリ名をbaseに設定し、ローカル開発時はルートパスにする
  base: process.env.NODE_ENV === 'production' ? '/kouan-shi' : '/',
});

