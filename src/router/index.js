import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 0)
    })
  },
  routes: [
    {
      path: "/hello",
      name: "Home",
      component: () => import("../components/HelloWorld.vue"),
      meta: {
        title: "商城"
      }
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("../components/Test.vue"),
      meta: {
        title: "test"
      }
    }
   ]
 })

export default router
