import React from 'react'

function HarryOm() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-gray-200 p-12 rounded-lg max-w-6xl mb-8 mx-auto'>
      <div className='flex flex-col flex-1 space-y-6 pr-0 md:pr-8 mb-6 md:mb-0'>
        <h2 className='text-5xl font-bold text-black'>Harry Om</h2>
        <p className='text-gray-800'>
          Harry Om is the spiritual and wellness‑focused persona of Harmeet Singh (aka Harry), one half of the acclaimed Bollywood music duo Meet Bros. Beyond composing chart‑topping hits, Harry Om leads a spiritual journey shared via his dedicated Instagram page @harryomofficial. His feed offers tranquil reel clips and meditative reflections—“Channelling Inner Peace” was a recent highlight in January 2025 that resonated deeply with 33K followers Under the guidance of this mindful alter‑ego, Harmeet connects with fans in a calmer, introspective space—balancing the high‑energy rhythms of Bollywood with soulful serenity.
        </p>
        <div>
          <button className='bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-6 rounded'>
            Know More
          </button>
        </div>
      </div>
      <div className='flex-1'>
        <img 
          src="/public/HImgs/img18.png" 
          alt="Person meditating" 
          className='w-full h-auto rounded-lg'
        />
      </div>
    </div>
  )
}

export default HarryOm