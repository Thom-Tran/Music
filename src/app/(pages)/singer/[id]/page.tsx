
import { CardInfo } from "@/app/components/card/CardInfo";
import { SongItem } from "@/app/components/song/SongItem";
import { SongItem2 } from "@/app/components/song/SongItem2";
import { Title } from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết ca sĩ",
  description: "Project nghe nhạc trực tuyến",
};
export default async function SingerDetailPage(props: any) {
  const { id } = await props.params;
    let dataFinal: any = null;
  
    onValue(ref(dbFirebase, '/singers/' + id), (item) => {
      dataFinal = item.val();
    })

    console.log(dataFinal);

    const dataSection2: any[] = [];
  const songRef = ref(dbFirebase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();

      if(data.singerId.includes(id)) {
        dataSection2.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            singer: dataFinal.title,
            link: `/song/${key}`,
            time: "4:32",
            audio: data.audio
          }
        );
      }
    })
  });
  
// "use client";
// import { useEffect, useState } from "react";
// import { CardInfo } from "@/app/components/card/CardInfo";
// import { SongItem2 } from "@/app/components/song/SongItem2";
// import { Title } from "@/app/components/title/Title";
// import type { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Chi tiết ca sĩ",
// //   description: "Project nghe nhạc trực tuyến",
// // };

// export default function SingerDetailPage(props: any) {
//   const { id } = props.params;
//   const [singerData, setSingerData] = useState<any>(null);
//   const [dataSection2, setDataSection2] = useState<any[]>([]);

//   useEffect(() => {
//     // Lấy dữ liệu từ localStorage
//     const singers = JSON.parse(localStorage.getItem("singers") || "{}");
//     const songs = JSON.parse(localStorage.getItem("songs") || "{}");

//     const singerInfo = singers[id];
//     if (!singerInfo) return;

//     setSingerData(singerInfo);

//     // Tìm bài hát thuộc ca sĩ này
//     const relatedSongs = Object.entries(songs)
//       .filter(([_, song]: any) => song.singerId?.includes(id))
//       .map(([key, song]: any) => ({
//         id: key,
//         image: song.image,
//         title: song.title,
//         singer: singerInfo.title,
//         link: `/song/${key}`,
//         time: "4:32", // giả định
//         audio: song.audio
//       }));

//     setDataSection2(relatedSongs);
//   }, [id]);

//   if (!singerData) return <div>Đang tải thông tin ca sĩ...</div>;
// Hết Local
  // const data = [
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     time: "4:32"
  //   },
  //   {
  //     image: "/demo/image-3.png",
  //     title: "Cô Phòng",
  //     singer: "Hồ Quang Hiếu",
  //     time: "4:32"
  //   },
    
  // ];
    return (
      <>
     {/* CardInfo */}
           <CardInfo image ={dataFinal.image} title={dataFinal.title} description={dataFinal.description}/>
           {/* Setion-2 */}
           <div className="mt-[30px]">
             <Title text="Danh Sách Bài Hát" className=""/>
           </div>
           <div className="grid grid-cols-1 gap-[10px]">
             {dataSection2.map((item, index)=>(
                <SongItem2  key={index} item={item}/>
             ))}
           </div>
      </>
    );

    // Local
//     return (
//   <>
//     {/* Thông tin ca sĩ */}
//     <CardInfo
//       image={singerData.image}
//       title={singerData.title}
//       description={singerData.description || ""}
//     />

//     {/* Setion-2 */}
//     <div className="mt-[30px]">
//       <Title text="Danh Sách Bài Hát" className="" />
//     </div>
//     <div className="grid grid-cols-1 gap-[10px]">
//       {dataSection2.map((item, index) => (
//         <SongItem2 key={index} item={item} />
//       ))}
//     </div>
//   </>
// );

//   }
}