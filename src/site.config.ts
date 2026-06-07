/** Site configuration — edit this file to customize your blog. */
export const site = {
  /** Production URL (no trailing slash). */
  baseUrl: 'https://ivanilin.ru',
  /** GitHub Pages subpath, e.g. "/repo-name". Leave empty for root deploy. */
  repoSubpath: '',
  title: 'Иван Ильин',
  description:
    'Личный блог: заметки, мысли, эксперименты.',
  author: 'Иван Ильин',
  /** UI language: "zh-CN" | "en" */
  language: 'ru' as 'zh-CN' | 'en' | 'ru',
  maxPostsOnIndex: 5,
  copyright: {
    enable: true,
    type: 'CC_BY_NC_SA_4_0' as const,
    customText: '',
    showLicenseIcon: true,
    showStandardFormat: true,
    additionalNote: '',
  },
} as const;

export type SiteConfig = typeof site;
