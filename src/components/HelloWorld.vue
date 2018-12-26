<template>
  <div class="hello">
   	<div>
   		<a href="javascript:;">第一次使用</a>
   		<span>第二次使用</span>
   	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
	
	a{
		color: red;
		font-size: 30px;
	}
	span{
		color:gray;
		font-size: 36px;
	}
}
</style>
