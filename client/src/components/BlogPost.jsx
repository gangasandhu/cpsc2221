import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart, CiMail } from "react-icons/ci";

// This is named wrong. It's supposed to be for ViewBlog page. I will move this code to later.
const BlogPost = ({post}) => {
  return (
    <div className="px-8 py-4 rounded bg-zinc-100 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <img
            // src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png"
            src={post.user.profileImage}
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-lg font-medium leading-4">User name</h1>
            <h1 className="text-gray-500">@UserNameHere</h1>
          </div>
        </div>
        <div className="flex gap-x-2">
          <button className="border-2 border-solid border-blue-500 px-3 py-2 w-28 rounded-3xl text-blue-500 font-semibold">
            Follow
          </button>
        <button className="text-2xl">
          <IoIosMore />
        </button>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem
          necessitatibus nam esse illum, error exercitationem, id asperiores
          commodi dolores veniam quibusdam rem a architecto quasi magni fugiat
          molestiae nostrum consequuntur eveniet quia doloribus. Quo est animi
          labore dolor fugit quasi nostrum, vero quibusdam, quos sequi aliquam
          corrupti quia velit? Nihil velit praesentium iusto a placeat possimus
          laboriosam dolor quod amet harum non vero culpa expedita suscipit
          tempore quia similique, eaque animi dolore natus quos nesciunt ab
          voluptatibus. Rem ducimus dignissimos vitae animi iure quod, placeat
          vero laboriosam, ab voluptates harum cum alias, magni provident eaque!
          Illo asperiores aspernatur ipsum.
        </p>
        <p className="text-gray-500">
          12:11 PM • 21/11/2024 •{" "}
          <span className="font-bold text-black">987K</span> Views
        </p>
      </div>

      <div className="border-solid border-t-2 border-b-2 border-gray-300 py-3">
        <ul className="text-gray-500 flex justify-around">
          <li>
            <span className="text-black font-bold">82k</span> Retweets
          </li>
          <li>
            <span className="text-black font-bold">45k</span> Quotes
          </li>
          <li>
            <span className="text-black font-bold">91k</span> Likes
          </li>
          <li>
            <span className="text-black font-bold">78k</span> Bookmarks
          </li>
        </ul>
      </div>

      <div className="text-gray-500 flex justify-around">
        <button className="flex items-center gap-x-1">
          <FaRegComment className="text-xl" />
          <p>5</p>
        </button>
        <button className="flex items-center gap-x-1">
          <AiOutlineRetweet className="text-xl" />
          <p>5</p>
        </button>
        <button className="flex items-center gap-x-1">
          <CiHeart className="text-xl" />
          <p>25</p>
        </button>
        <button className="flex items-center gap-x-1">
          <CiMail className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
