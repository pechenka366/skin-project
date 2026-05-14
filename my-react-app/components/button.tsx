import { useState } from "react";
import '../style/buttonStyle.css'

type Props = {
    setAge: React.Dispatch<React.SetStateAction<number>>;
};

function Button({ setAge }: Props) {
    const [liked, setLiked] = useState(false);
    const [visible, setVisible] = useState(true);

    return (
        <>
            <button onClick={() => setAge((prev) => prev + 1)}>+</button>
            <button onClick={() => setAge((prev) => prev - 1)}>-</button>
            <button onClick={() => setAge(20)}>Сброс</button>
            <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️ Лайк" : "🤍 Лайк"}
            </button>
            <button onClick={() => setVisible(!visible)}>Показать / скрыть</button>
            {visible && <p>Секретный текст</p>}
        </>
    );
}

export default Button;
