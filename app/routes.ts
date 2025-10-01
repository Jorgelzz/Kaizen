import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/action/set-theme", "routes/action.set-theme.ts"),

    layout("routes/admin/adminLayout.tsx", [
        route("/dashboard" ,"routes/admin/dashboard.tsx"),
        route("/users" ,"routes/admin/users.tsx")
    ]),
] satisfies RouteConfig;
