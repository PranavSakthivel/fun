import styles from '../styles';
import { blockchain } from '../assets';

const Home = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className='flex flex-row justify-between items-center w-full'
      >
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Decentralized <br className="sm:block hidden" /> {" "}
          <span className="text-gradient">
            multi-chain access
          </span> {" "}
          <br />
          control applications.
        </h1>
      </div>
      <br/>
      <p className='mx-1 font-poppins font-semibold text-dimWhite text-[20px]'>
        SUMMER '23
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={blockchain} alt="blockchain" className='w-[100%] h-[100%] z-[5]'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 white__gradient'/>
    </div>
  </section>
)

export default Home