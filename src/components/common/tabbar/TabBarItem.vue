<template>
        <div class="tab-bar-item" @click="itemClick"> 
            <div v-if="!isactive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :style="activecolor"><slot name="item-text"></slot></div>
            
        </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path: String,
        active_color: {
            type: String,
            default: 'red'
            
        }
    },
    data() {
        return {
            // isactive: true
        }
    },
     computed: {
        isactive() {
            //this.$route.path是当前活跃的path，然后判断传入大的path是否是当前活跃的path
            return this.$route.path.indexOf(this.path) !== -1
        },
        activecolor() {
            return this.isactive? {color:this.active_color}:{}
        }
    },
    methods: {
        itemClick() {
            return this.$router.push(this.path)
        },
   
    }
}
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
 }
 .tab-bar-item img {
     height: 24px;
     width: 24px;
     margin-top: 3px;
     vertical-align: middle;
     margin-bottom: 2px;
 }

</style>