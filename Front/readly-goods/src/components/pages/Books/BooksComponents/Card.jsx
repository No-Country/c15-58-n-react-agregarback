import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Card({ id, image, title, price }) {
  return (
    <Link
      to={`/books/${id}`}
      className="flex flex-col w-full max-w-xs h-full shadow-xl rounded-2xl m-auto"
    >
      <img
        className="object-cover w-full rounded-t-lg"
        src={image}
        alt={`portada del libro ${title}`}
      />
      <div className="flex flex-col justify-between h-full px-5 pt-2 pb-5 ">
        <h5 className="mb-2 text-base font-semibold tracking-tight text-center lg:text-lg text-[#525252]">
          {title}
        </h5>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-bold lg:text-xl text-[#525252]">
            ${price}
          </p>
          <button className="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-[#690202] hover:text-[#262525] hover:bg-[#822626] transition-colors">
            <FontAwesomeIcon className="h-5" icon={faCartPlus} />
          </button>
        </div>
      </div>
    </Link>
  );
}
