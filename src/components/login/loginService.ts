import { auth } from '../../firebase'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

class LoginService {

  async signUp(email: string, password: string): Promise<User | null> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      return null;
    }
  }

  async signIn(email: string, password: string): Promise<User | null> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      console.error('Error signing in:', error.message);
      return null;
    }
  }

  async signInWithGoogle(): Promise<User | null> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error: any) {
      console.error('Error signing in with Google:', error.message);
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error: any) {
      console.error('Error logging out:', error.message);
    }
  }

  checkAuthState(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
  }
}

export const loginService = new LoginService();
