export default function Error({ errorMessage }: { errorMessage: string }) {
  return <h2 className="p-5 text-center text-red-500">❌ {errorMessage}</h2>;
}
