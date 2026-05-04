import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineRefresh } from "react-icons/md";

function Error({ message = "Something went wrong!", onRetry = null }) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-[#25253f] rounded-3xl p-8 border-2 border-red-500/30 shadow-lg">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <IoCloseCircleOutline
            size={64}
            className="text-red-500 animate-pulse"
          />
        </div>

        {/* Error Title */}
        <h2 className="text-center text-2xl font-bold text-red-500 mb-3">
          Oops!
        </h2>

        {/* Error Message */}
        <p className="text-center text-gray-300 text-base leading-relaxed mb-6">
          {message}
        </p>

        {/* Error Details Box */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
          <p className="text-red-300 text-sm text-center font-mono">
            Please check your connection and try again.
          </p>
        </div>

        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 mb-3"
            aria-label="Retry loading data"
          >
            <MdOutlineRefresh size={20} />
            Try Again
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200"
          aria-label="Reload page"
        >
          Reload Page
        </button>

        {/* Help Text */}
        <p className="text-center text-gray-500 text-xs mt-4">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}

export default Error;
