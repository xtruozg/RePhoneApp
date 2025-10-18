export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600">
        {process.env.NEXT_PUBLIC_APP_NAME}
      </h1>
      <p className="mt-4 text-gray-500">
        API URL: {process.env.NEXT_PUBLIC_API_URL}
      </p>
    </main>
  );
}
