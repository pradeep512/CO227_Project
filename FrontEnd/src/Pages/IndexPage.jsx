import App from "../App";
import AppBarGeneral from "../components/AppBarGeneral";
import BarGraph from "../components/BarGraph";
import ImageSlider from "../components/ImageSlider";

export default function IndexPage(){
    return(
        <dev>
            <AppBarGeneral/>
            <ImageSlider/>
            <dec>
                <BarGraph/>
            </dec>
        </dev>
    );
}