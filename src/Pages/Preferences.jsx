import Styles from "./preferences.module.scss";
import CardImage from "../Components/atoms/CardImage/CardImage";
import SelectComponent from "../Components/atoms/SelectComponent/SelectComponent";
import hair from "../assets/img/hair.jpg";
import skin from "../assets/img/skin.jpg";
import make from "../assets/img/make.jpg";


export default function Preferences() {
    return (
        <>
            <div className={Styles.container}>
                <h1 className={`${Styles.container__title} typography--h1`}>
                    Choose your preferences
                </h1>
                <div className={Styles.content}>
                    <CardImage
                        className={Styles.content__cardImage}
                        src={hair}
                    />
                    <CardImage
                        className={Styles.content__cardImage}
                        src={skin}
                    />
                    <CardImage
                        className={Styles.content__cardImage}
                        src={make}
                    />
                </div>
                <SelectComponent />

                
            </div>
        </>
    );
}
