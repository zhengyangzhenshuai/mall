<template>
    <tab-bar>
      <tab-bar-item path="/home"  >
          <img slot="item-icon" src="~assets/img/home/home.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/home/home_active.svg" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
          <img slot="item-icon" src="~assets/img/detail/category.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/detail/category_active.svg" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar" >
          <img slot="item-icon" src="~assets/img/cart/shopcart.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/cart/shopcart_active.svg" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
          <img slot="item-icon" src="~assets/img/profile/profile.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/profile/profile_active.svg" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }

}
</script>

<style scoped>

</style>