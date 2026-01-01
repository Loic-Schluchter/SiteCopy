import React from "react";
import InstagramLogo from "../assets/Instagram.png";
import FacebookLogo from "../assets/Facebook.png";

export default function Login() {
  return (
    <main className="bg-[#0c1014] min-h-screen flex flex-col text-white text-sm">
      <article className="flex-1 flex justify-center gap-8 m-12">
        <div className="flex items-center justify-center">
          <img className="logo" src={InstagramLogo} alt="Instagram Logo" />
        </div>

        <div className="flex flex-col items-center justify-center w-[350px]">
          <h1 className="text-6xl font-story text-center my-8">Instagram</h1>
          <form action="login" className="flex flex-col w-full px-8 gap-1">
            <input
              className="input-form"
              type="text"
              placeholder="Num. téléphone, nom de profil ou e-mail"
            />
            <input
              className="input-form"
              type="password"
              placeholder="Mot de passe"
            />
            <button className="button-login">Se connecter</button>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/20" />
              <span className="text-white/80 text-sm my-6">OU</span>
              <div className="flex-1 h-px bg-white/20" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 my-0 ">
              <div className="flex gap-2">
                <img className="small-logo " src={FacebookLogo} alt="" />
                <a
                  href="https://site-copy-hheihm6l3-loic-schluchters-projects.vercel.app"
                  className="text-[#0095f6] hover:font-medium hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Se connecter avec Facebook
                </a>
              </div>

              <a className="font-bold" href="">
                Mot de passe oublié ?
              </a>
              <p className="my-6">
                Vous n&apos;avez pas de compte ?{" "}
                <a href="" className="text-[#0095f6]">
                  Inscrivez-vous
                </a>
              </p>
            </div>
          </form>
        </div>
      </article>
      <footer className="w-full px-16 my-12">
        <div className="flex flex-col items-center justify-center gap-4 text-xs text-gray-200/60">
          <nav className="flex gap-x-6 gap-y-2  flex-wrap justify-center [&_a]:hover:underline">
            <a href="#">Meta</a>
            <a href="#">À propos</a>
            <a href="#">Blog</a>
            <a href="#">Emplois</a>
            <a href="#">Aide</a>
            <a href="#">API</a>
            <a href="#">Confidentialité</a>
            <a href="#">Paramètre des cookies</a>
            <a href="#">Conditions</a>
            <a href="#">Lieux</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Meta AI</a>
            <a href="#">Threads</a>
            <a href="#">Importation des contacts et non-utilisateurs</a>
            <a href="#">Meta Verified</a>
          </nav>
          <p>© 2025 Instagram par Meta</p>
        </div>
      </footer>
    </main>
  );
}
