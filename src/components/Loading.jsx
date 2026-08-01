const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
                <p className="text-sm text-gray-500">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;