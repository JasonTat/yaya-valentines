import { Oooh_Baby } from "next/font/google";

const ooohBaby = Oooh_Baby({ subsets: ["latin"], weight: "400" });



const ValentinesTitle = () => {


    
    return (
        <div className="">
            <p className={`${ooohBaby.className} text-black text-6xl titlequestion`}
            >
                    Yackeline, will you be my valentine?</p>
        </div>
    )
}

export default ValentinesTitle;

