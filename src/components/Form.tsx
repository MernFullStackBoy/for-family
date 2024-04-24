function Form(props: any) {
    return (
        <form onSubmit={props.onSubmit} className=" flex gap-[20px] relative z-[10] ">
            <input value={props.value} onChange={props.onChange} placeholder="Isminggizni yozing" type="text" className=" w-[100%] h-[7vh] bg-transparent border-[0.4vh] text-[white] font-semibold pl-[20px] outline-none rounded-[1vh] " />
            <button className=" w-[8.5vh] rounded-[2vh] hover:bg-slate-500 transition h-[7vh] text-[24px] fa-solid fa-heart text-[red] bg-black border hover:text-[red] "></button>
        </form>
    )
}

export default Form