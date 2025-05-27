import { ArrowRight } from "lucide-react";

import { Noto_Sans_JP } from "next/font/google";


const roboto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
})
export default function Home() {
  return (
    <>
    <div className="w-full h-screen flex relative overflow-hidden">
      <div className="h-screen w-15 border-r-1 border-gray-950 flex">
        <button className="absolute w-15 top-3 flex">
          <img src="/icon/menu.svg"  className="m-auto"/>
        </button>
        <div className="m-auto">
          <img src="/icon/instagram.svg" className="mt-6 mb-6 w-7 h-7"/>
          <img src="/icon/twitter.svg" className="mt-6 mb-6 w-7 h-7"/>
          <img src="/icon/youtube.svg" className="mt-6 mb-6 w-7 h-7"/>
        </div>
      </div>
      <div className="overflow-auto w-full">
        <div className="relative w-full h-screen flex">
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
                      <div className="m-auto [writing-mode:vertical-rl]">
                        <span className="text-white text-2xl font-bold">SAT</span>
                      </div>
                    <ArrowRight className="text-white w-10 h-18 mr-2 ml-2" />
                    <span className="text-white font-bold text-7xl">09/21</span>
                      <div className="m-auto [writing-mode:vertical-rl]">
                        <span className="text-white text-2xl font-bold">SUN</span>
                      </div>
                  </div>
                </div>
                <div className="mt-20 w-300 z-10">
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
                {/* <div className="absolute top-100 left-0 w-full h-full border-t-50 border-blue-600 transform rotate-35 origin-top-left z-0"></div> */}

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
            <img src="/icon/pic.png" className="w-full h-full object-cover rounded-tl-4xl rounded-bl-4xl relative"/>
          </div>
        </div>



        <div className="m-auto w-full h-170 flex">
          <div className="relative w-full h-100 ">
            <div className="absolute w-full flex">
                <div className="flex relative m-auto z-2 mt-20">
                    <span className="text-9xl m-auto font-bold">News</span>
                    <span className="absolute mt-2 ml-2 text-9xl font-bold title-text">News</span><br/>
                </div>
            </div>
            <div className="absolute w-full flex">
              <div className="w-140 h-70 z-100 m-auto mt-60">

                <div className="w-full h-20 bg-white rounded-2xl mb-4 flex justify-around">
                  <div className="m-auto ml-3">
                    <div>
                      <div className="w-full flex">
                        <span className="text-blue-600 font-bold text-[19px]">2025.05.27</span>
                      </div>
                      <div className="w-full flex">
                        <span className = { `${roboto.className} font-bold text-[20px]`} >ホームページを公開しました！</span>
                      </div>
                    </div>
                  </div>
                  <button>
                      <img src="/icon/chevron-right.svg" className="w-8 h-8 mr-3"/>
                  </button>
                </div>

                <div className="w-full h-20 bg-white rounded-2xl mb-4 flex justify-around">
                  <div className="m-auto ml-3">
                    <div>
                      <div className="w-full flex">
                        <span className="text-blue-600 font-bold text-[19px]">2025.05.27</span>
                      </div>
                      <div className="w-full flex">
                        <span className = { `${roboto.className} font-bold text-[20px]`} >ホームページを公開しました！</span>
                      </div>
                    </div>
                  </div>
                  <button>
                      <img src="/icon/chevron-right.svg" className="w-8 h-8 mr-3"/>
                  </button>
                </div>

                <div className="w-full h-20 bg-white rounded-2xl mb-4 flex justify-around">
                  <div className="m-auto ml-3">
                    <div>
                      <div className="w-full flex">
                        <span className="text-blue-600 font-bold text-[19px]">2025.05.27</span>
                      </div>
                      <div className="w-full flex">
                        <span className = { `${roboto.className} font-bold text-[20px]`} >ホームページを公開しました！</span>
                      </div>
                    </div>
                  </div>
                  <button>
                      <img src="/icon/chevron-right.svg" className="w-8 h-8 mr-3"/>
                  </button>
                </div>
                <div className="w-full flex">
                  <button className="w-80 h-13 bg-white rounded-4xl m-auto mt-3 flex border-2 border-gray-900"> 
                    <div className="flex m-auto">
                      <span className=" text-blue-600 font-bold">もっと見る</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute w-full mt-40 h-100 transform skew-x-5 rotate-5 bg-blue-500 z-1 flex">
            </div>
          </div>
        </div>

        <div className="m-auto w-full flex">
          <div className="relative w-full h-100 ">
            <div className="absolute w-full flex">
                <div className="flex relative m-auto z-2 mt-5">
                    <span className="text-9xl m-auto font-bold">About</span>
                    <span className="absolute mt-2 ml-2 text-9xl font-bold title-text">About</span><br/>
                </div>
            </div>
            <div className="w-200 h-200 bg-blue-500 m-auto rounded-[50%] mt-20">

            </div>
          </div>

        </div>


      </div>
    </div>

    </>
  );
}
