import Vue from "vue";
import VueRouter from "vue-router";
import MessageView from "../views/message/MessageView.vue";
import ContactsView from "../views/contacts/ContactsView.vue";
import DocumentView from "../views/docment/DocumentView.vue";
import MineView from "../views/mine/MineView.vue";
import WorkspaceView from "../views/workspace/WorkspaceView.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "MessageView",
    component: MessageView,
  },
  {
    path: "/contacts",
    name: "ContactsView",
    component: ContactsView,
  },
  {
    path: "/mine",
    name: "MineView",
    component: MineView,
  },
  {
    path: "/document",
    name: "DocumentView",
    component: DocumentView,
  },
  {
    path: "/workspace",
    name: "WorkspaceView",
    component: WorkspaceView,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
