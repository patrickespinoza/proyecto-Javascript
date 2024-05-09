import { loginPostButtonsRenderDetail } from "./modules/mainpage/detectLogin";

let token = localStorage.getItem("token");

loginPostButtonsRenderDetail(token);