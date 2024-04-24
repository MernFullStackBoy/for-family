import { useState } from "react"
import Form from "./components/Form"
import Mom from "./components/Mom"
import Love from "./components/Love"
import Dad from "./components/Dad"

function Result() {

    const [mom, setMom] = useState<boolean>(false)
    const [dad, setDad] = useState<boolean>(false)
    const [love, setLove] = useState<boolean>(false)
    const [no, setNo] = useState<boolean>(false)

    const [state, setState] = useState<string>("")

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (state === "Nigora" || state === "nigora") {
            setMom(true)
            setLove(false)
            setDad(false)
            setNo(false)
        } else if (state === "gulchehra" || state === "Gulchehra") {
            setLove(true)
            setDad(false)
            setMom(false)
            setNo(false)
        } else if (state === "sherali" || state === "Sherali") {
            setDad(true)
            setMom(false)
            setLove(false)
            setNo(false)
        } else {
            setNo(true)
            setDad(false)
            setMom(false)
            setLove(false)
        }

        return state
    }

    console.log(state);


    return (
        <div className=" p-[20px] max-w-[500px] w-[100%] bg-heart h-[100vh] mx-auto bg-cover bg-center after:max-w-[450px] after:w-[100%] after:h-[100vh] after:absolute after:top-0 after:backdrop-blur-[20px] ">
            <Form onSubmit={handleSubmit} value={state} onChange={(e: any) => setState(e.target.value)} />
            {mom && <Mom />}
            {love && <Love />}
            {dad && <Dad />}
        </div>
    )
}

export default Result