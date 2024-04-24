import { Link } from "react-router-dom"

function Mom() {
    return (
        <div className=" w-[80%] items-center relative z-10 h-[50vh] flex flex-col justify-around mx-auto mt-[10vh] p-[20px] backdrop-blur-[100px] border ">
            <p className=" text-[white] ">
                Assalomu Alaykum Onajonim. Bu o'g'linggiz tomonidan siz uchun maxsus bo'lgan loyiha. Bu dasturchi farzandinggizning boshlang'ich sovg'asi. Inshaalloh bundan keyingi muvaffaqqiyatlarimda siz uchun bundanda zo'r sov'g'alar taqdim qilaman.
            </p>

            <Link to="mom">
                <button type="button" className=" btn btn-danger ">Bu yerga bosing</button>
            </Link>

        </div>
    )
}

export default Mom