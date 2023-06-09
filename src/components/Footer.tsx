import Image from "next/image";

import styles from "./Footer.module.css";



export default function Footer() {
    var year: number = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.containerLeft}>
                    <div className={styles.name}>
                        @kyeryoong
                    </div>

                    <div className={styles.name}>
                        Kim Young-Woo
                    </div>

                    <div className={styles.name}>
                        김영우
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.contact}>
                        contact
                    </div>

                    <div className={styles.buttonsContainer}>
                        <Image width={30} height={30} alt="" src={"/home/email.png"} className={styles.buttonImage} onClick={() => window.open("mailto:kyeryoong@gmail.com?subject=안녕하세요, archive-eng을 통해서 이메일 드립니다.")} />
                        <Image width={30} height={30} alt="" src={"/home/github.png"} className={styles.buttonImage} onClick={() => window.open("https://github.com/kyeryoong")} />
                        <Image width={30} height={30} alt="" src={"/home/linkedin.png"} className={styles.buttonImage} onClick={() => window.open("https://www.linkedin.com/in/kyeryoong/")} />
                    </div>
                </div>
            </div>

            <div className={styles.allRightsReserved}>
                {year}. archive-eng. All rights reserved.
            </div>
        </div>
    )
}