<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"></BlogPost>
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    ></BlogPost>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          ></BlogCard>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post.Register for your account today.</h2>
        <router-link class="router-button" to="#">
          Register for Blogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "Articles on technology, health, education",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "Article 1",
          blogHtml: "Here is the content of blog.",
          blogCoverphoto: "beautiful-stories",
        },
        {
          title: "Article 2",
          blogHtml: "Here is the content of blog.",
          blogCoverphoto: "designed-for-everyone",
        },
      ],
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "May 1,2021",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "May 1,2021",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "May 1,2021",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "May 1,2021",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>