import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Errorpage from './components/ErrorPage.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';


const routes = [
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ]
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/:anything(.*)",
    component: Errorpage,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

// velog 정리
// const routes = [
//   {
//     path: "/mypage",
//     component: MyPage,
//     beforeEnter: ()=>{
//       if (로그인했냐 == false) {
//         return '/login'
//       }
//     }
//   }
// ];

// const router = createRouter({ 가보자고 })
// router.beforeEach((to, from)=> {
//   //페이지 변경 전에 실행할 코드
// })

// beforeRouteEnter(){}
// beforeRouteUpdate(){}