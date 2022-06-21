import { FunctionComponent, ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

type Props = {
    children: ReactNode
}

const Principal: FunctionComponent<Props> = function (props) {
    return (
        <>
            <Cabecalho />
            <Menu />
            <main>
                {props.children}
            </main>
            <Rodape/>
        </>
    );
};

export default Principal;