<template>
	<div class="bg-myRed-600 flex justify-center pb-20 h-full">
		<div class="bg-slate-50 rounded-md mt-12 relative">
			<div class="bg-[url('../Images/bglogin.png')] h-[1000px] w-[380px] md:w-[600px] lg:w-[900px]">
				<h3
					class="font-danhDa text-myRed-600 text-6xl text-center pt-4 pb-12"
				>
					Đăng ký
				</h3>
				
			
				<div class="font-beVnPro w-4/5 mx-auto mt-8">
					<p class="mb-2 text-myRed-600 text-lg">Tên đăng nhập</p>
					<input
						type="text"
						placeholder="Nhập tên đăng nhập"
						class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
					/>
				</div>
				<div class="font-beVnPro w-4/5 mx-auto mt-8">
					<p class="mb-2 text-myRed-600 text-lg">Họ tên</p>
					<input
						type="text"
						placeholder="Họ tên"
						class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
					/>
				</div>
				<div class="font-beVnPro w-4/5 mx-auto mt-8">
					<p class="mb-2 text-myRed-600 text-lg">Mật khẩu</p>
					<input
						type="text"
						placeholder="Nhập mật khẩu"
						class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
					/>
				</div>
				<div class="font-beVnPro w-4/5 mx-auto mt-8">
					<p class="mb-2 text-myRed-600 text-lg">Xác nhận mật khẩu</p>
					<input
						type="text"
						placeholder="Xác nhận mật khẩu"
						class="text-slate-300 w-full h-14 ps-4 outline-1 outline-stone-400 border-[1px] border-stone-300 border-solid rounded-md text-stone-900"
					/>
				</div>
				
				<div class="font-beVnPro w-3/5 mt-8 mx-auto">
					
					<button
						class="w-full bg-myRed-600 text-stone-50 h-14 rounded-md text-3xl font-bold my-3"
					>
						ĐĂNG KÝ
					</button>
					<div class="text-right md:flex justify-end">
						<p>
							Bạn chưa đã tài khoản?
							
						</p>
						<a href="http://localhost:8080/login" class="decoration-1 underline"
								>Đăng nhập ngay</a
							>	
					</div>
				</div>
			</div>
			<div class="absolute bottom-2 right-2 ">
			<img src="../assets/Images/hoasen.png" class="h-52" alt="" srcset="">
			</div>
		</div>
		<!-- xin nào -->
	</div>
</template>
