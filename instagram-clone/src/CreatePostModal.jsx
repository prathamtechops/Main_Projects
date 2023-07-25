function CreatePostModal() {
    return (
        <div className="create-post flex flex-col items-center">
            <div className="flex border-b-2 border-gray-600 w-full p-4 justify-center items-center ">
                <h1>Create new post</h1>
            </div>
            <div className="flex flex-col gap-5 w-full h-full justify-center items-center">
                <div>Drag photos and videos here</div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Select from computer
                </button>
            </div>
        </div>
    );
}

export default CreatePostModal;
