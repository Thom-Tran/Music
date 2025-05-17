/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardItem } from "@/app/components/card/CardItem";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục bài hát",
  description: "Project nghe nhạc trực tuyến",
};

export default function CategoryPage() {
  const dataFinal: any[] = [];
  const categoryRef = ref(dbFirebase, 'categories');
  onValue(categoryRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      dataFinal.push(
        {
          id: key,
          image: data.image,
          title: data.title,
          description: data.description,
          link: `/categories/${key}`
        }
      );
    })
  });

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Mục Bài Hát" className=""/>
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataFinal.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}


// "use client";
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { CardItem } from "@/app/components/card/CardItem";
// import { Title } from "@/app/components/title/Title";
// import { dbFirebase } from "@/app/firebaseConfig";
// import { onValue, ref } from "firebase/database";

// export default function CategoryPage() {
//   const [dataFinal, setDataFinal] = useState<any[]>([]);

//   // Hàm load từ localStorage
//   const loadFromLocal = () => {
//     const localData = localStorage.getItem("categories");
//     if (localData) {
//       setDataFinal(JSON.parse(localData));
//     }
//   };

//   // Hàm load từ Firebase và lưu vào localStorage
//   const loadFromFirebase = () => {
//     const categoryRef = ref(dbFirebase, "categories");
//     onValue(categoryRef, (items) => {
//       const newData: any[] = [];
//       items.forEach((item) => {
//         const key = item.key;
//         const data = item.val();

//         newData.push({
//           id: key,
//           image: data.image,
//           title: data.title,
//           description: data.description,
//           link: `/categories/${key}`,
//         });
//       });
//       // Lưu vào state và localStorage
//       setDataFinal(newData);
//       localStorage.setItem("categories", JSON.stringify(newData));
//     });
//   };

//   // Khi component mount
//   useEffect(() => {
//     loadFromLocal(); // Ưu tiên lấy từ local trước
//     loadFromFirebase(); // Nhưng vẫn gọi Firebase để cập nhật mới nhất
//   }, []);

//   return (
//     <>
//       <div className="mt-[30px]">
//         <Title text="Danh Mục Bài Hát" className="" />
//       </div>
//       <div className="grid grid-cols-5 gap-[20px]">
//         {dataFinal.map((item, index) => (
//           <CardItem key={index} item={item} />
//         ))}
//       </div>
//     </>
//   );
// }


