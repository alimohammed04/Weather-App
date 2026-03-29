export default function LoadingComponent() {
  return (
    <div className="flex h-70 flex-col items-center justify-center gap-4 rounded-3xl bg-white">
      <div className="size-15 animate-spin rounded-full border-5 border-blue-700 border-r-white"></div>
      <h2 className="text-xl font-medium text-gray-600">
        Loading Weather data...
      </h2>
    </div>
  );
}
