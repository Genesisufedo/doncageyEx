import React from 'react';
import { Rotate, Slide, Zoom } from 'react-awesome-reveal';

const Services = () => {
  return (
    <>
    <div id='service'>
    <h1  className=' text-center pt-10 '>OUR SERVICES</h1>
    <div className='cards flex flex-wrap w-[100%] m:d w[100%] mx-auto gap-[30px] justify-center' >
        
        <div className='card_body md:w[100%] p-4 w-[400px] shadow-xl rounded-xl' >
            <Zoom>
            <img src='forexsignal.jpg  ' className='fximg' />
            <p className='text-center'>Basic of Forex trading</p>
            <p className='text-center'>Advance of Forex trading</p>
            <p className='text-center'>Forex signals</p>
            </Zoom>
        </div>
        <div className='card_body md:w[100%] p-4 w-[400px] shadow-xl rounded-xl'>
            <Zoom>
            <img src='mentorship.jpg' className=' w-[100%]  ' />
            <p className='text-center' >Crypto trading</p>
            <p className='text-center'>Crypto exchange vendor class</p>
            <p className='text-center'>crypto futures and spot signals</p>
            <p className='text-center'> crypto update</p>
            </Zoom>
            
        </div>
        <div className='card_body md:w[100%] p-4 w-[400px] shadow-xl rounded-xl' >
           <Zoom>
           <img src='crypto.jpg' className='w-[100%]' />
            <p className='text-center'>how to identify coin that will 100X  early</p>
            <p className='text-center'>Early Airdrops</p>
           </Zoom>

        </div>
    </div>
    <h1 className='text-center py-10 text-xl' >PRICING</h1>
    <div className='cards flex flex-wrap w-[100%] m:d w[100%] mx-auto gap-[30px] justify-center' >
        <Zoom>
        <div  className='card_body md:w[100%] p-4 w-[400px]  rounded-xl  sm:border-b-red-600 '>
            <h4 className='text-center text-green-600'>BASIC PLAN</h4>
            <h1 className='text-center'>$20</h1>
            <img src="https://bisuccy.com/public/img/pricing-starter.png" alt="basic plan" />
            <p className='text-center'>how to identify early 100x coins</p>
        </div>
        
        <div  className='card_body md:w[100%] p-4 w-[400px]  rounded-xl'>
            <h4 className='text-center text-orange-700'>STANDARD PLAN</h4>
            <h1 className='text-center'>$50</h1>
            <img src="https://bisuccy.com/public/img/pricing-business.png" alt="STANDARD plan" />
            <p className='text-center'>crypto trading mentorship fee for future trading, it comes with crypto signals</p>
        </div>
    
        <div  className='card_body md:w[100%] p-4 w-[400px]  rounded-xl'>
            <h4 className='text-center text-pink-600'>PREMIUM PLAN</h4>
            <h1 className='text-center'>$75</h1>
            <img src="https://bisuccy.com/public/img/pricing-ultimate.png" alt="PREMIUM plan" />
            <p className='text-center'>mentorship fee for basic and advance forex, it comes with forex signal</p>
        </div>
        </Zoom>
    </div>
    <h1 className='text-center py-10 text-xl uppercase font-semibold bg-blue-300 border-4 border-indigo-200 border-y-indigo-500   '  > We have the best  forex broker we use which are  exness for financial markets and Deriv for synthetic trading</h1>
    <div className='cards flex flex-wrap w-[100%] m:d w[100%] mx-auto gap-[100px] justify-center'>
        <div className='card_body md:w[100%] p-4 w-[600px] shadow-sm rounded-xl'>
            <h2 className='text-center capitalize font-semibold text-2xl ' >sign up, deposit and message us on whatsapp</h2>
            <a href="https://one.exness-track.com/a/c_u0kfej8fxb" target="_blank" rel="noopener noreferrer"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAtFBMVEUAAAD/zwH/////1AH/0QHovwH/1wH/3QH/ 2QGgoKD19fW8vLxsWwDy8vLV1dXm5uZubm6AgIBTU1PKyspCQkKVlZXnxAH50AGKiord3d1nVAASEhJdXV3s7OxlZWXCwsL/4wE2NjYlJSUbGxuysrJKPQBBNACghACCbQAPDAB2dnapqakXEQAqIgDOqwGmjAC5mgFXRwAxKAAjHADXuQEeFwCReAB3YwDuzQE7LQDCpQGtlwFoG7PnAAAMdklEQVR4nO1aaXeyPBNuCwJuuLO5W3crYqVivf///3oDJCEZUGyrvuc8J9fph5qQZGYyO7y8CAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI/Bofv1jztbo7GZdOmjvLxdkt3ATjPMvb7+AbYI3pPYeZ76XnGoqGoChSLpTReZ63476g8otUZbF9AieHpSshNqTXGyFri9w9F4oC1pycJ3Di7JSRJt/KCCJLMXKvZeaBHSXT+344K1+OZ6o3X0lMlptrLhUf8KKcdo9XsdnOUH7Eiizlk/V5NHheZMlfPtz0V4GrKZfIvsBLPllzz+Q3lZT8u/w7job0A1sJydLO+zxe9i64a83cPd5cVrsT5EVmkWYUqViu6R8NhVcxzQ++Hs7Li8dJUNJUFQUZkwXgRTVyydouTvy1yIq7fzwrL4vESCV1NJJ8b3EMAodiv/dMTsYjP5esuWsCj6zuPp/Ay3IkE9lpJ/eYPtIpcC5JGu1y9wxOwIspRuURtENUYhHKsmK6xwzl+fQUjaVLOR3ztvzcmTDo+4+3/PBgNzJvFDXOWUnGYW9wkVRW/NxcBAV9zlzQ3t4zcrEwcwp5QcE8k8b5TuOuBeUiuV4s8FUQKI3g/nRnYeaHCnHJ0+5dib8W43jI2fDraHLsh4HyKeaCjl6EFiMZyyxPuz36XIRBKhas5kFQ4cGJATk+oGLmvycE/fhsVwp1J1MNZv9MLupJmjcLUxQD4FxJSk3HB+aiFLKcymOwRJFNVpdZU47Ly1jTFpGKITPiay3ZWGB6V8cCnyzIqu/8pqj+FZDbRSEw09Ue+QyHIesLOThuSjb9IN6NZ/9Vkv49I1Bi7JH5a4UMt7kFJZWsuYxpfJ+Bv1IUVHDOXFC6aGZuRLonAg3FygyD2Z9UjixF2/HaclRBVFT9JfBiKIF7Ri5GsTqqr8o5dTHfCxj00rkIulNQQY5AcNHyk567Yuupr9IRWuj+zNMpSVnp7hwaCH9TipHf6bgv5qh6MkDkPyxBcLmUi3wuLhd0qAx9UtBPMCuggpHPAGc7XvVRipjpuEM4fH7A3KXpPStQJtgbsspbdgUEF0m7VlHNdlJW4wB5sSd6ZALHlDTWe36A4IJEvLsq4kOQYTiyGzytkcygYkoSo0SzMyBNyc7ZWDiFFDfmk/JKAJ4ZB3hbWS1UckW8MNPNDv//wo1jKjTHPOw02IDw8lNEb5RhM6jcf04txmGf3MzMhRlKfnWMXLuawUvkAp/QGgeYFZSYma8g1UbN79SvZgUtk5eQG+PpDm3ua5E3m+9AqiWZ51xaDkuDj0jcDor6lC4Zg8+zqi7C4AJT5NMirzpG5TGXAMgSaMUi97F8WikT4mOhqv/mS9hGvaVTP99xDUtkJTu4jfK8gjnCUpUKMLhI0jlfQUBIihKFACbSsurmxqk7wjGkV5AtKmZ+Sxz5Po5uRYsaUHsPevcbXuHcD9+uAgxXMyq55vIScFkPcl3LeM0WtpmQJ3laBP30ZBC/b/JBAffGlWsjOwUQeW6KV/fArKACJR/dUlEtFL7Twb0M+wTtgTAfcPPv+q/4Wo54nUBCvKGi+nS5+hjl1eCBQIM1m6oFD3bSMw9ey9XShcABpm+klagCvdqrouR3qP+Ar0ohlb/ccOBhWVC4SJmZg829kwwF5Vce5tbmC/gCBYk4XxVmuxOrmSjpyeb/CzSpX6N3sw+KoHsYKGXzlurQ8dmaHyU9F1/srRwXfrIiSQ95GbBKy02+4SXdjM9XZMW/Ft7RJYL2gCwZ94+gh4UJ+3fSa+47pO2Su5ZXSclpwHwEqZATfjtwR0YQvuBr4NdRAcVt6foL5MA3udtUb2jA7F1YhiLLvGs7zVHhR0Yops2QXaP86tI71O2xwMcORT3flEAuUh8WSSPvbhF0Cwt9lFeGQT/kRlZPXrCCbmB1CDyDK91kSS3cWhQHhdQXX2rhPpezSr10oO9OndC4JU0peMF+Pv/chvicz/bHs6Fw/MthJnx7Xj87wwAaiu8OFfUWfi8VBgpixd9eZBSKOtJMwz17nnd2C7I6UuEbSuNnwfyQ7khLql/5a3ozh18ahKVLIqPPhR8XvqgA1mLA789kRTH+/ZSOj1TNdod2B+wiRy1xzhidf4Z0+UMtxKPp7n7zhnIPvzqLVOIPvaiPZUrF0nnlytkZUvY3mpImGefjL7PFw/EEd5VVY/lbt7Z3kfZzGElZ1fGXs/A1FeTw4Sdb5nnh/CHxDXxwPCLg172oPfwQoVLZZwvma+4cXRRFQ5OJ/iTFcHfB/vtvJjtLnV+pBLPfvSz40arVYV457pA3c89nb3F05tsHlVbPfPGRCqACAgICAgICAgIC/0VMmnWrg9DojblRjGSw28ZDbTwwxj/fwx/tcBerzu6RYDxohEdY6/hZiG47JmHdSy8fD2LqBu1uLivjdVmvvYWo2i2rnYxvbD1CmY41W/GIvcYDxfh3Cz0xtlrRLrWWlaanVxza1eiMfmu6TrPT27QICcPigJtqF1u1EqauuJ5c56U37L8lqOoNMtFd1/DgFI+8D/FAi5CLB0pNxGeV7pFwj2HZJeaM2hTMdy2dmS7VNsx8vcUsLfWHgyu307VqbzyqG8q9hemrYgYt/EifPlHGD7R73DZlToDjMstKxE6Po6EI5zcJL1Uw1crWYo5eVjIdogaTKR7SI1E18ZmlRA8wM30gklKHOWLSSh3Bc9NMTVPteEmRN72saAOqYvZwSAmqk+m2TbYI+SO6wFBaJtRD+TGKsqEs6mWqTi1GW3Sw+K00Tq3N4BOiTYRW5n7aTSo0wqD18kKuacrQUX7LRn9NH+lgRmsxGRb+mWgSvvBSud5sTO0+y+kYC1NvNNfFaKrWfLmALjECKmtMcIfSS862mwP8rM1aL8NMf9ixNoT3Et2hjeVuE8UiboXuYbE0dHtFO5RcjF6sOMNYtZod/a180WTIQeVkKD5JT5aQ+xhiIdXW7A6UmdKwF5I/IHpJvUgj1vpqoh5YPnSfDr17TFXizNbxo2UimUmHO51DHYud0Zt6fHRi4sB8qx3ONZbpMKEdb0kk2J2m5DWJF+mAGduCDp36sn6xmRsuu3ib6qBOgb0bY2ZNzrh5p0uZoXraxR5liJlpkstPzhjEi2rk9htEIK1OD9CM1Qy5jmI9J1y+Y1JKNQZYS5jHLIYbHdgfiTPJMNYz4s7qmJwqc0SVv/023b9klzvcHXQTR1drFQfX+HnPCAAYQ/axxD/262CLNDM6z8waOu0EVP1Z/1uyp+wZDXZBbXglm5nA4J+ADQMvY5LFcLHwNmYal5mhFj/m6eiXmdxtyE1VWxc986T/dgk2xwy97CncIpcZ6zIziWTaQEVsJk8HYbN/yZ1NSEjqFCFYn0UcEkLJAlvcejPVaeqIIiPkd5AO6ax/tbmpS1GT2EzxArMYFrsVn57fbDP9i+pBaFm3+swlcklLb8pOTbO9NLlC++oxbV5mfDDIZWaARZ6ytgwMpjrJKyFJzWKL2sQFJ9BIT783Qb4w5m85Ce23MUPMYcjIcwwqxmTxuIGXl8gUfXIyIL7gQkJD0kjGrjvI1a+b42QPEoummKmqxVKSy8xLMf7NGG67rG+sepMKpW13kuUkH4p/vbc2Peraxlgu6USBo/StQzOpUDmrdlIqYlreyu91/F+fNZt8ZupYYDTcNiMJ13TqS1Aeohd7mIKmzd7MoPpmbwbkKspXb4bG51I5onAwxTpLE01S74SGTzhna718ZpICrxMOTWiFTK8qFHjJHnYG4263iYtSmxEliv1rpJjjDibuUuDsEsG/1cLmBfGPVRKESWYV6daEkFFOFC2fGboHIjhshRATp3kmrV/7tm0z5dNLEuCiKdJGGGZ2d6LHM6urYhfMxullj8wn0eYGZkJdSSNZkS4mkSrHl59R0zM3mgYMvhHpRI9wVk0jMo04P2ImMz9bwwUcsLSKGVPlq9lzBxzVp3JvkOYM0TraaqqSHW9iJlFQAq5abaRSRBoyeylRby4qGV4xrSZJeH9InVVTL0WoJhlC046HSiQXHMY/mQCPFw15B9rRE5GV7A7vkCZFPaEAJZNs2myxiUFVt3KqmpCdTksPTUxvMeVEt93ASDbo9sgYJgf/ZlLzejwCa4/JuqyHZ+j6tJEOFJNepxx6B11vbQa87Lttaxr3UVvTvH5msgjhxkd/jbwjHk6AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwH8F/wOjZSfEu8s+lgAAAABJRU5ErkJggg==" alt=" Register  with exness broker and hit me up" className='himg' /> <i className='himg'  /><i className=' pl-11 capitalize' >Register  with exness broker and hit me up</i> </a>
        </div>
        <div className='card_body md:w[100%] p-4 w-[600px] shadow-sm rounded-xl'>
        <h2 className='text-center capitalize font-semibold text-2xl ' >sign up, deposit and message us on whatsapp</h2>
        <a href="https://track.deriv.com/_meH_e0mUCZ8KqFKZ7JdnQ2Nd7ZgqdRLk/1/" target="_blank" rel="noopener noreferrer"> <img src="data:image/png;base64,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" alt=" Register with DERIV synthetic indices  using the link  " className='himg placeholder:'  /><i className=' pl-11 capitalize '  >Register with DERIV synthetic indices  using the link </i></a>

        </div>
    </div>

    </div>
    </>
  );
}

export default Services;
