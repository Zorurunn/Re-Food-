"use client";
import { CustomInput } from "@/components ";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        router.push("/home");
      }}
    >
      go home
    </div>
  );
}

// const [value, setValue] = useState("");
// const handleChange = (
//   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   event.preventDefault();
//   setValue(event.target.value);
// };
// const [isDisabled, setIsDisabled] = useState(false);
// const error = true;
// return (
//   <div>
//     <CustomInput
//       label={"E-mail"}
//       value={value}
//       handleChange={handleChange}
//       type="password"
//     />
//     <button
//       onClick={() => {
//         setIsDisabled((prev) => !prev);
//       }}
//     >
//       Disable Input
//     </button>
//   </div>
// );
