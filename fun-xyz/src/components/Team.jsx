import { team, careers_link } from '../constants';
import styles from '../styles';
import MemberCard from './MemberCard';
import Button from './Button';

const Team = () => (
  <section id='team' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -left-[1%] rounded-full blue__gradient'/>

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>Meet The Team</h1>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full team-container relative z-[1]'>
      { team.map((card) => (
        <MemberCard key={card.id} {...card} />
      ))}
    </div>
    <Button text="Join Us" styles='py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-full' link={careers_link}/>
  </section>

)

export default Team