import { useEffect, useState } from "react";
import "./header.css";
import { loginService } from '../login/loginService';
import { User } from "firebase/auth";

export const Header = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogout = async (): Promise<void> => {
    await loginService.logout();
  };

  useEffect(() => {
    const unsubscribe = loginService.checkAuthState((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">Sobre</a>

        {currentUser && <a href="/dashboard">Dashboard</a>}

        {!currentUser ? (
          <a href="/login">Login</a>
        ) : (
          <a href="/" onClick={handleLogout}>Logout</a>
        )}
      </nav>
    </div>
  );
};
