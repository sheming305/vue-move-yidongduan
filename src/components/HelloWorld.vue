<template>
	<div class="hello">
		<div>
			<a href="javascript:;">第一次使用</a>
			<span>第二次使用</span>
			<div class="md-example-child md-example-child-button md-example-child-button-0">
				<md-button @click='searchAxios'>{{name}}</md-button>
				<md-button disabled>Primary Disabled</md-button>
			</div>
		</div>
		  <div class="md-example-child md-example-child-steps md-example-child-steps-4">
    <md-steps
      :steps="steps"
      :current="currentStep">
    </md-steps>
  </div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				name: 111,
				 steps: [
        {
          name: '登录',
        },
        {
          name: '开通',
        },
        {
          name: '验证',
        },
        {
          name: '成功',
        },
      ],
      currentStep: 0,
			}
		},
		methods: {
			searchAxios() {
				this.$axios.get("/department/tree").then(res => {
					if(res.status === 0) {
						console.log(res)
//						this.departData = res.result
					}
//					this.loading = false
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	h1,
	h2 {
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
	
	.hello {
		a {
			color: red;
			font-size: 30px;
		}
		span {
			color: gray;
			font-size: 36px;
		}
	}
</style>