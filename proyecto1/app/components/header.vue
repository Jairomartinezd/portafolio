<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">

            <NuxtLink class="navbar-brand" to="/">
                <img src="~/assets/img/powerbox.png" alt="PowerBox Logo" width="100" height="100" />
            </NuxtLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link smoothScroll">Home</a>
                    </li>

                    <li class="nav-item">
                        <a href="#about" class="nav-link smoothScroll">Sobre Nosotros</a>
                    </li>

                    <li class="nav-item">
                        <a href="#class" class="nav-link smoothScroll">Clases</a>
                    </li>

                    <li class="nav-item">
                        <a href="#schedule" class="nav-link smoothScroll">Schedules</a>
                    </li>

                    <li class="nav-item">
                        <a href="#contact" class="nav-link smoothScroll">Contact</a>
                    </li>
                </ul>

                <ul class="social-icon ml-lg-3">
                    <li><NuxtLink to="https://fb.com/tooplate" class="fa fa-facebook"></NuxtLink></li>
                    <li><NuxtLink to="https://twitter.com/tooplate" class="fa fa-twitter"></NuxtLink></li>
                    <li><NuxtLink to="https://instagram.com/tooplate" class="fa fa-instagram"></NuxtLink></li>
                </ul>
            </div>

        </div>
    </nav>
</template>
