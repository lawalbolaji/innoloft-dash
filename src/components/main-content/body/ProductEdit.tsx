export function ProductEdit() {
    return (
        <div>
            <div className="px-2">
                <div className="mb-2">
                    <input
                        type="text"
                        className="py-2 px-3 block w-full text-black bg-white border border-[#D1D5DB] rounded text-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Intelligent Finite Elements in Structural mechanics"
                    />
                </div>
                <div className="h-[200px] border border-[#D1D5DB] rounded mb-4">
                    <div>Editor</div>
                </div>
                <div className="flex flex-row justify-end mb-4 gap-4">
                    <button
                        type="button"
                        className="py-2 px-3 h-[30px] w-[45px] box-border inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-white text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="py-2 pl-2 pr-4 h-[30px] box-border inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#272E71] text-white hover:bg-[#9f8eed] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.67188 13.6719C6.52604 13.6719 6.39062 13.6458 6.26562 13.5938C6.15104 13.5417 6.04688 13.4688 5.95312 13.375L1.29688 8.70312C1.20312 8.61979 1.125 8.51562 1.0625 8.39062C1.01042 8.26562 0.984375 8.13021 0.984375 7.98438C0.984375 7.71354 1.08333 7.47917 1.28125 7.28125C1.47917 7.08333 1.71354 6.98438 1.98438 6.98438C2.13021 6.98438 2.26562 7.01562 2.39062 7.07812C2.51562 7.13021 2.61979 7.20312 2.70312 7.29688L6.67188 11.25L15.2969 2.625C15.3802 2.54167 15.4792 2.47396 15.5938 2.42188C15.7188 2.36979 15.849 2.34375 15.9844 2.34375C16.2656 2.34375 16.5 2.44271 16.6875 2.64062C16.8854 2.83854 16.9844 3.07292 16.9844 3.34375C16.9844 3.47917 16.9583 3.60938 16.9062 3.73438C16.8646 3.84896 16.7969 3.95312 16.7031 4.04688L7.375 13.375C7.28125 13.4688 7.17188 13.5417 7.04688 13.5938C6.93229 13.6458 6.80729 13.6719 6.67188 13.6719Z"
                                fill="white"
                            />
                        </svg>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
