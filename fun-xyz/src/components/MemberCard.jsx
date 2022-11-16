import { quotes, linkedin, twitter } from '../assets'

const MemberCard = ({ name, title, tagline, image, linkedin_url, twitter_url }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 member-card'>
        <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
            {tagline}
        </p>

        <div className='flex flex-row'>
            <img src={image} alt={name} className='w-[48px] h-48px] rounded-full' />
            <div className='flex flex-col ml-4'>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
            </div>
            <div className='mx-5'>
                <a href={linkedin_url} target="_blank"><img src={linkedin} className='my-1' /></a>
                <a href={twitter_url} target="_blank"><img src={twitter} className='my-3' /></a>
            </div>
        </div>
    </div>
)

export default MemberCard