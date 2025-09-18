export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
