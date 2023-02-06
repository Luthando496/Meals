import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Gallery = () => {
  return (
    <>
        <Navbar />

    <div className="gallery-inside">
        <div className="content">
            <h1>A Look Inside</h1>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore.</p>
        </div>
    </div>

    <div className="grid-photos">
        <div className="grid-containera">
            <div className="imga">
                <img src="img/pexels-emma-jones-793267.jpg" alt="pexels-emma-jones-793267.jpg" />
            </div>
            <div className="imga">
                <img src="img/momos-g0c8010fb4_640.jpg" alt="momos-g0c8010fb4_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/pexels-chandra-e-754315.jpg" alt="pexels-chandra-e-754315.jpg" />
            </div>
            <div className="imga">
                <img src="img/toast-g64eef2abb_640.jpg" alt="toast-g64eef2abb_640.jpg" />
            </div>

            {/* end */}
            <div className="imga">
                <img src="img/bread-gaebd6f9c0_640.jpg" alt="bread-gaebd6f9c0_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/sardines-gda110f017_640.jpg" alt="sardines-gda110f017_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/pasta-g5bd607a8e_640.jpg" alt="pasta-g5bd607a8e_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/bakery-gc10174fcb_640.jpg" alt="bakery-gc10174fcb_640.jpg" />
            </div>
            {/* <!-- end --> */}
            <div className="imga">
                <img src="img/pexels-saveurs-secretes-6730114.jpg" alt="pexels-saveurs-secretes-6730114.jpg" />
            </div>

            <div className="imga">
                <img src="img/pexels-vikki-10545132.jpg" alt="" />
            </div>
            <div className="imga">
                <img src="img/tomatoes-g3118b16c3_640.jpg" alt="" />
            </div>
            <div className="imga">
                <img src="img/pexels-kindel-media-8351609.jpg" alt="" />
            </div>
            {/* <!-- end --> */}
            <div className="imga">
                <img src="img/pexels-lisa-fotios-1002543.jpg" alt="pexels-lisa-fotios-1002543.jpg" />
            </div>
            <div className="imga">
                <img src="img/coffee-gdb638d545_640.jpg" alt="coffee-gdb638d545_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/phone-wallpaper-gf5ed9210b_640.jpg" alt="phone-wallpaper-gf5ed9210b_640.jpg" />
            </div>
            <div className="imga">
                <img src="img/garlic-g1bfac75be_640.jpg" alt="garlic-g1bfac75be_640.jpg" />
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}


export default Gallery