export function UserPost() {
    return (
        <div className=" rounded-lg shadow-lg p-12 w-100 text-white">
            <div className="flex items-center">
                <img
                    src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="
                    alt="Profile"
                    className="rounded-full w-8 h-8 mr-2"
                />
                <span className="font-semibold">username</span>
            </div>
            <img
                src="https://www.k9ofmine.com/wp-content/uploads/2021/02/Polish-tatra.jpg"
                alt="Post"
                className="rounded-lg mt-4"
            />
            <div className="mt-4">
                <span className="text-sm font-semibold">Likes: 100</span>
                <p className="text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla aliquam turpis, id ultricies felis consectetur
                    nec.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 mt-4">
                    Like
                </button>
            </div>
        </div>
    );
}
