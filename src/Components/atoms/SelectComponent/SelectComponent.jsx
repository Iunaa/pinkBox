import { useEffect, useState } from "react";
import Styles from "./selectcomponent.module.scss";
import ButtonLink from "../ButtonLink/ButtonLink";
import ButtonLinkColor from "../ButtonLinkColor/ButtonLinkColor";
import CardImage from "../CardImage/CardImage";

export default function SelectComponent() {
    // Aqui iniciamos o state dos selects vazios pra podermos acessar depois
    const [selectState, setSelectState] = useState({
        productType: "",
        productHair: "",
        productSkin: "",
        productMake: "",
    });

    // Aqui temos as options pra fazer o map do select de productType
    const options = [
        { label: "Hair Products", value: "hair" },
        { label: "Skincare Products", value: "skin" },
        { label: "Makeup Products", value: "make" },
    ];

    // Criamos uma unica função pra capturar a change dos selects baseado no name unico de cada um deles
    const handleSelectChange = (event) => {
        const { name, value } = event.target;

        // Atualiza o estado anterior baseado no name do select
        setSelectState((prevSelectState) => ({
            ...prevSelectState,
            [name]: value,
        }));
    };

    // Coloquei isso pra ver no console os estados mudando conforme seleciona
    useEffect(() => {
        console.table(selectState);
    }, [selectState]);

    const renderSelect = () => {
        switch (selectState.productType) {
            case "hair":
                return (
                    <>
                        <div className={Styles.container}>
                            <label className="typography--label">
                                Hair Products
                            </label>
                            <select
                                className="typography--select"
                                name="productHair"
                                value={selectState.productHair || ""}
                                onChange={handleSelectChange}
                            >
                                <option>Damage Treatment</option>
                                <option>Capillary Hydration</option>
                                <option>Hair Moisturizing</option>
                                <option>Hair Reconstruction</option>
                                <option>Thermal Protectors</option>
                                <option>Sheet Masks</option>
                            </select>
                        </div>
                    </>
                );
            case "skin":
                return (
                    <>
                        <label className="typography--label">
                            Skincare Products
                        </label>
                        <select
                            className="typography--select"
                            name="productSkin"
                            value={selectState.productSkin || ""}
                            onChange={handleSelectChange}
                        >
                            <option>Facial Cleaning</option>
                            <option>Facial Tonic</option>
                            <option>Eye Cream</option>
                            <option>Sunscreen</option>
                            <option>Hydration</option>
                            <option>Facial Tonic</option>
                        </select>
                    </>
                );

            case "make":
                return (
                    <>
                        <label className="typography--label">
                            Makeup Products
                        </label>
                        <select
                            className="typography--select"
                            name="productMake"
                            value={selectState.productMake || ""}
                            onChange={handleSelectChange}
                        >
                            <option>Skin Preparation</option>
                            <option>Eye Makeup</option>
                            <option>Lipsticks</option>
                            <option>Makeup Fixer</option>
                            <option>Blush</option>
                        </select>
                    </>
                );

            default:
                <></>;
        }
    };

    return (
        <div className={Styles.container}>
            <select
                name="productType"
                value={selectState.productType || ""}
                onChange={handleSelectChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {renderSelect()}

            <ButtonLinkColor
                className={`${Styles.container__btnLink} typography--btnPinkBorder`}
                label="Subscribe Now"
            />
        </div>
    );
}
