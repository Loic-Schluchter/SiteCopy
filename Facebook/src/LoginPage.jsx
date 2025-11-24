import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center font-helvetica">
      <div className="flex w-full h-1/2 px-4 flex-col items-center justify-center bg-[#f2f4f7]">
        <div className="flex">
          {/* Colonne gauche */}
          <div className="flex flex-col justify-center gap-4 w-1/2 mx-auto -mt-24">
            <h1 className="text-[#1877f2] text-6xl font-semibold">facebook</h1>
            <p className="font-normal text-3xl">
              Avec Facebook, partagez et restez en contact avec votre entourage.
            </p>
          </div>

          {/* Colonne droite */}
          <div className="bg-white shadow-xl rounded-xl p-4 py-6 w-full max-w-sm">
            <form className="flex flex-col items-center gap-4" action="">
              <input
                className="input-field"
                type="text"
                placeholder="Adresse e-mail ou numéro de tél."
              />
              <input
                className="input-field"
                type="password"
                placeholder="Mot de passe"
              />
              <button className=" button-primary text-[22px]">
                Se connecter
              </button>
              <a className="text-[#2c85d8]" href="">
                Mot de passe oublié ?
              </a>
              <div className="h-px w-full bg-gray-300 m-2"></div>
              <button className="button-secondary big-text ">
                Créer un nouveau compte
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className=" w-full flex items-center justify-center h-1/2">
        <p className="text-sm mt-6 text-gray-600">Meta © 2025</p>
      </footer>
    </div>
  );
}
