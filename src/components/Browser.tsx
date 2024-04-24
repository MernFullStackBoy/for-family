import { Route, Routes } from "react-router-dom"
import Result from "../Result"
import MomMusic from "./MomMusic"
import LoveMusic from "./LoveMusic"
import DadMusic from "./DadMusic"

function Browser() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Result />} />
                <Route path="/mom" element={<MomMusic />} />
                <Route path="/love" element={<LoveMusic />} />
                <Route path="/dad" element={<DadMusic />} />
            </Routes>
        </div>
    )
}

export default Browser