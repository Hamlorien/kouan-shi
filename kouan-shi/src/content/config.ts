// Astroのコンテンツ管理機能に必要な設定ファイルです
import { defineCollection, z } from 'astro:content';

// 'scriptures'という名前のコレクション（経典の集まり）を定義します
const scriptureCollection = defineCollection({
  type: 'content', // Markdownファイルなどのコンテンツ
  schema: z.object({
    // 各Markdownファイルの先頭に書くことができる情報（任意）
    title: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  'scriptures': scriptureCollection,
};
