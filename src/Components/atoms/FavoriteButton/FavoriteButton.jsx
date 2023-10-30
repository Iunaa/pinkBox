import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function FavoriteButton() {
    const [favorite, setFavorite] = useState(false);
    return (
        <button onClick={() => setFavorite(!favorite)}>
            {favorite ? (
                <AiFillHeart color="#EE8094" size={32} />
            ) : (
                <AiOutlineHeart color="#EE8094" size={32} />
            )}
        </button>
    );
}
