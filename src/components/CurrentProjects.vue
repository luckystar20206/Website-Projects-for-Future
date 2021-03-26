

<script>
import ActiveProjects from "@/components/ActiveProjects";
export default {
  name: "CurrentProjects",
  data() {
    return {
      projects: ActiveProjects.data().projects,
      page: 1,
      sortBy: 'created',
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
  },
  methods:{
    import: ActiveProjects.methods,
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
  }
}
</script>

<style scoped>

</style>