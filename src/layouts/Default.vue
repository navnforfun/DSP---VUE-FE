<template>
	<div class="bg-myRed-600">
		<div
			class="px-8 h-[114px] mx-auto flex justify-between items-center text-myYellow-300 font-beVnPro"
		>
			<div class="">
				<ul class="flex items-center">
					<li
						class="text-myYellow-400 font-westgate text-6xl font-bold pr-5"
					>
						<a href="">
							DSP</a>
					</li>
					<li class="px-5 separate">Trang chủ</li>
					<li class="px-5 separate">Giới thiệu</li>
					<li class="px-5 separate">Trợ giúp</li>
				</ul>
			</div>
			<div class="">
				<div class=""></div>
				<div class="separate pl-5">
					<a href="http://localhost:8080/login"> Vui lòng đăng nhập</a>
				</div>
			</div>
		</div>
	</div>
	<slot />
</template>
<style scoped>
.separate {
	border-style: solid;
	border-color: #e2c385;
	border-width: 0 0 0 1px;
	height: 25px;
}
</style>
