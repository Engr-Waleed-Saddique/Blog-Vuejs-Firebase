<template>
  <div class="home">
      <BlogPost :post="welcomeScreen"></BlogPost>
      <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"></BlogPost>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
    name:"Home",
    components:{
        BlogPost
    },
    data(){
        return {
            welcomeScreen:{
                title:"Welcome!",
                blogPost:"Articles on technology, health, education",
                welcomeScreen:true,
                photo:"coding"
            },
            sampleBlogPost:[
                {
                title:"Article 1",
                blogHtml:"Here is the content of blog.",
                blogCoverphoto:"cover_photo"
                },
                {
                title:"Article 2",
                blogHtml:"Here is the content of blog.",
                blogCoverphoto:"cover_photo"
                }
            ],    
        }
    }
}
</script>

<style>

</style>