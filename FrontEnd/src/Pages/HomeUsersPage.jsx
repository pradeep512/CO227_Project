import AppBarGeneral from "../components/AppBarGeneral";
import PredictionButton from "../components/PredictionButton";
import PredictionResul from "../components/PredictionResult";

export default function HomeUsersPage(){
    return(
        <div>
            <AppBarGeneral/>
            <PredictionButton/>
            <PredictionResul/>
        </div>
    )
}