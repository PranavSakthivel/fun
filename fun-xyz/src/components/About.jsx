import { features, about_fun } from '../constants';
import styles, { layout } from '../styles';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index, link }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
)

const About = () => {
    return (
        <section id='about' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    {about_fun.title}
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {about_fun.desc}
                </p>
                <div>
                    <Button text='Learn More' styles='mt-10 bg-blue-gradient text-primary outline-none' link={about_fun.fun_pdf_link} />
                    <Button text='Odsy Network' styles='mt-5 mx-5 border border-white-2 text-white' link={about_fun.odsy_link} />
                </div>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>

        </section>
    )
}

export default About