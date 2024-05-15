import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/views/Home.vue";
import TestPage from "@/components/views/TestPage.vue";

// 라우터 설계
const routes = [
    {path: '/', component: Home},
    {path: '/test', component: TestPage}
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

export {router}
