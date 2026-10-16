import { component$ } from '@builder.io/qwik';

import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'
import Nosotros from './pages/aboutus'


export default component$(() => {

  return <>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge"></meta>
      <meta content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff" http-equiv="Content-Type" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/src/routes/assets/vendor/bootstrap/bootstrap.min.css"></link>
      <link rel="stylesheet" href="/src/routes/assets/vendor/font-awesome/font-awesome.min.css"></link>
      <link rel="stylesheet" href="/src/routes/assets/vendor/aos/aos.css"></link>
      <link rel="stylesheet" href="/src/routes/assets/css/design.css"></link>
      <link rel="icon" type="image/png" href="/public/favicon.svg"></link>
      <title>Index</title>
    </head>
    <body data-spy="scroll" data-target="#navbarNav" data-offset="50">
      <Header />
      <Home />
      <Nosotros />
      <Footer />
      <script src="/src/routes/assets/js/jquery.min.js"></script>
      <script src='/src/routes/assets/vendor/bootstrap/bootstrap.min.js'></script>
      <script src="/src/routes/assets/vendor/aos/aos.js"></script>
      <script src="/src/routes/assets/vendor/smoothscroll/smoothscroll.js"></script>
      <script src="/src/routes/assets/js/custom.js"></script>
    </body>
  </>
});