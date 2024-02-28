import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("@/views/index.vue"),
    redirect: "/workbench",
    meta: {
      title: "首页",
      showMenu: false,
      activeMenu: "/"
    },
    children: [
      {
        path: "/workbench",
        name: "workbench",
        component: () => import("@/views/workbench"),
        redirect: "/workbench/button",
        props: false,
        meta: {
          title: "工作台",
          icon: "el-icon-notebook-2",
          showMenu: true,
          activeMenu: "/workbench"
        },
        children: [
          {
            path: "button",
            name: "button",
            component: () => import("@/views/workbench/button.vue"),
            props: false,
            meta: {
              title: "按钮",
              icon: "el-icon-eleme",
              showMenu: true,
              activeMenu: "button"
            }
          },
          {
            path: "tag",
            name: "tag",
            component: () => import("@/views/workbench/tag.vue"),
            props: false,
            meta: {
              title: "标签",
              icon: "el-icon-postcard",
              showMenu: true,
              activeMenu: "tag"
            }
          }
        ]
      },
      {
        path: "/form",
        name: "form",
        component: () => import("@/views/form.vue"),
        props: false,
        meta: {
          title: "form表单",
          icon: "el-icon-edit-outline",
          showMenu: true,
          activeMenu: "/form"
        }
      },
      {
        path: "/table",
        name: "table",
        component: () => import("@/views/table.vue"),
        props: false,
        meta: {
          title: "table表格",
          icon: "el-icon-tickets",
          showMenu: true,
          activeMenu: "/table"
        }
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.VUE_APP_BASE_ROUTER,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
