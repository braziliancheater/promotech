function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-gray-950 text-gray-50 p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Oops! Pagina não encontrada.</h1>
          <p className="text-gray-400">
            A pagina que você esta procurando parece não existir.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
        >
          Voltar
        </a>
      </div>
    </div>
  );
}

export default NotFound;
