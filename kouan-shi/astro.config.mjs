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
  // 独自ドメインに変更
  site: 'https://www.koan-shi.com',
  // 独自ドメインではリポジトリ名は不要になるため、baseは常にルートパスにする
  base: '/',
});
