import { getStatus } from "./status.js";
import {getAllMenu, getOneMenu, deleteMenu, postMenu} from "./menuRoutes.js";
import {
  deleteExample,
  getExample,
  getExamples,
  patchExample,
  postExample,
} from "./example.js";

export default [
  {
    method: "GET",
    path: "/status",
    isPublic: true,
    cbs: [getStatus],
  },
  {
    method: "GET",
    path: "/example/all",
    cbs: [getExamples],
  },
  {
    method: "GET",
    path: "/example/:id",
    cbs: [getExample],
  },
  {
    method: "POST",
    path: "/example",
    cbs: [postExample],
  },
  {
    method: "PATCH",
    path: "/example",
    cbs: [patchExample],
  },
  {
    method: "DELETE",
    path: "/example/:id",
    cbs: [deleteExample],
  },
  {
    method: "GET",
    path: "/menus/:id",
    cbs: [getOneMenu],
  },
  {
    method: "GET",
    path: "/menus/all",
    cbs: [getAllMenu],
  },
  {
    method: "POST",
    path: "/menu",
    cbs: [postMenu],
  },
  {
    method: "DELETE",
    path: "/menu/:id",
    cbs: [deleteMenu],
  }
];