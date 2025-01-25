import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 p-6">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border p-2"
        />
        <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
          Sign Up
        </button>
        <Link to="/signin" className="block text-center text-blue-500">
          Already have an account? Sign In
        </Link>
      </form>
    </div>
  );
}
