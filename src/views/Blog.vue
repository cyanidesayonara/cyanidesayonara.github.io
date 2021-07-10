<template>
  <div class="blog">
    <h1>blog</h1>
    <div>
      <div v-for="section in blogs" :key="section.year">
        <h2>{{ section.year }}</h2>
        <div v-for="entry in section.entries" :key="entry.id">
          <div>
            <h3
              @click="
                $router.push({ name: `/blog/${section.year}/${entry.id}` })
              "
            >
              {{ entry.title }}
              <span>{{ entry.date }}</span>
            </h3>
            <p>{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BlogEntries from "@/blogs/index.json";
interface Entry {
  id: string;
  date: string;
  title: string;
  description: string;
}

interface BlogSection {
  year: string;
  entries: Entry[];
}

export default {
  name: "blog",
  computed: {
    blogs(): BlogSection[] {
      return BlogEntries;
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  margin-top: 0.4rem;
}
</style>
