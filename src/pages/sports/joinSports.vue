<template>
	<div>
			<div class="panel">
					<sportsJoinList
						v-for="list in lists"
						:key="list.sportsId" 
						:list="list"
						@click.native="choose(list.sportsId)"
						:class="activeIndex == list.sportsId? 'list-actived':''"
					></sportsJoinList>
					<div style="height:11vh;width:100vw"></div>
				
			</div> 
			<bottom-bar>
				<button class="btn create" @click="toCreateSports">Create Sports</button>
				<button :class="['btn']" @click="joinSports">Join Sports</button>
			</bottom-bar>
	</div>            
</template>

<script>
import store from "../../store/index";
import sportsTop from "../../components/sportsTop";
import sportsJoinList from "../../components/sportsJoinList";
import bottomBar from "../../components/bottomBar";

export default {
  props: ["type"],
  data() {
	return {
	  activeIndex: 0,
	  choosed: false,
	  lists: []	 
	};
  },
  methods: {
	choose(index) {
	  this.activeIndex = index;
	  this.$emit("listenToChoose", true);
	  console.log(this.activeIndex);
	},
	toCreateSports() {
	  this.$router.push({ path: "./sports/createSports" });
	},
	getLists() {
	  var _this = this;

	  //http://www.littlegray.xin:8801
	  this.$http
		.get("./api/waiting_list", {
		  params: {
			type: _this.type
		  }
		})
		.then(function(res) {
		  console.log(res.data);
		  // data = JSON.parse(res.data);
		  _this.lists = res.data;
		})
		.catch(function(error) {
		  console.log(error);
		});
	},
	joinSports() {
	  var userId = this.$store.state.userId;
	  var sportsId = this.activeIndex;
	  if (!userId) {
		this.$store.commit('on','请先登录'); 
		this.$router.push('/login');			
	  }
	  var _this = this;

	  //http://www.littlegray.xin:8801
	  this.$http
		.get("./api/join", {
		  params: {
			userId: userId,
			sportsId: sportsId
		  }
		})
		.then(function(res) {
		  console.log(res.data);
		  // data = JSON.parse(res.data);
		  if (res.data.code == "200") {
			console.log("加入成功！");       
			
			_this.$store.commit("yes");
			setTimeout(function() {
			  _this.$store.commit("hide");
			  _this.$router.push("./home");
			}, 1500);
		  } else {
			console.log("加入失败！");
			_this.$store.commit("no");
			setTimeout(function() {
			  _this.$store.commit("hide");
			  _this.activeIndex = 0;              
			}, 1500);
		  }
		})
		.catch(function(error) {
		  console.log(error);
		});
	}
  },
  created() {
	this.getLists();
  },
  watch: {
	type: function(newType, oldType) {
	  this.getLists();
	}
  },
  components: {
	sportsTop,
	sportsJoinList,
	bottomBar
  }
};
</script>

<style scoped>
.panel {
  overflow-y: scroll;
  height: 65vh;
  background: #fff;
}
</style>