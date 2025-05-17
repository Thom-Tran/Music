import type { Metadata } from "next";
// import { FaHeart, FaPlay } from "react-icons/fa6";
// import Link from "next/link";
import { Title } from "./components/title/Title";
import { SongItem } from "./components/song/SongItem";
import { CardItem } from "./components/card/CardItem";
import { ref } from "firebase/database"
import { dbFirebase } from "./firebaseConfig";
import { onValue } from "firebase/database";
import { Key } from "react";



export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Project nghe nhạc trực tuyến",
};
export default function Home() {
  //Section 1
  const dataSection1 :any = [];
  const songRef = ref(dbFirebase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item)=>{
      const key = item.key;
      const data = item.val();
      console.log(key);
      console.log(data);
      
      if(dataSection1.length < 3){
        onValue(ref(dbFirebase, '/singers/' + data.singerId[0]), (itemSinger) =>{
          const dataSinger = itemSinger.val();
          console.log(dataSinger);
        dataSection1.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            singer: dataSinger.title,
            listen: data.listen,
            link: '/song/${key}',
            audio: data.audio,
            wishlist: data.wishlist
          }
        );
      })
    }
    });
});

// "use client"
// import type { Metadata } from "next";
// import { useEffect, useState } from "react";
// import { Title } from "./components/title/Title";
// import { SongItem } from "./components/song/SongItem";
// import { setupLocalData } from "./setupLocalData";
// import { CardItem } from "./components/card/CardItem";

// // Metadata cho SEO
// // export const metadata: Metadata = {
// //   title: "Trang chủ",
// //   description: "Project nghe nhạc trực tuyến",
// // };

// export default function Home() {
//   const [songs, setSongs] = useState<any[]>([]);

//   useEffect(() => {
//     // Chỉ setup dữ liệu nếu chưa có
//     if (!localStorage.getItem("songs")) {
//       setupLocalData();
//     }

//     const songsObj = JSON.parse(localStorage.getItem("songs") || "{}");
//     const singersObj = JSON.parse(localStorage.getItem("singers") || "{}");

//     const formatted = Object.entries(songsObj)
//       .slice(0, 3)
//       .map(([key, song]: any) => ({
//         id: key,
//         image: song.image,
//         title: song.title,
//         singer: song.singerId
//           .map((sid: string) => singersObj[sid]?.title)
//           .join(", "),
//         listen: song.listen,
//         link: `/song/${key}`,
//         audio: song.audio,
//         wishlist: 0,
//       }));

//     setSongs(formatted);
//   }, []);
//End Section 1
  // const dataSection1 = [
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     listen: 20000
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     listen: 20000
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     listen: 20000
  //   }
  // ];

  // Section 2
  const dataSection2: any[] =[];
  const categoryRef = ref(dbFirebase, 'categories');
  onValue(categoryRef, (items) => {
    items.forEach((item)=>{
      const key = item.key;
      const data = item.val();
      console.log(key);
      console.log(data);
      
      if(dataSection2.length < 5){
        dataSection2.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: '/categories/ ${key}'
          }
        );
      }
      })
  });


// const dataSection2: any[] = [];

// const categoriesData = localStorage.getItem('categories');

// if (categoriesData) {
//   let parsedData: any;

//   try {
//     parsedData = JSON.parse(categoriesData);

//     // Nếu không phải mảng, thì chuyển từ object sang mảng
//     if (!Array.isArray(parsedData)) {
//       parsedData = Object.entries(parsedData).map(([id, value]: [string, any]) => ({
//         id,
//         ...value
//       }));
//     }

//     parsedData.forEach((item: any) => {
//       const key = item.id;
//       const data = item;

//       console.log(key);
//       console.log(data);

//       if (dataSection2.length < 5) {
//         dataSection2.push({
//           id: key,
//           image: data.image,
//           title: data.title,
//           description: data.description,
//           link: `/categories/${key}`
//         });
//       }
//     });

//   } catch (error) {
//     console.error("Lỗi khi parse singersData:", error);
//   }
// }

  //End Section 2
  
  // Section 3
  const dataSection3: any[] =[];
  const singerRef = ref(dbFirebase, 'singers');
  onValue(singerRef, (items) => {
    items.forEach((item)=>{
      const key = item.key;
      const data = item.val();
      console.log(key);
      console.log(data);
      
      if(dataSection3.length < 5){
        dataSection3.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: '/singer/${key}'
          }
        );
      }
      })
  });

//  const dataSection3: any[] = [];

// const singersData = localStorage.getItem('singers');

// if (singersData) {
//   let parsedData: any;

//   try {
//     parsedData = JSON.parse(singersData);

//     // Nếu không phải mảng, thì chuyển từ object sang mảng
//     if (!Array.isArray(parsedData)) {
//       parsedData = Object.entries(parsedData).map(([id, value]: [string, any]) => ({
//         id,
//         ...value
//       }));
//     }

//     parsedData.forEach((item: any) => {
//       const key = item.id;
//       const data = item;

//       console.log(key);
//       console.log(data);

//       if (dataSection3.length < 5) {
//         dataSection3.push({
//           id: key,
//           image: data.image,
//           title: data.title,
//           description: data.description,
//           link: `/singer/${key}`
//         });
//       }
//     });

//   } catch (error) {
//     console.error("Lỗi khi parse singersData:", error);
//   }
// }

  //End Section 3
    return (
      <>
      {/* Section 1: Banner Home + Nghe nhiều */}
      <div className="flex items-start">
        <div className="w-[534px]">
          <div
           className="w-full flex items-center rounded-[15px] bg-cover"
           style={{backgroundImage: "url('/demo/background-1.png')"}}>
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="font-[700] text-[32px] text-[white] mb-[6px]">
                Nhạc EDM
              </div>
              <div className="font-[500] text-[14px] text-[white]">
              Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mr-[22px] mt-[48px]">
              <img src="/demo/image-2.png" alt="Nhạc EDM" 
              className="w-full h-auto"/>
            </div>
           </div>
        </div>

        <div className="flex-1 ml-[20px]">
          <Title text="Nghe nhiều" className=""/>
          <div className="grid grid-cols-1 gap-[12px]">
            {dataSection1.map((item: unknown, index: Key | null | undefined) => (
               <SongItem key={index} item={item}/>
            ))}
           
          </div>
        </div> 
        {/* Code ở đây */}
    </div>

      {/* Section 2: Danh Mục Nổi Bật */}
      <div className="mt-[30px]">
        <Title text="Danh Mục Nổi Bật" className=""/>
      </div>

      <div className="grid grid-cols-5 gap-[20px]">
        {dataSection2.map((item, index)=>(
          <CardItem key={index} item={item}/>
        ))}
      </div>
      {/* Hết Section 2: Danh Mục Nổi Bật */}

      {/* Section 3: Ca Sĩ Nổi Bật */}
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật" className=""/>
      </div>

      <div className="grid grid-cols-5 gap-[20px]">
        {dataSection3.map((item, index)=>(
          <CardItem key={index} item={item}/>
        ))}
      </div>
      </>
    
    );
  }
  // <div className="flex-1 ml-[20px]">
  //          <Title text="Nghe nhiều" className=""/>
  //          <div className="grid grid-cols-1 gap-[12px]">
  //             {songs.map((song, index) => (
  //             <SongItem key={index} item={song}/>
  //       ))}
  //     </div>
  // div
  