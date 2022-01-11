import Image from "next/image";
import Link from "next/link";
import commonStyles from "../styles/Common.module.css";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={`container-fluid px-4 py-5 ${commonStyles.Container__Black}`}>
            <div className="row">
                <div className="col-12 col-md-4 mb-3">
                    <div className="d-inline-block align-middle ms-2">
                        <Link href="/">
                            <a className={`${commonStyles.LogoTitle} ${commonStyles.LogoTitle__White}`}>
                                RTCity
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Footer,
}