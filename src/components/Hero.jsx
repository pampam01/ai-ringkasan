import React from "react";
import { logo, pamAI } from "../assets";

const Hero = () => {
  return (
    <header className=" w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={pamAI} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Membuat ringkasan artikel bahasa inggris dengan teknologi{" "}
        <br className=" max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        anda hanya perlu memasukkan link sebuah website atau artikel dalam
        bahasa apapun, secara otomatis pam AI akan meringkaskannya untuk anda
        kedalam bahasa inggris
      </h2>
    </header>
  );
};

export default Hero;
