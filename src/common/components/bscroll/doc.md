# 如何做下拉刷新
    1、如果需要做下拉刷新必须要触发一个方法
    pullingDown:触发下拉刷新

    2、注意的是下拉刷新默认是不会执行的，需要做以下配置
        new BSscroll(".wrapper",{
            pullUpload:{
                threshold:距离底部的距离
            }
        }) 
    3、better-scroll默认帮我们做了性能的优化，当第一次数据加载完毕后