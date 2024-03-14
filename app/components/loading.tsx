// components/Loading.tsx
const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-start mt-4">
      <svg
        className="animate-spin h-5 w-5 mr-3 text-green-500"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-35"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-1.291A7.962 7.962 0 0120 12h4c0 4.418-3.582 8-8 8v-4z"
        ></path>
      </svg>
      <p className="text-green-500">Loading...</p>
    </div>
  );
};

export default Loading;
