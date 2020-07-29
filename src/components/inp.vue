<template>
  <div>
      <el-input :value="something" @input="sec($event)"></el-input>
  </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            something: this.value
        }
    },
    computed: {
    },
    methods: {
        sec(val) {
            this.something = val
            this.$emit('input', this.something)
            console.log(val)
        }
    }
}
</script>

<style>

</style>