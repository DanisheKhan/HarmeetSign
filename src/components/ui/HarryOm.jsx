import React from 'react'

function HarryOm() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-200 shadow-md p-6 md:p-12 rounded-lg max-w-6xl mb-8 mx-auto'>
      <div className='flex flex-col flex-1 space-y-4 md:space-y-6 pr-0 md:pr-8 mb-6 md:mb-0'>
        <div className="border-b border-gray-300 pb-2 mb-2">
          <h2 className='text-3xl md:text-5xl font-serif font-medium text-gray-800'>Harry <span className="text-amber-600">Om</span></h2>
          <div className="w-16 h-0.5 bg-amber-500 mt-2"></div>
        </div>
        <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
          Harry Om is the spiritual and wellness‑focused persona of Harmeet Singh (aka Harry), one half of the acclaimed Bollywood music duo Meet Bros. Beyond composing chart‑topping hits, Harry Om leads a spiritual journey shared via his dedicated Instagram page <span className="font-medium">@harryomofficial</span>.
        </p>
        <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
          His feed offers tranquil reel clips and meditative reflections—"Channelling Inner Peace" was a recent highlight in January 2025 that resonated deeply with 33K followers. Under the guidance of this mindful alter‑ego, Harmeet connects with fans in a calmer, introspective space—balancing the high‑energy rhythms of Bollywood with soulful serenity.
        </p>
        <div className="pt-2">
          <button className='bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 md:px-6 rounded text-sm md:text-base transition-colors duration-300'>
            Learn More
          </button>
        </div>
      </div>
      <div className='flex-1 mt-4 md:mt-0'>
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
          <img
            src="/public/HImgs/img18.png"
            alt="Person meditating"
            className='w-full h-auto transition-transform duration-700 hover:scale-105'
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent py-4 px-6">
            <p className="text-white text-xs md:text-sm font-medium">Spiritual Journey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HarryOm