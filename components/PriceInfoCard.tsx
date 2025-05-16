import React from 'react'
interface Props {
    title: string,
    iconSrc: string,
    borderColor: string,
    value: String
}


const PriceInfoCard = ({title, iconSrc, value, borderColor} : Props) => {

  return (
    <div className ={`price-info_card border-l-[${borderColor}] flex items-center gap-3`}>
        <p className='text-base text-black-100'>
            {title}
        </p>
        <div className ='flex gap-1'>
            <img 
                src={iconSrc}
                alt={title}
                width={24}
                height={24}
            />
            <p className='text-2xl font-bold text-secondary'>
                {value}
            </p>

        </div>

    </div>
  )
}

export default PriceInfoCard