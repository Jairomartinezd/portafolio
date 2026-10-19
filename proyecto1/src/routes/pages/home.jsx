import { component$ } from '@builder.io/qwik';
 
export default component$(() => {

  return <>
    <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">
        <div class="bg-overlay"></div>
            <div class="container">
                <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto col-12">
                            <div class="hero-text mt-5 text-center">
                                <h6 data-aos="fade-up" data-aos-delay="300">Empieza t&uacute; nueva vida fitness</h6>
                                <h1 class="text-white" data-aos="fade-up" data-aos-delay="500">Entrena como los Grandes</h1>
                                <a href="#feature" class="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Descubre M&aacute;s</a>
                                <a href="#about" class="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">Explorar</a>                              
                            </div>
                        </div>
                </div>
            </div>
     </section>

     <section class="feature" id="feature">
        <div class="container">
            <div class="row">
                <div class="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                    <h2 class="mb-3 text-white" data-aos="fade-up">Quieres formar parte del mejor box de la ciudad?</h2>
                    <h6 class="mb-4 text-white" data-aos="fade-up">Pregunta por nuestros planes</h6>
                </div>
                <div class="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                        <div class="about-working-hours">
                            <div>
                               <h3 class="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Horarios Disponibles</h3>
                               <strong class="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Lunes a Viernes</strong>
                               <p data-aos="fade-up" data-aos-delay="800">7:00 AM - 8:00 AM</p>
                               <p data-aos="fade-up" data-aos-delay="800">8:00 AM - 9:00 AM</p>
                               <p data-aos="fade-up" data-aos-delay="800">4:00 PM - 5:00 PM</p>
                               <p data-aos="fade-up" data-aos-delay="800">5:00 PM - 6:00 PM</p>
                               <p data-aos="fade-up" data-aos-delay="800">6:00 PM - 7:00 PM</p>
                               <strong class="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">S&aacute;bado</strong>
                               <p data-aos="fade-up" data-aos-delay="800">9:00 AM - 11:00 AM</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </>
});