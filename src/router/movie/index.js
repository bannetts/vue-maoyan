export default {
    path:"/movie",
    component:_=>import("@pages/movie"),
    name:"movie",
    meta:{
      flag:true,
    },
    children:[
        {
            path:"/movie",
            redirect:"/movie/movienow"
        },
        {
          path:"movienow",
          component:_=>import("@components/movieNow"),
          name:"movienow"  ,
          meta:{
            flag:true,
          },
        },
        {
          path:"moviecomming",
          component:_=>import("@components/movieComming"),
          name:"moviecomming"  ,
          meta:{
            flag:true,
          },
        },

    ]
}