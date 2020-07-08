<template>
    <div class="city_container" ref="cityContainer">
        <Alley-scroll ref="scroll">
            <div class="city_body">
            <!-- 热门城市 -->
            <div class="hot_city">
                <div class="hot_title">热门城市</div>
                <div class="hot_city_list">
                    <div class="hot_city_name" v-for="(item,index) in hotCity " :key="index">{{ item.nm }} </div>
                </div>
            </div>
            <!-- 城市列表 -->
            <div class="city_list" ref="cityList">
                <div class="city_list_ite m" v-for="(item) in cityList" :key="item.id">
                    <div class="city_title_letter">{{ item.index }} </div>
                    <div tag="div" @tap="handleCityTo(child)" class="city_list_name">
                        <v-touch tag="div"
                         @tap="handleCityTo(child)" 
                         class="city_list_name_item" 
                         v-for="(child) in item.list" 
                         :key="child.id">{{ child.nm }} 
                         </v-touch>
                    </div>
                </div>
            </div>
        </div>
        </Alley-scroll>
        <!-- 城市列表下标 -->
        <div class="city_list_index">
            <v-touch tag="div" @tap="handleTo(index)" class="index_item" v-for="(item,index) in cityList" :key="item.id">{{ item.index }} </v-touch>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name:"City",
    created(){
        if(!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))){
            this.$store.dispatch("city/handleGetCityList");
        }
    },
    computed:{
        ...mapState({
            hotCity:state=>state.city.hotCity,
            cityList:state=>state.city.cityList
        })
    },
    methods:{
        handleTo(index){
            console.log(index)
            let t = this.$refs.cityList.querySelectorAll(".city_title_letter")[index].offsetTop;
            // this.$refs.cityContainer.scrollTop = t;
            // console.log(t)
            this.$refs.scroll.handleScrollTo(-t)
        },
        handleCityTo(city){
            let path = this.$route.query.path || "/movie"
            this.$router.push(path)
            this.$store.commit("city/handleUpdataCityInfo",city)
        }
    }
}
</script>

<style scoped>
.city_container{
    height: 100%;
    overflow: auto;
}
.city_body{
    background:#ebebeb;
}

.hot_title,.city_title_letter{
    line-height: .6rem;
    padding-left:.26rem;
    font-size: .28rem; 
}
.hot_city_list,.city_list_name{
    width: 96%;
    background: #f5f5f5;
    padding-bottom: .16rem;
    padding-right: .6rem;
    display: flex;
    flex-wrap:wrap; 
}
.hot_city_name{
    margin-top: .3rem;
    margin-left: .26rem;
    width: 1.9rem;
    height: .66rem;
    background: #fff;
    text-align: center;
    line-height: .66rem;
    font-size: .28rem;
    border: 2px solid #e6e6e6;
}
.city_list>div{
    width: 100%;
}
.city_list_name_item{
    line-height: .9rem;
    margin-left: .26rem;
    width: 100%;
    border-bottom: 2px solid #e6e6e6;
}
.city_list_index{
    position: fixed;
    right: 0;
    top:1rem;
}
.city_list_index>div{
    padding:.1rem .05rem;
    font-size: .25rem;
}
</style>