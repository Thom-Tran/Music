"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export const FormLogin = () => {
  //giúp điều hướng
  const router = useRouter();
  
  const handleLogin = (event: any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if(email && password) {
      signInWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if(user) {
            router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

    return(
        <>
        <form className="mt-[30px]" onSubmit={handleLogin}>
          <div className="mb-[15px]">
            <label
             className="block mb-[5px] font-[600] text-[14px]"
             htmlFor="email">
             <span className="text-[white]">Email</span>
             <span className="text-[red] ml-[5px]">*</span>
             </label>

             <input
             type="email"
             name="email"
             placeholder="Ví dụ: levana@gmail.com"
             id="email"
             className="h-[50px] w-full bg-[white] rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
             required={true}/>
          </div>



          <div className="mb-[15px]">
            <label
             className="block mb-[5px] font-[600] text-[14px]"
             htmlFor="password">
             <span className="text-[white]">Mật Khẩu</span>
             <span className="text-[red] ml-[5px]">*</span>
             </label>

             <input
             type="password"
             name="password"
             id="password"
             className="h-[50px] w-full bg-[white] rounded-[6px] px-[16px] font-[600] text-[14px] outline-none"
             required={true}/>
          </div>
          <button
          type="submit"
          className="h-[50px] w-[535px] bg-[#00ADEF] rounded-[6px] px-[16px] font-[600] text-[14px] text-[white]">
            Đăng nhập
            </button>
        </form>
        </>
    )
}