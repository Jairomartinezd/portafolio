<template>
    <section class="contact section" id="contact">
          <div class="container">
               <div class="row">

                    <div class="ml-auto col-lg-5 col-md-6 col-12">
                        <h2 class="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Preguntas Frecuentes</h2>

                        <form action="#" method="post" class="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
                            <input type="text" class="form-control" name="cf-name" placeholder="Nombre">

                            <input type="email" class="form-control" name="cf-email" placeholder="Email">

                            <textarea class="form-control" rows="5" name="cf-message" placeholder="Escribe tu mensaje aquí"></textarea>

                            <button type="submit" class="form-control" id="submit-button" name="submit">Enviar Mensaje</button>
                        </form>
                    </div>

                    <div class="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                        <h2 class="mb-4" data-aos="fade-up" data-aos-delay="600">¿Dónde nos puedes encontrar?</h2>

                        <p data-aos="fade-up" data-aos-delay="800"><i class="fa fa-map-marker mr-1"></i> Av. 97 Salvador Feo La Cruz Norte-Sur, Naguanagua 2005, Carabobo</p>
                        <!-- How to change your own map point
                            1. Go to Google Maps
                            2. Click on your location point
                            3. Click "Share" and choose "Embed map" tab
                            4. Copy only URL and paste it within the src="" field below
                        -->
                        <div class="google-map" data-aos="fade-up" data-aos-delay="900">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.8547615778593!2d-68.00805153497247!3d10.230330474645697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d007b58ae75%3A0xed4769e3d2a37740!2sThe%20Kingdom%20Box!5e1!3m2!1ses-419!2sve!4v1795491391734!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                    </div>
                    
               </div>
          </div>
     </section>

</template>