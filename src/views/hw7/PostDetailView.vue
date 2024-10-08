<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Post {
  id: number
  title: string
  content: string
}

const route = useRoute()
const posts: Post[] = [
  {
    id: 1,
    title: 'Bài viết 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati veniam eius ipsa impedit nostrum delectus corporis id aliquid eos nulla debitis, distinctio eum unde expedita velit? Qui, et ad.Earum, dolore? Iure unde nulla quisquam adipisci cum? Placeat dignissimos, pariatur quas corrupti repellendus labore excepturi cupiditate, nostrum soluta neque nulla quod voluptate praesentium similique aspernatur possimus modi, nam eius!Minima, doloremque repellendus nobis consectetur modi delectus numquam neque animi repudiandae saepe nesciunt quia perspiciatis quidem enim deserunt sit quos voluptatum cumque magnam distinctio expedita impedit est obcaecati culpa? Assumenda.Vero fugiat vitae ducimus, beatae ratione iusto delectus! Repellat atque quod sint dolore, iusto soluta perferendis inventore mollitia aliquid consequuntur vitae accusamus laboriosam blanditiis voluptatum. Repudiandae et porro dolorum facilis.Excepturi libero deleniti molestias earum doloribus itaque maiores quaerat incidunt, quidem saepe architecto sapiente. Aspernatur dolores labore dolorem, similique dicta ratione et velit ea, recusandae minima asperiores doloremque fugit assumenda.Dolorum, accusantium fugit quia nemo enim nostrum repudiandae distinctio facilis et, assumenda, quos a modi nam obcaecati impedit laboriosam iste dolores officia soluta vel id. Aspernatur reiciendis id iure architecto.Eligendi magnam laboriosam animi quos facere suscipit! Obcaecati doloremque facere explicabo perspiciatis itaque! Pariatur libero ab beatae nemo similique sunt sint omnis ipsam! Numquam reiciendis praesentium cum amet totam incidunt.Tenetur animi odit blanditiis hic et. Animi, veniam doloremque assumenda atque ullam deserunt blanditiis ipsum sed temporibus officia molestias explicabo accusamus similique asperiores? Repudiandae debitis magnam quod, porro doloremque eveniet.Iure enim tempore illum corrupti a sapiente ratione accusantium, vitae corporis dolorum esse accusamus animi quae repudiandae quod, id fugiat! Molestiae voluptas quis totam odio! Dignissimos aliquam ipsam molestiae fuga.Excepturi, impedit dolores iusto voluptatum maxime laboriosam inventore tenetur deserunt optio illo earum dolor praesentium fuga vero esse iste voluptatibus, ad quos rem numquam, in nemo aliquam. Provident, voluptate delectus.Similique nisi vitae consectetur impedit perspiciatis, eius doloribus repellendus iure repellat tempora dicta mollitia animi reiciendis nostrum deleniti illum nihil adipisci molestiae id ex cumque aut voluptas dignissimos. Laudantium, illo!Esse explicabo omnis aperiam quidem dignissimos officia ab soluta hic quia quod reprehenderit, ratione, ea quaerat culpa delectus quibusdam suscipit provident odit. Rem, exercitationem. Quos nostrum unde excepturi expedita nemo!Error quas ullam expedita corrupti doloribus praesentium culpa sapiente. Modi laudantium eligendi iure distinctio unde ratione praesentium incidunt illum perferendis enim, quis soluta deleniti, expedita quisquam et sit dolorum? Aliquam.Voluptates ex laudantium, autem veritatis quis consectetur dicta dolorum ea necessitatibus quasi optio magnam libero, perspiciatis maiores blanditiis minus illo dolore quia deserunt incidunt molestias numquam laborum iusto nam? Magni!'
  },
  {
    id: 2,
    title: 'Bài viết 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati veniam eius ipsa impedit nostrum delectus corporis id aliquid eos nulla debitis, distinctio eum unde expedita velit? Qui, et ad.Earum, dolore? Iure unde nulla quisquam adipisci cum? Placeat dignissimos, pariatur quas corrupti repellendus labore excepturi cupiditate, nostrum soluta neque nulla quod voluptate praesentium similique aspernatur possimus modi, nam eius!Minima, doloremque repellendus nobis consectetur modi delectus numquam neque animi repudiandae saepe nesciunt quia perspiciatis quidem enim deserunt sit quos voluptatum cumque magnam distinctio expedita impedit est obcaecati culpa? Assumenda.Vero fugiat vitae ducimus, beatae ratione iusto delectus! Repellat atque quod sint dolore, iusto soluta perferendis inventore mollitia aliquid consequuntur vitae accusamus laboriosam blanditiis voluptatum. Repudiandae et porro dolorum facilis.Excepturi libero deleniti molestias earum doloribus itaque maiores quaerat incidunt, quidem saepe architecto sapiente. Aspernatur dolores labore dolorem, similique dicta ratione et velit ea, recusandae minima asperiores doloremque fugit assumenda.Dolorum, accusantium fugit quia nemo enim nostrum repudiandae distinctio facilis et, assumenda, quos a modi nam obcaecati impedit laboriosam iste dolores officia soluta vel id. Aspernatur reiciendis id iure architecto.Eligendi magnam laboriosam animi quos facere suscipit! Obcaecati doloremque facere explicabo perspiciatis itaque! Pariatur libero ab beatae nemo similique sunt sint omnis ipsam! Numquam reiciendis praesentium cum amet totam incidunt.Tenetur animi odit blanditiis hic et. Animi, veniam doloremque assumenda atque ullam deserunt blanditiis ipsum sed temporibus officia molestias explicabo accusamus similique asperiores? Repudiandae debitis magnam quod, porro doloremque eveniet.Iure enim tempore illum corrupti a sapiente ratione accusantium, vitae corporis dolorum esse accusamus animi quae repudiandae quod, id fugiat! Molestiae voluptas quis totam odio! Dignissimos aliquam ipsam molestiae fuga.Excepturi, impedit dolores iusto voluptatum maxime laboriosam inventore tenetur deserunt optio illo earum dolor praesentium fuga vero esse iste voluptatibus, ad quos rem numquam, in nemo aliquam. Provident, voluptate delectus.Similique nisi vitae consectetur impedit perspiciatis, eius doloribus repellendus iure repellat tempora dicta mollitia animi reiciendis nostrum deleniti illum nihil adipisci molestiae id ex cumque aut voluptas dignissimos. Laudantium, illo!Esse explicabo omnis aperiam quidem dignissimos officia ab soluta hic quia quod reprehenderit, ratione, ea quaerat culpa delectus quibusdam suscipit provident odit. Rem, exercitationem. Quos nostrum unde excepturi expedita nemo!Error quas ullam expedita corrupti doloribus praesentium culpa sapiente. Modi laudantium eligendi iure distinctio unde ratione praesentium incidunt illum perferendis enim, quis soluta deleniti, expedita quisquam et sit dolorum? Aliquam.Voluptates ex laudantium, autem veritatis quis consectetur dicta dolorum ea necessitatibus quasi optio magnam libero, perspiciatis maiores blanditiis minus illo dolore quia deserunt incidunt molestias numquam laborum iusto nam? Magni!'
  },
  {
    id: 3,
    title: 'Bài viết 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati veniam eius ipsa impedit nostrum delectus corporis id aliquid eos nulla debitis, distinctio eum unde expedita velit? Qui, et ad.Earum, dolore? Iure unde nulla quisquam adipisci cum? Placeat dignissimos, pariatur quas corrupti repellendus labore excepturi cupiditate, nostrum soluta neque nulla quod voluptate praesentium similique aspernatur possimus modi, nam eius!Minima, doloremque repellendus nobis consectetur modi delectus numquam neque animi repudiandae saepe nesciunt quia perspiciatis quidem enim deserunt sit quos voluptatum cumque magnam distinctio expedita impedit est obcaecati culpa? Assumenda.Vero fugiat vitae ducimus, beatae ratione iusto delectus! Repellat atque quod sint dolore, iusto soluta perferendis inventore mollitia aliquid consequuntur vitae accusamus laboriosam blanditiis voluptatum. Repudiandae et porro dolorum facilis.Excepturi libero deleniti molestias earum doloribus itaque maiores quaerat incidunt, quidem saepe architecto sapiente. Aspernatur dolores labore dolorem, similique dicta ratione et velit ea, recusandae minima asperiores doloremque fugit assumenda.Dolorum, accusantium fugit quia nemo enim nostrum repudiandae distinctio facilis et, assumenda, quos a modi nam obcaecati impedit laboriosam iste dolores officia soluta vel id. Aspernatur reiciendis id iure architecto.Eligendi magnam laboriosam animi quos facere suscipit! Obcaecati doloremque facere explicabo perspiciatis itaque! Pariatur libero ab beatae nemo similique sunt sint omnis ipsam! Numquam reiciendis praesentium cum amet totam incidunt.Tenetur animi odit blanditiis hic et. Animi, veniam doloremque assumenda atque ullam deserunt blanditiis ipsum sed temporibus officia molestias explicabo accusamus similique asperiores? Repudiandae debitis magnam quod, porro doloremque eveniet.Iure enim tempore illum corrupti a sapiente ratione accusantium, vitae corporis dolorum esse accusamus animi quae repudiandae quod, id fugiat! Molestiae voluptas quis totam odio! Dignissimos aliquam ipsam molestiae fuga.Excepturi, impedit dolores iusto voluptatum maxime laboriosam inventore tenetur deserunt optio illo earum dolor praesentium fuga vero esse iste voluptatibus, ad quos rem numquam, in nemo aliquam. Provident, voluptate delectus.Similique nisi vitae consectetur impedit perspiciatis, eius doloribus repellendus iure repellat tempora dicta mollitia animi reiciendis nostrum deleniti illum nihil adipisci molestiae id ex cumque aut voluptas dignissimos. Laudantium, illo!Esse explicabo omnis aperiam quidem dignissimos officia ab soluta hic quia quod reprehenderit, ratione, ea quaerat culpa delectus quibusdam suscipit provident odit. Rem, exercitationem. Quos nostrum unde excepturi expedita nemo!Error quas ullam expedita corrupti doloribus praesentium culpa sapiente. Modi laudantium eligendi iure distinctio unde ratione praesentium incidunt illum perferendis enim, quis soluta deleniti, expedita quisquam et sit dolorum? Aliquam.Voluptates ex laudantium, autem veritatis quis consectetur dicta dolorum ea necessitatibus quasi optio magnam libero, perspiciatis maiores blanditiis minus illo dolore quia deserunt incidunt molestias numquam laborum iusto nam? Magni!'
  }
]

const post = ref<Post | null>(null)

onMounted(() => {
  const postId = Number(route.params.id)
  post.value = posts.find((p) => p.id === postId) || null
})
</script>

<template>
  <div>
    <h1>Chi tiết bài viết</h1>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
    <div v-else>
      <PostNotFound />
    </div>
  </div>
</template>

<style scoped></style>
