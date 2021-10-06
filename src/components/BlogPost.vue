<template>
  <div>
      <div class="blog-wrapper">
          <div class="blog-content">
              <div>
                  <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
                  <h2 v-else>{{post.title}}</h2>
                  <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
                  <p v-else>{{post.blogHtml}}</p>
                  <router-link class="link link-light" v-if="post.welcomeScreen" to="#"></router-link>
                  <router-link else></router-link>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name:'blogpost',
    props:['post'],
}
</script>

<style lang="scss" scoped>

</style>