<template>
  <div class="list">
    <h1>Liste</h1>
    <form>
      <input type="text" v-model="newItem" placeholder="Enter item"></input>
      <input type="submit" value="Submit" @click.prevent="addItem">
    </form>
    <ul>
      <li v-for="item in items">
        <input type="checkbox" class="toggle" v-model="item.done">
        <span :class="{done: item.done}">
          {{item.name}}
          <button v-on:click="deleteItem(item)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newItem: '',
      }
    },
    computed: {
      items() {
        return this.$store.state.items;
      }
    },
    methods: {
      addItem: function () {
        if (this.newItem.match(/\S/)) {
          this.$store.commit('addItem', this.newItem);
        };
        this.newItem = '';
      },
      deleteItem: function (item) {
        let list = this.$store.state.items;
        this.$store.commit('deleteItem', list.indexOf(item));
      }
    },
  }

</script>

<style scoped>
  h1 {
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }

</style>
