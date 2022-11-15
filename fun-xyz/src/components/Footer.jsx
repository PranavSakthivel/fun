import styles from '../styles';
import { logo } from '../assets';
import { footer, socials } from '../constants';

export const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={logo} alt='fun' className='w-[72px] h-[72px] object-contain'/>
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
            <p className='font-poppins font-normal text-center text-[18px] leading[-27px] text-white'>
                { footer }
            </p>
            <div className='flex flex-row md:mt-0 mt-6'>
                { socials.map((social, index) => (
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socials.length-1 ? 'mr-6' : 'mr-0'}`}/>
                ))}
            </div>
        </div>
    </section>
)

export default Footer