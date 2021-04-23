<template>
  <div class="hello">
  	<div>Hello</div>
  	<app-footer></app-footer>
  </div>
</template>


<script type="text/javascript">

	import AppFooter from "./Footer.vue"
	
	export default {
		components: {
			AppFooter
		}
	}

</script>

<style>
.hello {
  color: red;
}
</style>
