export function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-3 mt-4 focus:outline-none"
    >
      {label}
    </button>
  );
}
