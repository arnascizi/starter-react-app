import { FC, ReactElement, ReactNode } from 'react';
import {Col, Row} from "react-bootstrap";

import styles from './page-layout.module.css'

interface Props {
    children: ReactNode;
    leftMenu?: ReactElement;
}

export const PageLayout: FC<Props> = ({children, leftMenu}) => (
    <Row className={`${styles.layoutRow} gap-3 px-3`}>
        {leftMenu && <Col className={styles.menu}>{leftMenu}</Col>}
        <Col>{children}</Col>
    </Row>
);