<template>
	<view>
		<view class="uni-margin-wrap">
			<!-- indicator-dots indicator-active-color="#15efe5" autoplay -->
			<swiper class="swiper" indicator-dots indicator-active-color="#229DDD" autoplay >
				<swiper-item>
					<image mode="scaleToFill" src="../../static/index/5efb164aa3886dc2be4ae230ad603d8.jpg" class="swiper-image"></image>
				</swiper-item>
				<swiper-item>
					<image   mode="scaleToFill" src="../../static/index/8e5e8f7163eea82798f3bcf06994243.jpg" class="swiper-image"></image>
				</swiper-item>
				<swiper-item>
					<image  mode="scaleToFill" src="../../static/index/95982ddc8600121842d31713ac7fed7.jpg"class="swiper-image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<!-- 标题卡片模式 -->
			<uni-card 
			    :is-shadow="true"
			>
			<view class="nav">
				<view class="nav_item">
					<view>
						<uni-icons type="chatboxes-filled" size="30" color="#fff"></uni-icons>
					</view>
					<text>
						预约挂号
					</text>
				</view>
				<view class="nav_item">
					<view>
						<uni-icons type="location-filled" size="30" color="#fff"></uni-icons>
					</view>
					<text>
						签到取号
					</text>
				</view>
				<view class="nav_item">
					<view>
						<uni-icons type="person-filled" size="30" color="#fff"></uni-icons>
					</view>
					<text>
						就诊叫号
					</text>
				</view>
				<view class="nav_item">
					<view>
						<uni-icons type="shop" size="30" color="#fff"></uni-icons>
					</view>
					<text>
						药品商城
					</text>
				</view>
			</view>
				
			    
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">

.uni-margin-wrap {
  
 height:100%;
  margin:0 0rpx;
 }
 .swiper {
  height: 300rpx;
  .swiper-item {
   display: block;
   line-height: 300rpx;
   text-align: center;
   
  }
  /*图片宽度设置100% ，高度300upx（设为auto图片无法显示）*/
  .swiper-image{  
      width:100%;  
      height:100%; 
  } 
  
 }
 .uni-card{
 	 width: 100% !important;
 	 margin: 5px 0px !important;
 }
 .nav{
	 display: flex;
	 flex-wrap: wrap;
	 text-align: center;
	 .nav_item{
		 margin: 0px auto;
		 view{
			 background-color:#229DDD;
			 width: 130rpx;
			 height: 130rpx;
			 border-radius: 65rpx;
			 margin: 10rpx auto;
			 line-height: 130rpx;
			 color: #FFFFFF;
		 }
		 text{
			 font-size: 30rpx;
		 }
	 }
 }
 
</style>
