import { Dumbbell, Eye, CircleDot } from 'lucide-react';

export default function Login() {
  return (
    // 1. Contenedor Principal (Fondo oscuro y layout flexible)
    <div className="min-h-screen bg-zinc-950 text-zinc-300 flex flex-col font-sans">
      
      {/* Header superior izquierdo */}
      <header className="w-full p-4 border-b border-zinc-800/50">
        <h1 className="text-zinc-400 text-sm font-medium">Club Manager 360</h1>
      </header>

      {/* 2. Zona central donde vive la tarjeta */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        
        {/* Logo y Título superior */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-400 p-3 rounded-full text-zinc-900 mb-3 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
            <Dumbbell size={24} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Club Manager 360</h2>
        </div>

        {/* 3. La Tarjeta del Formulario */}
        <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-1">Sign in</h3>
            <p className="text-sm text-zinc-400">
              Access the administrative dashboard to manage your club operations.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* Campo: Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="admin@gymops.com"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all"
              />
            </div>

            {/* Campo: Password */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Opciones: Remember me & Forgot */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 group-hover:border-yellow-400 transition-colors"></div>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Botón Principal */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-semibold py-2.5 rounded-lg transition-colors mt-2"
            >
              Sign in
            </button>
          </form>

          {/* Indicadores de Rol */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 bg-zinc-950/80 border border-zinc-800 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              <CircleDot size={8} className="text-yellow-400 fill-yellow-400" />
              <span>Admin • Reception • Manager</span>
            </div>
          </div>

        </div>

        {/* 4. Footer */}
        <footer className="mt-8 text-center space-y-2">
          <p className="text-xs text-zinc-500">
            © 2026 Club Deportivo Management System. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Help Center</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
