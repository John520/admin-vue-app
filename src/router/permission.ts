import isWhiteList from "@/config/white_list"
import router from "@/router"
import { getUserStore } from "@/store/model/user"
import { getToken } from "@/utils/cache/cookies"

router.beforeEach(async (to, _from, next) => {
    const userStore = getUserStore()
    const token = getToken()
    // 未登录
    if (!token) {
        if (isWhiteList(to)) {
            next()
        } else {
            next("/login")
        }
        return
    }
    // 已登录
    if (to.path === "/login") {
        return next("/")
    }



})