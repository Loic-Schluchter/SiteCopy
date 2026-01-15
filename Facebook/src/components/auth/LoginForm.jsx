import React from "react";
import LoginAccountButton from "./LoginAccountButton.jsx";

export default function LoginForm() {
  return (
    <form action="" className="font-semibold">
      <div className="flex flex-col gap-3">
        <input
          className="input-field"
          type="text"
          placeholder="Numéro mobile ou e-mail"
        />
        <input
          className="input-field"
          type="password"
          placeholder="Mot de passe"
        />
      </div>
      <LoginAccountButton />
    </form>
  );
}
