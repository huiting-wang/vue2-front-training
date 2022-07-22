import Layout from '@/components/layout/';

/**
 * 路由鍵值註解
 *
 * name: '路由名稱'                路由名稱可利用於 <keep-alive> (如有配置必須設定)
 * patch: '路徑'                  路徑名稱
 * redirect: '轉導路徑'            路由轉導
 * component: '視圖元件'           視圖元件位置
 * props: true                   是否可傳遞參數
 * meta : {
    title: '頁面抬頭名稱'          路由頁面抬頭名稱
    icon: '圖示名稱'              Material Design Icons
  }
 */

export const routes = [
  {
    // 首頁
    name: 'homePage',
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'rulesMarkdown',
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
        meta: {
          icon: 'home',
          title: '團隊開發規範',
        },
      },
      {
        name: 'subjectMarkdown',
        path: 'subject',
        component: () => import('@/views/SubjectPage.vue'),
        meta: {
          icon: 'information',
          title: '主題資訊',
        },
      },
      {
        name: 'frontMarkdown',
        path: 'front-end-feature',
        component: () => import('@/views/FrontFeature.vue'),
        meta: {
          icon: 'function-variant',
          title: '前台功能需求',
        },
      },
      {
        name: 'BackEndMarkdown',
        path: 'back-end-feature',
        component: () => import('@/views/BackFeature.vue'),
        meta: {
          icon: 'function-variant',
          title: '後台功能需求',
        },
      },
    ],
  },
];
