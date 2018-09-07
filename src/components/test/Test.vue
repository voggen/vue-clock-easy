<template>
  <div>
    {{dateFormat}}
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      
    }
  },
  computed:{
  	dateFormat(){
  		const d = new Date();
  		const y = d.getFullYear();
  		const m = d.getMonth() + 1;
  		const dt = d.getDate();
  		return y+'年'+m+'月'+dt+'日'
  	}
  }
}
</script>

<style  scoped>

</style>


