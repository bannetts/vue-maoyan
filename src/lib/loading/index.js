import LoadingView from "./index.vue";
import Vue from "vue"

class JSloading{
    constructor(){
        let loadingFn = Vue.extend(LoadingView)
        let loadingVm =  new loadingFn({
            el:document.createElement("div")
        })
    }
}

/**
 * vue.extend实现继承
 * 
 */