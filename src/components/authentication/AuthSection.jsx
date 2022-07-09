import React from "react";
import Logo from "../UI/Logo";

function AuthSection({ children, onSubmit }) {
  return (
    <section className="flex flex-col justify-center items-center h-screen primary-color space-y-11">
      <header className="flex flex-col items-center space-y-4">
        <img src="/logo.svg" alt="logo" />
        <Logo />
      </header>
      <form onSubmit={onSubmit} className="space-y-7">
        {children}
      </form>
    </section>
  );
}

export default AuthSection;
