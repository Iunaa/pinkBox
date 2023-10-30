import SelectComponent from "../../atoms/SelectComponent/SelectComponent";
import Styles from "./preferenceslist.module.scss";

export default function PreferencesList(props){
    return (
        <div className={Styles.container}>
           

            <SelectComponent/>
        </div>
    );
}