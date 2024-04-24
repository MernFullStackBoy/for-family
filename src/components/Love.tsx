import { Link } from "react-router-dom"

function Love() {
    return (
        <div className=" w-[80%] items-center relative z-10 h-[50vh] flex flex-col justify-around mx-auto mt-[10vh] p-[20px] backdrop-blur-[100px] border ">
            <p className=" text-[white] ">
                Salom gulim. Bu sen uchun alohida tayyorlangan dastur. Bu yerda senga bo'lgan muhabbatimni to'liq bo'lmasada qisman tasvirlangan. Qolgan malumotni pastdagi knopka (tugma) orqali topasan. Seni sevaman
            </p>

            <Link to="love">
                <button type="button" className=" btn btn-danger ">Bu yerga bos</button>
            </Link>

        </div>
    )
}

export default Love