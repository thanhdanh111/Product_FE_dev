import Home from "../../page/home"
import Login from "../../page/login"
import Register from "../../page/register"



export const nonAuthenticantedRouter = [
    {
        isExact: true,
        path: '/login',
        component: Login,
    },
    {
        isExact: true,
        path: '/register',
        component: Register,
    }
]

export const AuthenticantedRouter = [
    {
        isExact: true,
        path: '/home',
        component: Home,
    }
]