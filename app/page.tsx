import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex relative">
      <div className="h-screen w-15 border-r-1 border-gray-950 flex">
        <div className="m-auto">
          <img src="/icon/instagram.svg" className="mt-6 mb-6 w-7 h-7"/>
          <img src="/icon/twitter.svg" className="mt-6 mb-6 w-7 h-7"/>
          <img src="/icon/youtube.svg" className="mt-6 mb-6 w-7 h-7"/>
        </div>
      </div>
      <div className="w-[60%] h-full flex">
      <div className="z-10 m-auto 2xl:ml-[15%]">
        <div className="ml-4">
          <div className="flex relative">
            <span className="text-9xl font-bold">KIGYOKUSAI</span><br/>
            <span className="absolute mt-2 ml-2 text-9xl font-bold title-text">KIGYOKUSAI</span><br/>
          </div>
          <span className="text-9xl text-blue-500 font-bold">2025</span>
          <div className="w-120 h-20 bg-blue-500 flex">
            <div className="flex m-auto">
              <span className="text-white font-bold text-7xl">09/20</span>
              <ArrowRight className="text-white w-10 h-18 mr-3 ml-3" />
              <span className="text-white font-bold text-7xl">09/21</span>
            </div>
          </div>
          <div className="mt-25 w-300">
          <div className="flex">
            <span className="text-7xl font-bold">News</span><br/>
            <div className="w-40 border-t-[1px] mt-10 mr-5 ml-5"></div>
            <span className="font-semibold mt-7">お知らせ</span>
          </div>
          <div className="flex">
            <span className="text-7xl font-bold">About</span><br/>
            <div className="w-35 border-t-1 mt-10 mr-5 ml-5"></div>
            <span className="font-semibold mt-7">文化祭について</span>
          </div>
          <div className="flex">
            <span className="text-7xl font-bold">Contents</span><br/>
            <div className="w-9 border-t-1 mt-10 mr-5 ml-5"></div>
            <span className="font-semibold mt-7">コンテンツ</span>
          </div>
          <div className="flex">
            <span className="text-7xl font-bold">Access</span><br/>
            <div className="w-25 border-t-1 mt-10 mr-5 ml-5"></div>
            <span className="font-semibold mt-8">アクセス</span>
          </div>
          </div>
        </div>
      </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[47%] h-[93%] rounded-tl-4xl z-0">
        <div className="w-8 h-40 bg-white absolute bottom-15 right-0 z-100 flex">
          <div className="m-auto">
            <div className="m-auto [writing-mode:vertical-rl]">
              <span>SCROLL</span>
            </div>
            <img src="/icon/move-down.svg" className="m-auto h-5 mt-2"/>
          </div>
        </div>
        <img src="/icon/pic.png" className="w-full h-full object-cover rounded-tl-4xl relative"/>

      </div>
    </div>
  );
}
