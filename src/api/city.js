import http from "@utils/request";

export const cityApi = ()=>http({
    methods:"get",
    url:"/api/cityList"
})