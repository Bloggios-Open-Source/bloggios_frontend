import styles from './OAuthSocialButtons.module.scss';
import {FcGoogle} from "react-icons/fc";
import {FaFacebook, FaGithub} from "react-icons/fa";

export const socialButtonsList = [
    {
        id: 1,
        icon: <FcGoogle />,
        label: 'Continue with Google',
        path: '/'
    },
    {
        id: 2,
        icon: <FaGithub />,
        label: 'Continue with Github',
        path: '/'
    },
    {
        id: 3,
        icon: <FaFacebook color={'#2383e2'} />,
        label: 'Continue with Facebook',
        path: '/'
    }
];

const OAuthSocialButtons = () => {
    return (
        <div className={styles.socialButtons__mainContainer__div}>
            {socialButtonsList.map((item)=> (
                <button key={item.id} className={styles.socialButtons__socialButton__button}>
                    {item.icon}
                    <span>{item.label}</span>
                </button>
            ))}
        </div>
    );
};

export default OAuthSocialButtons;