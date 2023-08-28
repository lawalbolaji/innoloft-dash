export function Error404() {
    return (
        <div className="w-full h-full">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8 mx-auto mt-4">
                <h1 className="block text-8xl font-bold text-gray-600">404</h1>
                <h1 className="block text-2xl font-bold text-white"></h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
                <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
            </div>
        </div>
    );
}
