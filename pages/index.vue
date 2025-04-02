<script setup>
useHead({
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Shadows+Into+Light&display=swap'
        }
    ]
})
</script>
<template>
    <section class="">
        <p class="description mx-auto w-max my-[50px]">САЙТ ПОРТФОЛИО ВЕБ-РАЗРАБОТЧИКА</p>
        <div class="name w-min mx-auto my-[100px]">
            <h1 class="text-7xl w-max font-[800] text-sky-800">Устинов Тимофей</h1>
        </div>
    </section>

</template>
<style>
body {
    background-size: 200px;
    background-color: #fbf9fc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%237092ed' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    font-family: "Montserrat", sans-serif;
}

.description {
    animation: fadeIn 0.6s ease-out;
}

.name {
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 1;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-200px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>