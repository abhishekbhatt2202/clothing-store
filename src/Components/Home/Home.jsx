import React from "react";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="flex">
          <div className="w-1/2">
            <img
              src="https://static.wixstatic.com/media/84770f_24595e0412cb42dfae6de1adbf5c73a1~mv2_d_1676_1980_s_2.png/v1/fill/w_754,h_1116,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_24595e0412cb42dfae6de1adbf5c73a1~mv2_d_1676_1980_s_2.png"
              alt=""
            />
          </div>
          <div className="w-1/2 flex justify-center items-center z-0">
            <img
              src="https://static.wixstatic.com/media/84770f_31b162dc5d2c487493fb435d6ddc9692~mv2.png/v1/crop/x_2,y_0,w_685,h_980/fill/w_383,h_548,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_31b162dc5d2c487493fb435d6ddc9692~mv2.png"
              alt=""
            />
          </div>
        </div>
        <div className="text-black flex justify-center text-center z-10 relative bottom-[600px]">
          <div>
            <p className="text-3xl">
              ANNA STONE & <span className="font-black">JUD.</span>
            </p>
            <p>Introducing the Capsule Collection</p>
            <div className="flex justify-center items-center">
              <button className="bg-black text-white text-center text-2 py-4 px-4  hover:bg-red-900 hover:text-green-900 duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="text-center justify-center px-2 py-2 text-4xl text-#7DB0AD ">
          <h1 className="text-[#7DB0AD]">Explore the Collection</h1>
        </div>
        <div className="flex flex-wrap ">
          {
            data.map((item)=>(
              <div key={item.id} className="text-black  mx-12 py-6 ">
            <img
              className="hover:scale-105"
              src={item.img}
              alt=""
            ></img>
            <h1 className="px-12 py-4  text-green-700 mx-6">{item.title}</h1>
            <p className="px-12  mx-12 text-#7DB0AD"> &#x24;{item.price}</p>
          </div>
            ))
          }
        </div>
        <div>
          <div className="text-center mx-12 px-10">
          <p className=" text-4xl">About the Collection</p>
          <div className="px-80 text-size-25 py-8">
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            I’m a great place for you to tell a story and let your users know a little more about you</p>
          </div>
          </div>
          {/* <div className=" text-center text-9xl"> 
            <p className="z-40">A</p>
            <div className="justify-center">
              <img src="https://static.wixstatic.com/media/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg/v1/crop/x_19,y_0,w_2549,h_3861/fill/w_370,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg" alt=""/>
            </div>
            <div className="z-30 ">
             <h1 className="text-center ">J.</h1> 
            </div>  
          </div> */}
          <div className=" -mt-44">
            <div className="flex justify-end text-[15rem] relative -left-[50rem] top-48 font-black z-10 text-[#A7CFCD] w-auto">
              A
            </div>
            <div className="flex justify-center ">
              <img className="z-20" src="https://static.wixstatic.com/media/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg/v1/crop/x_19,y_0,w_2549,h_3861/fill/w_370,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_3a31f377858e434d80f0244579062d2c~mv2_d_2574_3861_s_4_2.jpg" alt="" />
            </div>
            <div className="flex justify-start text-[15rem] relative left-[50rem] -top-44 font-black z-30 text-[#A7CFCD] w-auto">
              J.
            </div>
            <div className="text-5xl text-center ">
            Never miss our updates about new
            </div>
            <div className="text-5xl text-center">arrivals and special offers</div><br/>
            
          </div>
         
          <div className="text-center ">
          <from className='  text-2xl'>
            <label className=""  htmlFor="email">Enter your email here*</label><br/>
              <input className="w-8 outline-none px-96  border-b-2  border-black" type="email" name="email" id="email"/><br/>
              <button className="border border-solid border-black bg-black text-white m-12 px-96 py-3  text-2xl  hover:bg-transparent hover:text-red-800 duration-300"> SUBSCRIBE</button>
            </from>
           
         </div> 
      </div>
      </div>
    </>
  );
}

export default Home;

export const data = [
  {
    id:1,
    img:"https://static.wixstatic.com/media/84770f_fc3103c837c1410b844e4e03443e5a92~mv2_d_2736_4104_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_fc3103c837c1410b844e4e03443e5a92~mv2_d_2736_4104_s_4_2.jpg",
    title:"I m a Product",
    price:"170.00"
  },
  {
    id:2,
    img:"https://static.wixstatic.com/media/21b326_5d65e0a5be6f44c98a630f897118270a~mv2_d_4668_5792_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_5d65e0a5be6f44c98a630f897118270a~mv2_d_4668_5792_s_4_2.jpg",
    title:"I'm a Product",
    price:"180.00"
  },
  {
    id:3,
    img:"https://static.wixstatic.com/media/21b326_7168e9cdcc7e4be7af6938b30a8e1abf~mv2_d_2527_3790_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_7168e9cdcc7e4be7af6938b30a8e1abf~mv2_d_2527_3790_s_4_2.jpg",
    title:"I'm a Product",
    price:"150.00"
  },
  {
    id:4,
    img:"https://static.wixstatic.com/media/21b326_9896947ab3cd44a68c671c4a7432f9b0~mv2_d_2362_3543_s_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_9896947ab3cd44a68c671c4a7432f9b0~mv2_d_2362_3543_s_2.jpg",
    title:"I'm a Product",
    price:"160.00"
  },
  {
    id:5,
    img:"https://static.wixstatic.com/media/21b326_a7756bedeb734370be1a20df91407d5d~mv2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_a7756bedeb734370be1a20df91407d5d~mv2.jpg",
    title:"I'm a Product",
    price:"190.00"
  },
  {
    id:6,
    img:"https://static.wixstatic.com/media/21b326_dd5b2ea46f114f01bc992980d7e86163~mv2_d_2626_3939_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_dd5b2ea46f114f01bc992980d7e86163~mv2_d_2626_3939_s_4_2.jpg",
    title:"I'm a Product",
    price:"190.00"
  },
  {
    id:7,
    img:"https://static.wixstatic.com/media/21b326_2597deb2081d48bb82013d9620aebd65~mv2_d_2468_3702_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_2597deb2081d48bb82013d9620aebd65~mv2_d_2468_3702_s_4_2.jpg",
    title:"I'm a Product",
    price:"150.00"
  },
  {
    id:8,
    img:"https://static.wixstatic.com/media/21b326_1c5818bd712c4a5fb6b83facb61517e7~mv2_d_4612_4912_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_1c5818bd712c4a5fb6b83facb61517e7~mv2_d_4612_4912_s_4_2.jpg",
    title:"I'm a Product",
    price:"160.00"
  },
  {
    id:9,
    img:"https://static.wixstatic.com/media/21b326_bbcbd19040ed4f208dcb16a5710572d0~mv2_d_2389_3584_s_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_bbcbd19040ed4f208dcb16a5710572d0~mv2_d_2389_3584_s_2.jpg",
    title:"I AM PRODUCT",
    price:"150"
  },
  {
    id:10,
    img:"https://static.wixstatic.com/media/21b326_ef7081b311fa49f0b2735ff4f20acfdd~mv2_d_2574_3861_s_4_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21b326_ef7081b311fa49f0b2735ff4f20acfdd~mv2_d_2574_3861_s_4_2.jpg",
    title:"I AM PRODUCT",
    price:"150"
  },
  {
    id:12,
    img:"https://static.wixstatic.com/media/84770f_81a889ea31b74543a869bc50a1b0a521~mv2_d_2331_3500_s_2.jpg/v1/fill/w_341,h_512,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_81a889ea31b74543a869bc50a1b0a521~mv2_d_2331_3500_s_2.jpg",
    title:"I AM PRODUCT",
    price:"190"
  },
]
