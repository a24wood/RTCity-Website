import commonStyles from "../styles/Common.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container-fluid p-4">
            <div className="row justify-content-between align-items-center">
                <div className="col-12 col-md-4">
                    <div className="d-inline-block align-middle ms-2">
                        <Link href="/">
                            <a className={`${commonStyles.LogoTitle} ${commonStyles.LogoTitle__Black}`}>
                                RTCity
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-8 text-end d-none d-md-block">
                    <div className="d-inline mx-3">
                        <Link href="/team" passHref>
                            <a className={`${commonStyles.Link} ${commonStyles.Link__Black} ${commonStyles.Link__Highlight}`}>
                                Team
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Navbar
}